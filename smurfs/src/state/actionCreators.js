import * as types from './actionTypes';
import axios from 'axios';

export const getSmurf = () => dispatch => {
    dispatch({ type: types.FETCH_SMURF_START })
    axios
      .get('http://localhost:3333/smurfs')
      .then(res=>{
        dispatch({ type: types.FETCH_SMURF_SUCCESS, payload: res.data })
      })
      .catch(err => {
        dispatch({ type: types.FETCH_SMURF_FAILURE, payload: err })
      })
  }
  
  export const addSmurf = (smurf) => dispatch => {
    dispatch({ type: types.POST_SMURF_START })
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(res => {
        dispatch({ type: types.POST_SMURF_SUCCESS, payload: res.data })
      })
      .catch(err => {
        dispatch({ type: types.POST_SMURF_FAILURE, payload: err})
      })
  }