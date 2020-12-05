import titleScreen from "./UI/titleScreen.js"
import gamingScreen from "./UI/gamingScreen.js"

var cvs = document.getElementById("canvas")
cvs.width = 500
cvs.height = 500

function main(){
	titleScreen.applyTo(cvs)
	titleScreen.init()
	gamingScreen.applyTo(cvs)
}

main()
