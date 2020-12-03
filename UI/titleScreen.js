import Screen from "./Screen.js"

var titleScreen = new Screen()
titleScreen.init = function(){
	this.ctx.fillStyle = "#0FF"
	this.ctx.fillRect(50,50,100,100)
}
export default titleScreen //???
