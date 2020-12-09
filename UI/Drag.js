var Drag = function(){
	this.onMouseDown = ()=>{}
	this.onMouseMove = ()=>{}
	this.onMouseUp = ()=>{}
}

Drag.prototype.applyTo = function(screen){
	screen.Drag = this
	screen.cvs.addEventListener("mousedown", this.onMouseDown)
	screen.cvs.addEventListener("mousemove", this.onMouseMove)
	screen.cvs.addEventListener("mouseup", this.onMouseUp)
}
Drag.prototype.removeFrom = function(screen){
	delete screen.Drag
	screen.cvs.addEventListener("mousedown", this.onMouseDown)
	screen.cvs.addEventListener("mousemove", this.onMouseMove)
	screen.cvs.addEventListener("mouseup", this.onMouseUp)
}

export default Drag
