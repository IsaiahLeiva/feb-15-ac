import { ProxyState } from "../AppState";

class SnackService {
    // TODO Create method to add a quarter.  This should target a property on the APPSTATE. and increase it. then console log it.
    _insertQuarter() {
        ProxyState.money += 0.25
        console.log(ProxyState.money);
    }

}

export const snacksService = new SnackService()