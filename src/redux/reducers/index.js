import * as types from '../actionTypes';

const initialState = { userCoordinates: [] };

export default function reducer(state = initialState, action)  {
  switch (action.type) {
    case 'GET_COORDINATE':
      return {...state, userCoordinates: action.payload};
    default:
      return state;
  }
};