var Drag = function(md, mm, mu){
	this.onMouseDown = md
	this.onMouseMove = mm
	this.onMouseUp = mu
	this.mouseDown = false
}
Drag.prototype.applyRange = function(x, y, w, h, f){
	return function(e){
		if(x<e.offsetX&&e.offsetX<x+w)
		if(y<e.offsetY&&e.offsetY<y+h)
			f()
	}
}
Drag.prototype.attachView = function(v){
	this.view = v
}
Drag.prototype.view = function(screen){	
	screen.ctx.fillStyle= "#FC0"
	screen.ctx.fillRect(x,y,w,h)
}
Drag.prototype.applyTo = function(screen){
	screen.Drag = this
	let thisDrag = this
	let md = function(e){
		thisDrag.onMouseDown(e)
		screen.cvs.addEventListener("mousemove", thisDrag.onMouseMove)
		screen.cvs.addEventListener("mouseup", mu)
	}
	let mu = function(e){
		console.log("mouseup in Drag.js is called")
		thisDrag.onMouseDown(e)
		screen.cvs.removeEventListener("mousemove", thisDrag.onMouseMove)
		screen.cvs.removeEventListener("mouseup", mu)
	}
	screen.cvs.addEventListener("mousedown", md)
}
Drag.prototype.removeFrom = function(screen){
	delete screen.Drag
	screen.cvs.removeEventListener("mousedown", this.onMouseDown)
}

export default Drag
