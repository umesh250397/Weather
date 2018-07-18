import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) { //state = [] because we are going to make a list of cities
  switch (action.type) {
    case FETCH_WEATHER:
      // ES6 same as state.concat([action.payload.data]);
      //never return a manipulated state like state.push(action.payload.data);
      return [action.payload.data, ...state];
      break;
    default:

  }
  return state;
}
