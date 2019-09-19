import {ON_CLICK_CONSOLE_LOG} from "../Axions/onClickLog";
import {BOILER_FETCH} from "../Axions/boilerFetch";

let initialState = [{initialStore: {}}]

export default function stateStore (state = initialState, action){
    switch (action.type){
        case ON_CLICK_CONSOLE_LOG :
        return console.log(action.log)
        case BOILER_FETCH:
        return action.boiler.map(boiler => ({...boiler}))
        default:
        return state
    }
}