import titleScreen from "./UI/titleScreen.js"
import gamingScreen from "./UI/gamingScreen.js"
import loadSprite from "./Sprite/loadSprite.js"
import Game from "./game.js"

var cvs = document.getElementById("canvas")
cvs.width = 600
cvs.height = 600

async function main(){
	await loadSprite()
	titleScreen.applyTo(cvs)
	titleScreen.init()
	gamingScreen.applyTo(cvs)

	let g = new Game("s", 3, 4)
	g.setField()

	gamingScreen.setGame(g)
}

main()
