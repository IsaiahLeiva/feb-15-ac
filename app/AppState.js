import { Snack } from "./Models/SnackModel.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  // /** @type {import('./Models/Value').Value[]} */
  // values = [
  //   quarter = 0.25
  // ]
  money = 0
  snacks = [
    new Snack('Snickers', 1.50),
    new Snack('Coke', 2.00),
    new Snack('Doritos', 1.50)
  ]
}


//NOTE: make the snack array above

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
