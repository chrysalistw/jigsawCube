import Screen from "./Screen.js"
import Button from "./Button.js"
import gamingScreen from "./gamingScreen.js"
import levelScreen from "./levelScreen.js"
import { spr } from "../Sprite/loadSprite.js"

var titleScreen = new Screen()
titleScreen.view = function(){
	this.ctx.fillStyle = "#FC0"
	this.ctx.fillRect(0, 0, 600, 600)
	spr.title.draw(this.ctx, 84, 81)
}
titleScreen.addFeatures = function(){
	new Button(219.5, 340, 161, 49, e=>{
		titleScreen.kill()
		gamingScreen.init()
	}).attachView(
		scr=>{spr.start.draw(scr.ctx, 219.5, 340)}
	).applyTo(titleScreen)
	new Button(219.5, 470, 161, 49, e=>{
		titleScreen.kill()
		levelScreen.init()
	}).attachView(
		scr=>{spr.level.draw(scr.ctx, 219.5, 470)}
	).applyTo(titleScreen)
}
export default titleScreen
