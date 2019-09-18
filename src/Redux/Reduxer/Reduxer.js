
import {ON_CLICK_CONSOLE_LOG} from "../Axions/onClickLog";
import {RECEIVE_WEATHER} from "../Axions/receiveweather";

let initialState = [{initialStore: {}}]

export default function stateStore (state = initialState, action){
    switch (action.type){
        case ON_CLICK_CONSOLE_LOG :
        return console.log(action.log)
        case RECEIVE_WEATHER:
        return action.weather.map(weather => ({...weather}))
        default:
        return state
    }
}