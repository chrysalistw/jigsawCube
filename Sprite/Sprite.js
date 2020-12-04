/*
 * Usage:
 * 	var mSprite = new Sprite("./spriteSource.png", x, y, w, h)
 * 	mSprite.draw(ctx, x, y)
 */
/*
 * var promise = Sprite.loadSource("./path/to/source.png")
 * promise.then(()=>{
 *	// make sprite by `new Sprite()`
 * })
 */

function Sprite(source, x, y, width, height){
	this.source = source
	this.x = x
	this.y = y
	this.width = width
	this.height = height
}
Sprite.prototype.draw = function(ctx, x, y){
	//make this wait until this.loaded is true
	ctx.drawImage(this.source,
				  this.x, this.y, this.width, this.height,
				  x, 	  y,	  this.width, this.height
	)
}
Sprite.prototype.scaledDraw = function(ctx, x, y, w, h){
	ctx.drawImage(this.source,
				  this.x, this.y, this.width, this.height,
				  x, y, w, h
	)
}

Sprite.loadSource = function(source){
	return new Promise((resolve)=>{
		let img = new Image()
		img.src = source
		img.onload = ()=>{resolve(img)}
	})
}

export default Sprite
