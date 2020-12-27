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
	spr.controller.draw(this.ctx, 10, 143.75)
	spr.tileSize.draw(this.ctx, 10, 277.5)
	spr.level.draw(this.ctx, 10, 411.25)
}
ss.addFeatures = function(){
	//bg color
	new Button(70,55+38.75/2,50,50, e=>{
		sessionStorage.setItem("bgColor", "blue")
		ss.reboot()
	}).attachView(
		ss.strokedSquare("blue", 70, 55+38.75/2, 50, 50)
	).applyTo(ss)
	new Button(130,55+38.75/2,50,50, e=>{
		sessionStorage.setItem("bgColor", "#0FC")
		ss.reboot()
	}).attachView(
		ss.strokedSquare("#0FC", 130, 55+38.75/2, 50, 50)
	).applyTo(ss)
	new Button(190,55+38.75/2,50,50, e=>{
		sessionStorage.setItem("bgColor", "orange")
		ss.reboot()
	}).attachView(
		ss.strokedSquare("orange", 190, 55+38.75/2, 50, 50)
	).applyTo(ss)
	//controller
	new Button(70, 188.75+38.75/2, 125, 45, e=>{
		sessionStorage.setItem("controller", "drag")
		ss.reboot()
	}).attachView(
		scr=>{spr.drag.draw(scr.ctx, 70, 188.75+38.75/2)}
	).applyTo(ss)
	new Button(250, 188.75+38.75/2, 125, 45, e=>{
		sessionStorage.setItem("controller", "button")
		ss.reboot()
	}).attachView(
		scr=>{spr.button.draw(scr.ctx, 250, 188.75+38.75/2)}
	).applyTo(ss)
	//tile size
	new Button(100, 322.5+38.75/2, 50, 50, e=>{
		sessionStorage.setItem("tile size", "50")
		ss.reboot()
	}).attachView(
		ss.strokedSquare("#CCC", 100, 322.5+38.75/2, 50, 50)
	).applyTo(ss)
	new Button(280, 322.5+13.75/2, 75, 75, e=>{
		sessionStorage.setItem("tile size", "75")
		ss.reboot()
	}).attachView(
		ss.strokedSquare("#CCC", 280, 322.5+13.75/2, 75, 75)
	).applyTo(ss)
	//choose level
	new Button(10,456.5+38.75/2,50,50, e=>{
		sessionStorage.setItem("level", "3x3")
	}).attachView(
		ss.strokedSquare("#ccc", 10, 456.5+38.75/2, 50, 50)
	).applyTo(ss)
	new Button(70,456.5+38.75/2,50,50, e=>{
		sessionStorage.setItem("level", "4x4")
	}).attachView(
		ss.strokedSquare("#eee", 70, 456.5+38.75/2, 50, 50)
	).applyTo(ss)
	new Button(130,456.5+38.75/2,50,50, e=>{
		sessionStorage.setItem("level", "bubble")
	}).attachView(
		ss.strokedSquare("#800", 130, 456.5+38.75/2, 50, 50)
	).applyTo(ss)
	new Button(190,456.5+38.75/2,50,50, e=>{
		sessionStorage.setItem("level", "geometry")
	}).attachView(
		ss.strokedSquare("#FFF", 190, 456.5+38.75/2, 50, 50)
	).applyTo(ss)
	//go back
	new Button(375, 545, 215, 45, e=>{
		ss.kill()
		titleScreen.init()
	}).attachView(
		()=>{spr.goBack.draw(this.ctx, 375, 545)}
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
