import hello from "./moduleHello.mjs"
import { dsBestFights, dsMainBosses } from "./moduleHello.mjs"
// To load an ES module, would set "type": "module" in the package.json 
// or use the .mjs extension in the module file and the file where it's call
console.log(`greeting: ${hello()}`)
console.log(`Best fights: ${dsBestFights()}`)
console.log(`Main bosses: ${dsMainBosses()}`)