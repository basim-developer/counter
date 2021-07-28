import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import { initialState } from "./counter.state";
import { counterActions } from "./courses.action-type";


export const _counterReducer = createReducer(
    initialState,

    //increment
    on(counterActions.increament, (state)=>{
        return {
            ...state,
            counter: state.counter + 1
        }
    }),

    //decrement

    on(counterActions.decrement, (state)=>{
        return{
            ...state,
            counter:state.counter -1
        }
    }),

    //Reset

    on(counterActions.reset, (state)=>{
        return{
            ...state,
            counter: 0
        }
    }),

    // custom add counter values

    on(counterActions.customIncrement, (state,action)=>{

        return{
            ...state,
            counter: (state.counter) + action.value,

        }
    }),

    on(counterActions.changeChannel, (state)=>{
        return {
            ...state,
            channelName: 'Very Charming One'
        }
    })


)


export function counterReducer(state,action){
    return _counterReducer(state,action);
}