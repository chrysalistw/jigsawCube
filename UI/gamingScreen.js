import Screen from "./Screen.js"
import Button from "./Button.js"
import titleScreen from "./titleScreen.js"
import game from "../game.js"
import { spr } from "../Sprite/loadSprite.js"
import Drag from "./Drag.js"

var gamingScreen = new Screen()
var tile, marginX, marginY
gamingScreen.view = function(){
	this.width = this.cvs.width
	this.height = this.cvs.height
	this.ctx.fillStyle = "#0FF"
	this.ctx.fillRect(0,0,this.width,this.height)
}
gamingScreen.setGame = function(game){
	this.game = game
}
gamingScreen.addFeatures = function(){
	tile = 50
	marginX = (this.cvs.width-this.game.width*tile)/2
	marginY = (this.height-this.game.height*tile)/2
	this.drawField()
	let goBackButton = new Button(0,0,40,30,function(){
		gamingScreen.kill()
		titleScreen.init()
	})
	goBackButton.attachView(function(screen){
		screen.ctx.fillStyle = "blue"
		screen.ctx.fillRect(this.x,this.y,this.width,this.height)
	})
	goBackButton.view(this)
	this.addButton(goBackButton)
	this.generateControllButtons(this.game.width, this.game.height)
	this.topButtons.forEach(b=>{
		this.addButton(b)
		b.view(this)
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
	//animation
	gs.animation = requestAnimationFrame(gamingScreen.drawField)
}
gamingScreen.generateControllButtons = function(w,h){
	let g = gamingScreen.game
	gamingScreen.topButtons = new Array(w).fill(0).map((e,i)=>{
		var b = new Button(
			marginX+i*tile, marginY-tile, tile, tile,
			g.moveColumnUp(i)
		)
		b.attachView(s=>{
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
		console.log(gamingScreen.tileDragging)
	},
	//mousemove
	function(e){
		//animation of moving
		gamingScreen.direction = gamingScreen.direction || "" //horizontal/vertical
		let tileTemp = {
			x:Math.floor((e.offsetX-marginX)/tile),
			y:Math.floor((e.offsetY-marginY)/tile)
		}
		if(gamingScreen.direction==""){
			if(tileTemp.x!=gamingScreen.tileDragging.x
			  ||tileTemp.y!=gamingScreen.tileDragging.y){
				Math.abs(e.movementY/e.movementX) >= 1
				?gamingScreen.direction = "vertical"
				:gamingScreen.direction = "horizontal"
			}
		}else{
			if(tileTemp.x==gamingScreen.tileDragging.x
			&&tileTemp.y==gamingScreen.tileDragging.y){
				gamingScreen.direction=""
			}
		}
		//gamingScreen.movingAnimation
		console.log(gamingScreen.direction)
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
		console.log(tileGoTo)
	}
)
export default gamingScreen
