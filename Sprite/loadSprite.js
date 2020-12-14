import Sprite from "./Sprite.js"

var spr = {}
var loadSprites = async function(){
	let test = await Sprite.loadSource("../pics/test-3x3.png")
	spr.test = [...Array(3)].map(x=>Array(3).fill(0))
	spr.test = spr.test.map((e,y)=>{
		return e.map((t,x)=>{
			return new Sprite(test, 30*x, 30*y, 30, 30)
		})
	})
}

export default loadSprites
export { spr }
