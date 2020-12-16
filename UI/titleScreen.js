import Screen from "./Screen.js"
import Button from "./Button.js"
import gamingScreen from "./gamingScreen.js"
import Drag from "./Drag.js"

var titleScreen = new Screen()
titleScreen.view = function(){
	this.width = this.cvs.width
	this.height = this.cvs.height
	this.ctx.fillStyle = "#0FF"
	this.ctx.fillRect(0,0,this.width,this.height)
}
titleScreen.addFeatures = function(){
	let button = new Button(100,100,100,50, function(){
		titleScreen.kill()
		gamingScreen.init()
	})
	button.view(this)
	this.addButton(button)
	
	let d = new Drag(
		()=>{console.log("md")},
		()=>{console.log("mm")},
		()=>{console.log("mu")}
	)
	d.applyTo(this)
}
export default titleScreen
