import { ADD_CAR, FETCH_FULL_LIST, FETCH_LIST, REMOVE_CAR } from "src/action/car.actions";
import { Car } from "src/model/car";

  export function  carReducer(state:Car[]=[],action:any){

        switch (action.type) {
            case ADD_CAR:
                return [...state, action.payload];
            case REMOVE_CAR:
                return [...state.slice(0, action.payload.index),
                ...state.slice(action.payload.index + 1)];
            case FETCH_LIST:
                return [...state, action.payload];
            case FETCH_FULL_LIST:
                return [...action.payload];
            default:
                return state;
        }
    }