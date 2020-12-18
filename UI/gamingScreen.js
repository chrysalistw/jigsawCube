import Screen from "./Screen.js"
import Button from "./Button.js"
import titleScreen from "./titleScreen.js"
import game from "../game.js"
import { spr } from "../Sprite/loadSprite.js"
import Drag from "./Drag.js"

var gamingScreen = new Screen()
const gs = gamingScreen
var tile, marginX, marginY
gamingScreen.view = function(){
	gs.width = gs.cvs.width
	gs.height = gs.cvs.height
	gs.ctx.fillStyle = "#0FF"
	gs.ctx.fillRect(0,0,gs.width,gs.height)
}
gamingScreen.setGame = function(game){
	this.game = game
}
gamingScreen.addFeatures = function(){
	let gs = gamingScreen
	tile = 50
	marginX = (this.cvs.width-this.game.width*tile)/2
	marginY = (this.height-this.game.height*tile)/2
	let goBackButton = new Button(0,0,40,30,function(){
		gamingScreen.kill()
		titleScreen.init()
	})
	goBackButton.attachView(function(screen){
		screen.ctx.fillStyle = "blue"
		screen.ctx.fillRect(this.x,this.y,this.width,this.height)
	})
	this.addButton(goBackButton)
	goBackButton.view(this)
	this.drawField()
	this.generateControllButtons(this.game.width, this.game.height)
	this.topButtons.forEach(b=>{
		this.addButton(b)
		b.view(this)
		//gamingScreen.animationList.push(b.view)
	})
	this.bottomButtons.forEach(b=>{
		this.addButton(b)
		b.view(this)
	})
	this.rightButtons.forEach(b=>{
		this.addButton(b)
		b.view(this)
	})
	this.leftButtons.forEach(b=>{
		this.addButton(b)
		b.view(this)
	})
	this.dragControll.applyRange(0,0,this.cvs.width,this.cvs.height)
	this.dragControll.applyTo(this)
}
gamingScreen.drawField = function(){
	let gs = gamingScreen
	gs.game.field.forEach((e,y)=>{
		e.forEach((t,x)=>{
			spr.test[t].scaledDraw(gs.ctx, marginX+tile*x, marginY+tile*y, tile, tile)
		})
	})
}
gamingScreen.drawDragAnimation = function(direction, from, to){
	let gs = gamingScreen
	let g = gs.game
	spr.test[from.y*g.width+from.x].scaledDraw(
		gs.ctx, 
		marginX+to.x*tile, marginY+to.y*tile, 
		tile, tile
	)
}
gamingScreen.generateControllButtons = function(w,h){
	let g = gamingScreen.game
	gamingScreen.topButtons = new Array(w).fill(0).map((e,i)=>{
		var b = new Button(
			marginX+i*tile, marginY-tile, tile, tile,
			g.moveColumnUp(i)
		)
		b.attachView(s=>{
			s.ctx.fillStyle = "#0ff"
			s.ctx.fillRect(
				marginX+i*tile, marginY-tile, tile, tile
			)
			s.ctx.strokeRect(
				marginX+i*tile, marginY-tile, tile, tile
			)
		})
		return b
	})	
	gamingScreen.bottomButtons = new Array(w).fill(0).map((e,i)=>{
		var b = new Button(
			marginX+i*tile, marginY+g.height*tile, tile, tile,
			g.moveColumnDown(i)
		)
		b.attachView(s=>{
			s.ctx.fillStyle = "#0ff"
			s.ctx.fillRect(
				marginX+i*tile, marginY+g.height*tile, tile, tile
			)
			s.ctx.strokeRect(
				marginX+i*tile, marginY+g.height*tile, tile, tile
			)
		})
		return b
	})	
	gamingScreen.leftButtons = new Array(h).fill(0).map((e,i)=>{
		var b = new Button(
			marginX-tile, marginY+i*tile, tile, tile,
			g.moveRowLeft(i)
		)
		b.attachView(s=>{
			s.ctx.fillStyle = "#0ff"
			s.ctx.fillRect(
				marginX-tile, marginY+i*tile, tile, tile
			)
			s.ctx.strokeRect(
				marginX-tile, marginY+i*tile, tile, tile
			)
		})
		return b
	})	
	gamingScreen.rightButtons = new Array(h).fill(0).map((e,i)=>{
		var b = new Button(
			marginX+g.width*tile, marginY+i*tile, tile, tile,
			g.moveRowRight(i)
		)
		b.attachView(s=>{
			s.ctx.fillStyle = "#0ff"
			s.ctx.fillRect(
				marginX+g.width*tile, marginY+i*tile, tile, tile
			)
			s.ctx.strokeRect(
				marginX+g.width*tile, marginY+i*tile, tile, tile
			)
		})
		return b
	})	
}
gamingScreen.dragControll = new Drag(
	//mousedown
	function(e){
		gamingScreen.tileDragging = {
			x:Math.floor((e.offsetX-marginX)/tile),
			y:Math.floor((e.offsetY-marginY)/tile)
		}
	},
	//mousemove
	function(e){
		let gs = gamingScreen
		gs.direction = gs.direction || "" //horizontal/vertical
		if(gs.direction=="")
			Math.abs(e.movementY/e.movementX) >= 1
			?gs.direction = "vertical"
			:gs.direction = "horizontal"
		let tileTemp = {
			x: gs.direction=="vertical"
			   ?gs.tileDragging.x
			   :Math.floor((e.offsetX-marginX)/tile),
			y: gs.direction=="horizontal"
			   ?gs.tileDragging.y
			   :Math.floor((e.offsetY-marginY)/tile)
		}
		//not using game.move
		console.log(gs.tileDragging.x, gs.tileDragging.y, ",", tileTemp.x, tileTemp.y)
		if(gs.direction=="vetical"){
			//getNewColumn(tileDragging, tileTemp)
		}
		if(gs.direction=="horizontal"){}
	},
	//mouseup
	function(e){
		gs.direction = ""
	}
)
export default gamingScreen
