/* building UI Screen
 */

function Screen(/*list of functions maybe*/){
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
}

export default Screen


/* or register background needed to be drawn
 * then requese an animationFrame to handle it 
 */

/* maybe a flag for if using requestAnimationFrame
 */
