import * as types from './actionTypes';

const initialState = {
    smurfs:[],
    isFetching: false,
    isPosting: false,
    error: ''
  }
  
  export const smurfsReducer = (state = initialState, action) => {
    switch (action.type) {
      case types.FETCH_SMURF_START:
        return {
          ...state,
          isFetching: true,
          error: ''
        }
      case types.FETCH_SMURF_SUCCESS: 
        return {
          ...state,
          smurfs: action.payload,
          isFetching: false
        }
      case types.FETCH_SMURF_FAILURE:
        return {
          ...state,
          isFetching: false,
          error: action.payload
        }
      case types.POST_SMURF_START:
        return {
          ...state,
          isPosting: true,
          error: ''
        }
      case types.POST_SMURF_SUCCESS:
        return {
          ...state,
          smurfs: action.payload,
          isPosting: false
        }
      case types.POST_SMURF_FAILURE:
        return {
          ...state,
          isPosting: false,
          error: action.payload
        }
      default:
        return state;
    }
  }