function Button(x, y, w, h, func){
	this.x = x
	this.y = y
	this.width = w
	this.height = h
	this.buttonFunc = function(e){
		if(x<e.offsetX&&e.offsetX<x+w)
		if(y<e.offsetY&&e.offsetY<y+h)
			func()
	}
	this.applyTo = function(screen){
		screen.addButton(this)
		this.view(screen)
	}
	this.removeFrom = function(screen){
		screen.removeButton(this)
	}
	this.attachView = function(v){
		this.view = v
		return this
	}
	this.view = function(screen){	
		screen.ctx.fillStyle= "#F00"
		screen.ctx.fillRect(x,y,w,h)
	}
}
export default Button
