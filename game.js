import "./permutate.js"

function Game(w, h){
	this.width = w
	this.height = h
	this.setField()
}
Game.prototype.setField = function(){
	this.field = new Array(this.height)
		     .fill(0)
		     .map((e,j)=>new Array(this.width)
		     .fill(0)
		     .map((m,i)=>this.width*j+i))
}

Game.prototype.shuffle = function(){
	let flat = []
	this.field.forEach(e=>{flat=flat.concat(e)})
	if(this.width%2!=0&&this.height%2!=0)
		flat.evenPermutate()
	else
		flat.shuffle()
	let w = this.width
	this.field.forEach((e,i)=>{
		this.field[i]=new Array(...flat.slice(i*w,i*w+w))
	})
}

export default Game
