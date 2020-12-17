/* building UI Screen
 */

function Screen(){
	this.applyTo = function(cvs){
		this.cvs = cvs
		this.ctx = cvs.getContext("2d")
	}
	this.view = function(){}
	this.addFeatures = function(){}
	this.removeFeatures = function(){
		this.removeAllButtons()
	}
	this.init = function(){
		//draw background
		this.view()
		//add facilities
		this.addFeatures()
		this.drawAllAnimation()
	}
	this.kill = function(){
		//remove facilities
		//fill background with default color maybe
		this.removeFeatures()
	}
	this.buttons = []
	this.addButton = function(b){
		this.cvs.addEventListener("click", b.buttonFunc)
		this.buttons.push(b)
	}
	this.registerButton = this.addButton
	this.removeButton = function(b){
		this.cvs.removeEventListener("click", b.buttonFunc)
		if(this.buttons.indexOf(b)!=-1)
			this.buttons.splice(this.buttons.indexOf(b), 1)
	}
	this.addAllButtons = function(buttonList){
		buttonList.forEach(b=>{
			this.cvs.addEventListener("click", b.buttonFunc)
		})
	}
	this.registerAllButtons = this.addAllButtons
	this.removeAllButtons  = function(){
		this.buttons.forEach(b=>{
			this.cvs.removeEventListener("click", b.buttonFunc)
		})
		this.buttons = [] // clear it
	}
}

export default Screen


/* or register background needed to be drawn
 * then requese an animationFrame to handle it 
 */

/* maybe a flag for if using requestAnimationFrame
 */
