import titleScreen from "./UI/titleScreen.js"
import gamingScreen from "./UI/gamingScreen.js"
import settingScreen from "./UI/settingScreen.js"
import loadSprite from "./Sprite/loadSprite.js"
import Game from "./game.js"

import { spr } from "./Sprite/loadSprite.js"
var cvs = document.getElementById("canvas")
cvs.width = 600
cvs.height = 600

async function main(){
	//show splash / loading screen
	await loadSprite()
	console.log(spr)
	titleScreen.applyTo(cvs)

	gamingScreen.applyTo(cvs)
	let g = new Game("s", 3, 3)
	g.setField()

	gamingScreen.setGame(g)

	settingScreen.applyTo(cvs)

	titleScreen.init()
}

main()
