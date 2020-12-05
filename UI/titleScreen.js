import Screen from "./Screen.js"
import Button from "./Button.js"
import gamingScreen from "./gamingScreen.js"

var titleScreen = new Screen()
titleScreen.view = function(){
	this.width = this.cvs.width
	this.height = this.cvs.height
	this.ctx.fillStyle = "#0FF"
	this.ctx.fillRect(0,0,this.width,this.height)
}
titleScreen.addFeatures = function(){
	let button = new Button(100,100,100,50, function(){
		gamingScreen.init()
		console.log("this button is created successfully")
	})
	button.view(this)
	this.addButton(button)
	
	// tie button.view(screen) into button.applyTo and Screen.addButton
	// dynamic rendering
}
export default titleScreen
