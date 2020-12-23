import Screen from "./Screen.js"
import Button from "./Button.js"

var settingScreen = new Screen()
var ss = settingScreen

ss.view = function(){
	this.ctx.fillStyle = sessionStorage.bgColor||"#0FC"
	this.ctx.fillRect(0, 0, this.cvs.width, this.cvs.height)
}
ss.addFeatures = function(){
	let btnBlue = new Button(10,10,50,50, e=>{
		sessionStorage.setItem("bgColor", "blue")
		ss.reboot()
	}).attachView(scr=>{
		scr.ctx.strokeStyle = "black"
		scr.ctx.strokeRect(10,10,50,50)
		scr.ctx.fillStyle = "blue"
		scr.ctx.fillRect(10,10,50,50)
	})
	btnBlue.applyTo(ss)
	let btnCyan = new Button(70,10,50,50, e=>{
		sessionStorage.setItem("bgColor", "#0FC")
		ss.reboot()
	}).attachView(scr=>{
		scr.ctx.strokeStyle = "black"
		scr.ctx.strokeRect(70,10,50,50)
		scr.ctx.fillStyle = "#0FC"
		scr.ctx.fillRect(70,10,50,50)
	})
	btnCyan.applyTo(ss)
	let btnOrange = new Button(130,10,50,50, e=>{
		sessionStorage.setItem("bgColor", "orange")
		ss.reboot()
	}).attachView(scr=>{
		scr.ctx.strokeStyle = "black"
		scr.ctx.strokeRect(130,10,50,50)
		scr.ctx.fillStyle = "orange"
		scr.ctx.fillRect(130,10,50,50)
	})
	btnOrange.applyTo(ss)
}
//choosing level
//controller
//Local Storage

export default settingScreen
