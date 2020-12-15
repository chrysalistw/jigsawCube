import Screen from "./Screen.js"
import Button from "./Button.js"
import titleScreen from "./titleScreen.js"
import game from "../game.js"
import { spr } from "../Sprite/loadSprite.js"

var gamingScreen = new Screen()
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
	this.drawField()
	let button = new Button(0,0,40,30,function(){
		gamingScreen.kill()
		titleScreen.init()
	})
	button.attachView(function(screen){
		screen.ctx.fillStyle = "blue"
		screen.ctx.fillRect(this.x,this.y,this.width,this.height)
	})
	this.addButton(button)
	button.view(this)
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
	
}
gamingScreen.drawField = function(){
	const gs = gamingScreen
	const tile = 50
	const c = gs.cvs
	const g = gs.game
	const marginX = (c.width-g.width*tile)/2
	const marginY = (c.height-g.height*tile)/2
	g.field.forEach((e,y)=>{
		e.forEach((t,x)=>{
			spr.test[t].scaledDraw(gs.ctx, marginX+tile*x, marginY+tile*y, tile, tile)
		})
	})
	//animation
	gs.animation = requestAnimationFrame(gamingScreen.drawField)
}
gamingScreen.generateControllButtons = function(w,h){
	const tile = 50
	const c = this.cvs
	const g = this.game
	const marginX = (c.width-g.width*tile)/2
	const marginY = (c.height-g.height*tile)/2
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

export default gamingScreen
