


class AppState extends EventEmitter {
    /** @type {import('./Models/Value').Value[]} */
    snacks = [
        new Snack('Doritos', 1.50),
        new Snack('Snickers', 1.75),
        new Snack('Coke', 2.00)
    ]
}

const currency = 0.25