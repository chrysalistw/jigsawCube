import Screen from "./Screen.js"
import Button from "./Button.js"
import setting from "../setting.js"

var settingScreen = new Screen()
var ss = settingScreen

ss.view = function(){}
ss.addFeatures = function(){
	console.log("setting.a", setting.a)
}
//choosing level
//change bgcolor(?)
//controller
//Local Storage

export default settingScreen
