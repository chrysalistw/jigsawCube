import Sprite from "./Sprite.js"
import levelStat from "../levelStat.js"

var spr = {}
var loadSprites = async function(){
	spr.title = new Sprite(
		await Sprite.loadSource("pics/JCtitle.png"),
		0, 0, 432, 178
	)
	spr.start = new Sprite(
		await Sprite.loadSource("pics/start.png"),
		0, 0, 161, 49
	)
	spr.level = new Sprite(
		await Sprite.loadSource("pics/level.png"),
		0, 0, 161, 49
	)
	spr.shuffle = new Sprite(
		await Sprite.loadSource("pics/shuffle.png"),
		0, 0, 215, 45
	)
	spr.solve = new Sprite(
		await Sprite.loadSource("pics/solve.png"),
		0, 0, 155, 45
	)
	spr.chooseLevel = new Sprite(
		await Sprite.loadSource("pics/choose_level.png"),
		0, 0, 365, 45
	)
	spr.goBack = new Sprite(
		await Sprite.loadSource("pics/go_back.png"),
		0, 0, 215, 45
	)
	spr.thumb = []
	for(let level in levelStat){
		let l = levelStat[level]
		let w = l.width
		let h = l.height
		let tw = l.tileWidth
		let th = l.tileHeight
		let source = await Sprite.loadSource(l.source)
		spr.thumb[level] = new Sprite(source, 0, 0, w*tw, h*th)
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
