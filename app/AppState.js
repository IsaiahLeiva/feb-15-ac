import { Snack } from "./Models/Value"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []
}

//NOTE here's my snack array:

snacks = [
  new Snack('Snickers', 1.75),
  new Snack('Twinkie', 2.00),
  new Snack('Doritos', 1.50)

]



export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
