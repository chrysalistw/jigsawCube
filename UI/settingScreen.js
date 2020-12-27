import Screen from "./Screen.js"
import Button from "./Button.js"
import titleScreen from "./titleScreen.js"
import { spr } from "../Sprite/loadSprite.js"

var settingScreen = new Screen()
var ss = settingScreen

ss.view = function(){
	this.ctx.fillStyle = sessionStorage.bgColor||"#0FC"
	this.ctx.fillRect(0, 0, this.cvs.width, this.cvs.height)
	spr.backgroundColor.draw(this.ctx, 10, 10)
	spr.tileSize.draw(this.ctx, 10, 125)
	spr.level.draw(this.ctx, 10, 400)
}
ss.addFeatures = function(){
	//bg color
	new Button(70,65,50,50, e=>{
		sessionStorage.setItem("bgColor", "blue")
		ss.reboot()
	}).attachView(
		ss.strokedSquare("blue", 70, 65, 50, 50)
	).applyTo(ss)
	new Button(130,65,50,50, e=>{
		sessionStorage.setItem("bgColor", "#0FC")
		ss.reboot()
	}).attachView(
		ss.strokedSquare("#0FC", 130, 65, 50, 50)
	).applyTo(ss)
	new Button(190,65,50,50, e=>{
		sessionStorage.setItem("bgColor", "orange")
		ss.reboot()
	}).attachView(
		ss.strokedSquare("orange", 190, 65, 50, 50)
	).applyTo(ss)

	//choose level
	new Button(10,455,50,50, e=>{
		sessionStorage.setItem("level", "3x3")
	}).attachView(
		ss.strokedSquare("#ccc", 10, 455, 50, 50)
	).applyTo(ss)
	new Button(70,455,50,50, e=>{
		sessionStorage.setItem("level", "4x4")
	}).attachView(
		ss.strokedSquare("#eee", 70, 455, 50, 50)
	).applyTo(ss)
	new Button(130,455,50,50, e=>{
		sessionStorage.setItem("level", "bubble")
	}).attachView(
		ss.strokedSquare("#800", 130, 455, 50, 50)
	).applyTo(ss)
	new Button(190,455,50,50, e=>{
		sessionStorage.setItem("level", "geometry")
	}).attachView(
		ss.strokedSquare("#FFF", 190, 455, 50, 50)
	).applyTo(ss)
	//go back
	new Button(10, 545, 215, 45, e=>{
		ss.kill()
		titleScreen.init()
	}).attachView(
		()=>{spr.goBack.draw(this.ctx, 10, 545)}
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
