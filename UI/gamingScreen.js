import Screen from "./Screen.js"
import Button from "./Button.js"
import titleScreen from "./titleScreen.js"

var gamingScreen = new Screen()
gamingScreen.view = function(){
	this.width = this.cvs.width
	this.height = this.cvs.height
	this.ctx.fillStyle = "#0FF"
	this.ctx.fillRect(0,0,this.width,this.height)
}
gamingScreen.addFeatures = function(){
	let button = new Button(200,150,40,30,function(){
		gamingScreen.kill()
		titleScreen.init()
		console.log("there is no killing at all")
		console.log("this button is created in gamingScreen")
	})
	button.attachView(function(screen){
		screen.ctx.fillStyle = "blue"
		screen.ctx.fillRect(this.x,this.y,this.width,this.height)
	})
	this.addButton(button)
	button.view(this)
}

export default gamingScreen
