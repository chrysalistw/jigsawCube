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
}
gamingScreen.drawField = function(){
	const tile = 50
	const c = this.cvs
	const g = this.game
	const marginX = (c.width-g.width*tile)/2
	const marginY = (c.height-g.height*tile)/2
	g.field.forEach((e,y)=>{
		e.forEach((t,x)=>{
			spr.test[y][x].scaledDraw(this.ctx, marginX+tile*x, marginY+tile*y, tile, tile)
		})
	})
}
gamingScreen.generateControllButtons = function(w,h){
	
}

export default gamingScreen
