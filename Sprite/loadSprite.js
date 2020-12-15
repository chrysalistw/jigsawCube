import Sprite from "./Sprite.js"

var spr = {}
var loadSprites = async function(){
	let test = await Sprite.loadSource("../pics/test-3x3.png")
	spr.test = new Array(3*3).fill(0)
	spr.test = spr.test.map(
		(e,n)=>{
			let x = n%3
			let y = (n-x)/3
			return new Sprite(test, 30*x, 30*y, 30, 30)
		}
	)
}

export default loadSprites
export { spr }
