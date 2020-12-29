import Screen from "./Screen.js"
import Button from "./Button.js"
import titleScreen from "./titleScreen.js"
import levelStat from "../levelStat.js"
import Game from "../game.js"
import { spr } from "../Sprite/loadSprite.js"
import Drag from "./Drag.js"

var gamingScreen = new Screen()
const gs = gamingScreen
var tile = 75, marginX, marginY
gamingScreen.view = function(){
	gs.width = gs.cvs.width
	gs.height = gs.cvs.height
	gs.ctx.fillStyle = "#FC0"
	gs.ctx.fillRect(0,0,gs.width,gs.height)
}
gamingScreen.setGame = function(game){
	this.game = game
	if(!localStorage[gs.level])
		this.game.shuffle()
	else
		this.game.field = JSON.parse(localStorage[gs.level])
	localStorage[gs.level] = JSON.stringify(gs.game.field)
}
gamingScreen.addFeatures = function(){
	let gs = gamingScreen
	gs.level = localStorage.level || "3x3"
	gs.levelStat = levelStat[gs.level]
	gs.setGame(new Game(gs.levelStat.width, gs.levelStat.height))
	marginX = (this.cvs.width-this.game.width*tile)/2
	marginY = (this.height-this.game.height*tile)/2
	// go back
	new Button(375, 545, 215, 45, e=>{
		gamingScreen.kill()
		titleScreen.init()
	}).attachView(
		scr=>{spr.goBack.draw(scr.ctx, 375, 545)}
	).applyTo(gamingScreen)
	this.drawField()
	//shuffle button
	new Button(20, 20, 215, 45, e=>{
		this.game.shuffle()
	}).attachView(
		scr=>{spr.shuffle.draw(scr.ctx, 20, 20)}
	).applyTo(gamingScreen)
	//solve button
	new Button(425, 20, 155, 45, e=>{
		this.game.setField()
	}).attachView(
		scr=>{spr.solve.draw(scr.ctx, 425, 20)}
	).applyTo(gamingScreen)
	//add drag controll
	this.dragControll.applyRange(marginX, marginY, this.game.width*tile, this.game.height*tile)
	this.dragControll.applyTo(this)
}
gamingScreen.drawField = function(){
	let gs = gamingScreen
	let l = gs.levelStat
	gs.game.field.forEach((e,y)=>{
		e.forEach((t,x)=>{
			spr[gs.level][t].scaledDraw(gs.ctx, marginX+tile*x, marginY+tile*y, tile, tile)
		})
	})
	gs.animationNumber = requestAnimationFrame(gs.drawField)
}
gamingScreen.dragControll = new Drag(
	//mousedown
	function(e){
		gamingScreen.tileDragging = {
			x:Math.floor((e.offsetX-marginX)/tile),
			y:Math.floor((e.offsetY-marginY)/tile)
		}
		gamingScreen.movingArray = []
	},
	//mousemove
	function(e){
		let gs = gamingScreen
		gs.direction = gs.direction || "" //horizontal/vertical
		let tileNow = {
			x: Math.floor((e.offsetX-marginX)/tile),
			y: Math.floor((e.offsetY-marginY)/tile)
		}
		if(gs.direction==""&&(tileNow.x!=gs.tileDragging.x||tileNow.y!=gs.tileDragging.y))
			tileNow.x == gs.tileDragging.x
			?gs.direction = "vertical"
			:gs.direction = "horizontal"
		let tileTemp = {
			x: gs.direction=="vertical"
			   ?gs.tileDragging.x:tileNow.x,
			y: gs.direction=="horizontal"
			   ?gs.tileDragging.y:tileNow.y
		}
		if(gs.direction=="vertical"){
			let shift = (gs.tileDragging.y - tileTemp.y) % gs.game.height
			if(gs.movingArray.length==0){
				gs.game.field.forEach(e=>{
					gs.movingArray.push(e[gs.tileDragging.x])
				})
			}
			let newArray = new Array(...gs.movingArray)
			if(shift>0)
				newArray.push(...newArray.splice(0, shift))
			else{
				let end = newArray.splice(shift, -shift)
				end.push(...newArray)
				newArray = end
			}
			gs.game.field.forEach((e,i)=>{
				e[gs.tileDragging.x]=newArray[i]
			})
		}
		if(gs.direction=="horizontal"){
			let shift = (gs.tileDragging.x - tileTemp.x) % gs.game.width
			if(gs.movingArray.length==0){
				gs.movingArray = new Array(...gs.game.field[gs.tileDragging.y])
			}
			let newArray = new Array(...gs.movingArray)
			if(shift>0)
				newArray.push(...newArray.splice(0, shift))
			else{
				let end = newArray.splice(shift, -shift)
				end.push(...newArray)
				newArray = end
			}
			gs.game.field[gs.tileDragging.y] = new Array(...newArray)
		}
	},
	//mouseup
	function(e){
		gs.direction = ""
		localStorage[gs.level] = JSON.stringify(gs.game.field)
	}
)
gamingScreen.kill = function(){
	this.removeAllButtons()
	gamingScreen.dragControll.removeFrom(gamingScreen)
	cancelAnimationFrame(gamingScreen.animationNumber)
}
export default gamingScreen
