//import Screen from "./UI/Screen.js" 
//Button from "./UI/Button.js"
import titleScreen from "./UI/titleScreen.js"

var cvs = document.getElementById("canvas")
cvs.width = 500
cvs.height = 500

function main(){
	titleScreen.applyTo(cvs)
	titleScreen.init()
}

main()
