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
	this.addButton(button)

	this.ctx.fillStyle= "#F00"
	this.ctx.fillRect(100,100,100,100)
	//can these be integrated into Button.js?
	
	console.log(this.buttons)
}
export default titleScreen //???
