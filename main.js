//import Screen from "./UI/Screen.js" 
//Button from "./UI/Button.js"
import titleScreen from "./UI/titleScreen.js"

var cvs = document.getElementById("canvas")

function main(){
	titleScreen.applyTo(cvs)
	titleScreen.init()
}

main()
