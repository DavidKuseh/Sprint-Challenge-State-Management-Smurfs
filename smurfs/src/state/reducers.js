import * as types from './actionTypes';

const initialState = [
    {
      name: 'Brainey',
      age: 200,
      height: '5cm',
      id: 0
    }
  ];

export const initialSmurfs = {
    smurfs: initialState
}

export function smurfsReducer(state = initialSmurfs, action) {
  switch (action.type) {
    case types.GET_SMURFS:
      return {
        ...state,
        pokemon: action.payload
      };
    case types.POST_SMURFS:
        return {
            ...state,
            smurfs: {
                name: action.payload.name,
                age: action.payload.age,
                height: action.payload.height
            }
        }
    default:
      return state;
  }
}