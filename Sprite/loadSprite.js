import Sprite from "./Sprite.js"

var spr = {}
var loadSprites = async function(){
	let test = await Sprite.loadSource("../pics/test-3x3.png")
	//spr.test = new Sprite(test, 0, 0, 90, 90)
	spr.test = new Array(3).fill(0).map((e,y)=>{
		return new Array(2).fill(0).forEach((t,x,a)=>{
			a[y][x] = new Sprite(test, 30*x, 30*y, 30, 30)
		})
	})
	console.log(spr.test[1][2])
}

export default loadSprites
export { spr }
