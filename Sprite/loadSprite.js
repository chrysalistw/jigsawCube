import Sprite from "./Sprite.js"

var spr = {}
var loadSprites = async function(){
	let test = await Sprite.loadSource("pics/test.png")
	spr.test = new Sprite(test, 0, 0, 442, 456)
}

export default loadSprites
export { spr }
