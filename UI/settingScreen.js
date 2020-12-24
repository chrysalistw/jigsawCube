import Screen from "./Screen.js"
import Button from "./Button.js"
import titleScreen from "./titleScreen.js"

var settingScreen = new Screen()
var ss = settingScreen

ss.view = function(){
	this.ctx.fillStyle = sessionStorage.bgColor||"#0FC"
	this.ctx.fillRect(0, 0, this.cvs.width, this.cvs.height)
}
ss.addFeatures = function(){
	//go back to title
	new Button(0, 0, 50, 25, e=>{
		ss.kill()
		titleScreen.init()
	}).attachView(
		ss.strokedSquare("red", 0, 0, 50, 25)
	).applyTo(ss)
	new Button(60,10,50,50, e=>{
		sessionStorage.setItem("bgColor", "blue")
		ss.reboot()
	}).attachView(
		ss.strokedSquare("blue", 60, 10, 50, 50)
	).applyTo(ss)
	new Button(120,10,50,50, e=>{
		sessionStorage.setItem("bgColor", "#0FC")
		ss.reboot()
	}).attachView(
		ss.strokedSquare("#0FC", 120, 10, 50, 50)
	).applyTo(ss)
	new Button(180,10,50,50, e=>{
		sessionStorage.setItem("bgColor", "orange")
		ss.reboot()
	}).attachView(
		ss.strokedSquare("orange", 180, 10, 50, 50)
	).applyTo(ss)

	//choose level
	new Button(10,80,50,50, e=>{
		sessionStorage.setItem("level", 1)
	}).attachView(
		ss.strokedSquare("#ccc", 10, 80, 50, 50)
	).applyTo(ss)
	new Button(70,80,50,50, e=>{
		sessionStorage.setItem("level",2)
	}).attachView(
		ss.strokedSquare("#eee", 70, 80, 50, 50)
	).applyTo(ss)
}
ss.strokedSquare = function(color, x, y, h, w){
	return scr=>{
		scr.ctx.strokeStyle = "black"
		scr.ctx.strokeRect(x, y, h, w)
		scr.ctx.fillStyle = color
		scr.ctx.fillRect(x, y, h, w)
	}
}
//choosing level
//controller
//Local Storage

export default settingScreen
