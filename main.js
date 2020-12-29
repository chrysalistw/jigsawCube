import titleScreen from "./UI/titleScreen.js"
import gamingScreen from "./UI/gamingScreen.js"
import levelScreen from "./UI/levelScreen.js"
import loadSprite from "./Sprite/loadSprite.js"

var cvs = document.getElementById("canvas")
cvs.width = 600
cvs.height = 600

async function main(){
	await loadSprite()
	titleScreen.applyTo(cvs)
	gamingScreen.applyTo(cvs)
	levelScreen.applyTo(cvs)

	titleScreen.init()
}

main()
