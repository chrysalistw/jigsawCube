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
	//gs.animationList.push(gs.view)
}
gamingScreen.animationList = []
gamingScreen.drawAllAnimation = function(){
	gamingScreen.animationList.forEach(
		animation => animation(gamingScreen)
	)
	console.log("animation")
	gamingScreen.animation = requestAnimationFrame(
		gamingScreen.drawAllAnimation
	)
}
gamingScreen.setGame = function(game){
	this.game = game
}
gamingScreen.addFeatures = function(){
	let gs = gamingScreen
	tile = 50
	marginX = (this.cvs.width-this.game.width*tile)/2
	marginY = (this.height-this.game.height*tile)/2
	gs.animationList.push(this.drawField)
	let goBackButton = new Button(0,0,40,30,function(){
		gamingScreen.kill()
		titleScreen.init()
	})
	goBackButton.attachView(function(screen){
		screen.ctx.fillStyle = "blue"
		screen.ctx.fillRect(goBackButton.x,goBackButton.y,
		                    goBackButton.width,goBackButton.height)
	})
	gs.animationList.push(goBackButton.view)
	this.addButton(goBackButton)
	this.generateControllButtons(this.game.width, this.game.height)
	this.topButtons.forEach(b=>{
		this.addButton(b)
		gamingScreen.animationList.push(b.view)
	})
	this.bottomButtons.forEach(b=>{
		this.addButton(b)
		gamingScreen.animationList.push(b.view)
	})
	this.rightButtons.forEach(b=>{
		this.addButton(b)
		gamingScreen.animationList.push(b.view)
	})
	this.leftButtons.forEach(b=>{
		this.addButton(b)
		gamingScreen.animationList.push(b.view)
	})
	this.dragControll.applyRange(0,0,this.cvs.width,this.cvs.height)
	this.dragControll.applyTo(this)
	
}
gamingScreen.drawField = function(){
	let gs = gamingScreen
	gs.ctx.fillStyle = "#0fC"
	gs.ctx.fillRect(0, 0, gs.width, gs.height)
	gs.game.field.forEach((e,y)=>{
		e.forEach((t,x)=>{
			spr.test[t].scaledDraw(gs.ctx, marginX+tile*x, marginY+tile*y, tile, tile)
		})
	})
	//if(dragging)
	//	gs.drawDragAnimation(dragDirection, dragFrom, dragTo)
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
		//animation of moving
		gs.dragDirection = gs.dragDirection || "" //horizontal/vertical
		let tileTemp = {
			x:Math.floor((e.offsetX-marginX)/tile),
			y:Math.floor((e.offsetY-marginY)/tile)
		}
		if(gs.direction==""){
			if(tileTemp.x!=gs.tileDragging.x
			   ||tileTemp.y!=gs.tileDragging.y){
				Math.abs(e.movementY/e.movementX) >= 1
				?gs.direction = "vertical"
				:gs.direction = "horizontal"
			}
		}else{
			if(tileTemp.x==gs.tileDragging.x
			&&tileTemp.y==gs.tileDragging.y){
				gs.direction=""
			}
		}
		gs.dragTo = tileTemp
		//gamingScreen.movingAnimation
		//gs.drawDragAnimation(gs.direction, gs.tileDragging, tileTemp)
	},
	//mouseup
	function(e){
		let tileGoTo = {
			x:Math.floor((e.offsetX-marginX)/tile),
			y:Math.floor((e.offsetY-marginY)/tile)
		}
		if(gamingScreen.direction=="vertical")
			tileGoTo.x = gamingScreen.tileDragging.x
		else if(gamingScreen.direction=="horizontal")
			tileGoTo.y = gamingScreen.tileDragging.y
		console.log("tileGoTo", tileGoTo)
		if(gamingScreen.direction=="vertical"){
			
		}
	}
)
export default gamingScreen
