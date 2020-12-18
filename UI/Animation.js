function Animation(){
	this.animation = []
	this.animationFrame = 0
	this.animationFrameFunction = function(){
		this.animation.forEach(
			ani=>ani()
		)
	}
}
Animation.prototype.register = function(ani){
	this.animation.push(ani)
}
Animation.prototype.cancel = function(ani){
	this.animation.splice(this.animation.indexOf(ani), 1)
}
Animation.prototype.start = function(){
	this.animationFrame = requestAnimationFrame(this.animationFrameFunction)
}
Animation.prototype.stop = function(){
	cancelAnimationFrame(this.animationFrame)
}
export default Animation
