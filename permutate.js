Array.prototype.evenPermutate = function(){
	let swapTimes = 0
	for(let i=this.length-1; i>0; i--){
		let rand = Math.floor(i*Math.random())
		this.swap(i, rand)
		if(i!=rand) swapTimes +=1
	}
	if(swapTimes%2!=0){
		let rand1 = Math.floor(this.length*Math.random())
		let rand2 = Math.floor(this.length*Math.random())-1
		rand2>rand1?rand2+=1:rand2=rand2
		this.swap(rand1,rand2)
	}
	return this
}
Array.prototype.shuffle = function(){
	for(let i=this.length-1; i>0; i--){
		let rand = Math.floor(i*Math.random())
		this.swap(i, rand)
	}
	return this
}
Array.prototype.swap = function(a, b){
	let temp = this[a]
	this[a] = this[b]
	this[b] = temp
}
