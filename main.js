import titleScreen from "./UI/titleScreen.js"
import gamingScreen from "./UI/gamingScreen.js"
import loadSprite from "./Sprite/loadSprite.js"

var cvs = document.getElementById("canvas")
cvs.width = 500
cvs.height = 500

async function main(){
	await loadSprite()
	titleScreen.applyTo(cvs)
	titleScreen.init()
	gamingScreen.applyTo(cvs)
}

main()
