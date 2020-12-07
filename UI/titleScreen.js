import Screen from "./Screen.js"
import Button from "./Button.js"
import gamingScreen from "./gamingScreen.js"
//import loadSprite from "../Sprite/loadSprite.js"
import { spr } from "../Sprite/loadSprite.js"

var titleScreen = new Screen()
titleScreen.view = function(){
	this.width = this.cvs.width
	this.height = this.cvs.height
	this.ctx.fillStyle = "#0FF"
	this.ctx.fillRect(0,0,this.width,this.height)
	spr.test.draw(this.ctx, 30, 30)
}
titleScreen.addFeatures = function(){
	let button = new Button(100,100,100,50, function(){
		titleScreen.kill()
		gamingScreen.init()
	})
	button.view(this)
	this.addButton(button)
	
	// tie button.view(screen) into button.applyTo and Screen.addButton
	// dynamic rendering
}
export default titleScreen
