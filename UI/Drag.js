var Drag = function(md, mm, mu){
	this.onMouseDown = md
	this.onMouseMove = mm
	this.onMouseUp = mu
	this.mouseDown = false
}
Drag.prototype.applyRange = function(x, y, w, h){
	this.inRange = function(e){
		if(x<e.offsetX&&e.offsetX<x+w)
		if(y<e.offsetY&&e.offsetY<y+h)
			return true
		return false
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
	let thisDrag = this
	thisDrag.md = function(e){
		if(thisDrag.inRange(e)){
			thisDrag.onMouseDown(e)
			screen.cvs.addEventListener("mousemove", thisDrag.onMouseMove)
			screen.cvs.addEventListener("mouseup", mu)
		}
	}
	let mu = function(e){
		thisDrag.onMouseUp(e)
		screen.cvs.removeEventListener("mousemove", thisDrag.onMouseMove)
		screen.cvs.removeEventListener("mouseup", mu)
	}
	screen.cvs.addEventListener("mousedown", thisDrag.md)
}
Drag.prototype.removeFrom = function(screen){
	let thisDrag = this
	screen.cvs.removeEventListener("mousedown", thisDrag.md)
}

export default Drag
