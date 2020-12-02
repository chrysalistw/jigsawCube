/* building UI Screen
 */
import Button from "./Button.js"

function Screen(/*list of functions maybe*/){
	this.applyTo = function(cvs){
		this.cvs = cvs
		this.ctx = cvs.getContext("2d")
	}
	this.init = function(){
		//draw background
		//add facilities
		console.log("this screen inited")
	}
	this.kill = function(){
		//remove facilities
		//fill background with default color maybe
		console.log("this screen killed")
	}
	this.buttons = []
	this.addButton = function(b){
		//add button to this screen
		this.cvs.addEventListener("click", b.buttonFunc)
		this.buttons.push(b)
	}
	this.removeButton = function(b){
		//remove button from this screen
		this.cvs.removeEventListener("click", b.buttonFunc)
		if(this.buttons.indexOf(b)!=-1)
			this.buttons.splice(this.buttons.indexOf(b), 1)
	}
	this.removeAllButton = function(){
		this.buttons.forEach(b=>{
			this.cvs.removeEventListener("click", b.buttonFunc)
		})
	}
}

export default Screen


/* or register background needed to be drawn
 * then requese an animationFrame to handle it 
 */

/* maybe a flag for if using requestAnimationFrame
 */
