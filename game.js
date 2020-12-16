function Game(source, w, h){
	this.bgColor = "#0EE"
	this.width = w
	this.height = h
	this.source = source
	this.setField()
}
Game.prototype.setField = function(){
	this.field = new Array(this.height)
		     .fill(0)
	             .map((e,j)=>new Array(this.width)
		     .fill(0)
		     .map((m,i)=>this.width*j+i))
}


Game.prototype.moveColumnUp = function(num){
	let game = this
	return function(){
		var movingColumn = new Array()
		game.field.forEach(e=>{
			movingColumn.push(e[num])
		})
		movingColumn.push(movingColumn.shift())
		movingColumn.forEach((e,i)=>{
			game.field[i][num] = e
		})
	}
}
Game.prototype.moveColumnDown = function(num){
	let game = this
	return function(){
		var movingColumn = new Array()
		game.field.forEach(e=>{
			movingColumn.push(e[num])
		})
		movingColumn.unshift(movingColumn.pop())
		movingColumn.forEach((e,i)=>{
			game.field[i][num] = e
		})
		//UI.updateCanvas()
	}
}
Game.prototype.moveRowRight = function(num){
	let game = this
	return function(){
		var movingRow = new Array()
		game.field[num].forEach(e=>{
			movingRow.push(e)
		})
		movingRow.unshift(movingRow.pop())
		movingRow.forEach((e,i)=>{
			game.field[num][i] = e
		})
		//UI.updateCanvas()
	}
}
Game.prototype.moveRowLeft = function(num){
	let game = this
	return function(){
		var movingRow = new Array()
		game.field[num].forEach(e=>{
			movingRow.push(e)
		})
		movingRow.push(movingRow.shift())
		movingRow.forEach((e,i)=>{
			game.field[num][i] = e
		})
		//UI.updateCanvas()
	}
}

export default Game
