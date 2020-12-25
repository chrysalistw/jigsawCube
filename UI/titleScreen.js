import Screen from "./Screen.js"
import Button from "./Button.js"
import gamingScreen from "./gamingScreen.js"
import settingScreen from "./settingScreen.js"
import Drag from "./Drag.js"
import { spr } from "../Sprite/loadSprite.js"

var titleScreen = new Screen()
titleScreen.view = function(){
	let ctx = this.ctx
	spr.title.draw(ctx, 0, 0, 600, 600)
}
titleScreen.addFeatures = function(){
	new Button(250, 350, 100, 50, e=>{
		titleScreen.kill()
		gamingScreen.init()
	}).attachView(
		scr=>{
			scr.ctx.fillStyle = "red"
			scr.ctx.fillRect(250, 350, 100, 50)
		}
	).applyTo(titleScreen)
	new Button(250, 450, 100, 50, e=>{
		titleScreen.kill()
		settingScreen.init()
	}).attachView(
		scr=>{
			scr.ctx.fillStyle = "red"
			scr.ctx.fillRect(250, 450, 100, 50)
		}
	).applyTo(titleScreen)
}
export default titleScreen
