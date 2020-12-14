import Screen from "./Screen.js"
import Button from "./Button.js"
import titleScreen from "./titleScreen.js"
import game from "../game.js" //?

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
	let button = new Button(200,150,40,30,function(){
		//gamingScreen.kill()
		//titleScreen.init()
		gamingScreen.showContents()
	})
	button.attachView(function(screen){
		screen.ctx.fillStyle = "blue"
		screen.ctx.fillRect(this.x,this.y,this.width,this.height)
	})
	this.addButton(button)
	button.view(this)
}
gamingScreen.showContents = function(){
	console.log(this.game.field)	
	console.log(this.game.width, this.game.height)
	console.log(this.game.source)
	
}

export default gamingScreen
