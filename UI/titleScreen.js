import Screen from "./Screen.js"

var titleScreen = new Screen()
titleScreen.init = function(){
	this.width = this.cvs.width
	this.height = this.cvs.height
	this.ctx.fillStyle = "#0FF"
	this.ctx.fillRect(0,0,this.width,this.height)
}
export default titleScreen //???
