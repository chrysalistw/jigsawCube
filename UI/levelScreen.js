import Screen from "./Screen.js"
import Button from "./Button.js"
import titleScreen from "./titleScreen.js"
import gamingScreen from "./gamingScreen.js"
import levelStat from "../levelStat.js"
import { spr } from "../Sprite/loadSprite.js"

var levelScreen = new Screen()
const ls = levelScreen

levelScreen.view = function(){
	this.ctx.fillStyle = "#FC0"
	this.ctx.fillRect(0, 0, 600, 600)
	spr.chooseLevel.draw(this.ctx, 117.5, 50)
}
levelScreen.addFeatures = function(){
	//choose level
	new Button(225,125,75,75, e=>{
		localStorage.setItem("level", "3x3")
		levelScreen.kill()
		gamingScreen.init()
	}).attachView(
		ls.drawThumb("3x3", 225, 125)
	).applyTo(ls)
	new Button(325,125,100,100, e=>{
		localStorage.setItem("level", "4x4")
		levelScreen.kill()
		gamingScreen.init()
	}).attachView(
		ls.drawThumb("4x4", 325, 125)
	).applyTo(ls)
	new Button(325, 400,7*25,5*25, e=>{
		localStorage.setItem("level", "bubble")
		levelScreen.kill()
		gamingScreen.init()
	}).attachView(
		ls.drawThumb("bubble", 325, 400)
	).applyTo(ls)
	new Button(325, 250, 8*25, 5*25, e=>{
		localStorage.setItem("level", "damselfly")
		levelScreen.kill()
		gamingScreen.init()
	}).attachView(
		ls.drawThumb("damselfly", 325, 250)
	).applyTo(ls)
	new Button(100, 225, 8*25, 6*25, e=>{
		localStorage.setItem("level", "waterdrop")
		levelScreen.kill()
		gamingScreen.init()
	}).attachView(
		ls.drawThumb("waterdrop", 100, 225)
	).applyTo(ls)
	new Button(175, 400, 125, 125, e=>{
		localStorage.setItem("level", "flower")
		levelScreen.kill()
		gamingScreen.init()
	}).attachView(
		ls.drawThumb("flower", 175, 400)
	).applyTo(ls)
	//go back
	new Button(375, 545, 215, 45, e=>{
		ls.kill()
		titleScreen.init()
	}).attachView(
		()=>{spr.goBack.draw(this.ctx, 375, 545)}
	).applyTo(ls)
}
ls.drawThumb = function(level, x, y){
	return scr=>{
		let l = levelStat[level]
		spr.thumb[level].scaledDraw(scr.ctx, x, y, l.width*25, l.height*25)
	}
}

export default levelScreen
