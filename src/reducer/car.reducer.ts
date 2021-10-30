import { ADD_CAR } from "src/action/car.actions";
import { Car } from "src/model/car";

export function carReducer(state: Car[]=[] , action:any) {
  switch (action.type) {
    case ADD_CAR:
        return [...state, action.payload];
    default:
        return state;
    }
}