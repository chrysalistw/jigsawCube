import Screen from "./Screen.js"
import Button from "./Button.js"

var titleScreen = new Screen()
titleScreen.init = function(){
	this.width = this.cvs.width
	this.height = this.cvs.height
	this.ctx.fillStyle = "#0FF"
	this.ctx.fillRect(0,0,this.width,this.height)
	let button = new Button(100,100,100,100, function(){
		console.log("this button is created successfully")
	})
	button.view(this)
	this.addButton(button)
	
	//dynamic rendering
}
export default titleScreen //???
