import Sprite from "./Sprite.js"
import levelStat from "../levelStat.js"

var spr = {}
var loadSprites = async function(){
	spr.title = new Sprite(
		await Sprite.loadSource("pics/JCtitle.png"),
		0, 0, 432, 178
	)
	spr.newGame = new Sprite(
		await Sprite.loadSource("pics/new_game.png"),
		0, 0, 251, 49
	)
	spr.continue = new Sprite(
		await Sprite.loadSource("pics/continue.png"),
		0, 0, 251, 49
	)
	spr.settings = new Sprite(
		await Sprite.loadSource("pics/settings.png"),
		0, 0, 251, 49
	)
	for(let level in levelStat){
		let l = levelStat[level]
		let w = l.width
		let h = l.height
		let tw = l.tileWidth
		let th = l.tileHeight
		let source = await Sprite.loadSource(l.source)
		spr[level] = new Array(w*h).fill(0)
		spr[level] = spr[level].map(
			(e,n)=>{
				let x = n%w
				let y = (n-x)/w
				return new Sprite(source, tw*x, th*y, tw, th)
			}
		)
	}
}

export default loadSprites
export { spr }
