import Screen from "./Screen.js"
import Button from "./Button.js"
import gamingScreen from "./gamingScreen.js"
import settingScreen from "./settingScreen.js"
import Drag from "./Drag.js"

var titleScreen = new Screen()
titleScreen.view = function(){
	this.width = this.cvs.width
	this.height = this.cvs.height
	this.ctx.fillStyle = sessionStorage.bgColor
	this.ctx.fillRect(0,0,this.width,this.height)
}
titleScreen.addFeatures = function(){
	let button = new Button(100,100,100,50, function(){
		titleScreen.kill()
		gamingScreen.init()
	})
	button.view(this)
	this.addButton(button)
	
	new Button(100, 200, 100, 50, e=>{
		titleScreen.kill()
		settingScreen.init()
	}).attachView(
		scr=>{
			scr.ctx.fillStyle = "red"
			scr.ctx.fillRect(100, 200, 100, 50)
		}
	).applyTo(titleScreen)
}
export default titleScreen
