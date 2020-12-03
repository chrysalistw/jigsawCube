function Button(x, y, w, h, func){
	this.buttonFunc = function(e){
		if(x<e.offsetX&&e.offsetX<x+w)
		if(y<e.offsetY&&e.offsetY<y+h)
			func()
	}
	this.applyTo = function(screen){
		screen.addButton(this.button)
	}
	this.removeFrom = function(screen){
		screen.removeButton(this.botton)
	}
}
export default Button
