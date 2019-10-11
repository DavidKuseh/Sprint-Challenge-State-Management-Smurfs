import * as types from './actionTypes';
import axios from 'axios';

export const getSmurf = () => dispatch => {
    dispatch({ type: types.FETCH_SMURF_START })
    axios
      .get('http://localhost:3001/smurfs')
      .then(res=>{
        console.log('get', res);
        dispatch({ type: types.FETCH_SMURF_SUCCESS, payload: res.data })
      })
      .catch(err => {
        console.log('get err', err)
        dispatch({ type: types.FETCH_SMURF_FAILURE, payload: err })
      })
  }
  
  export const addSmurf = (smurf) => dispatch => {
    dispatch({ type: types.POST_SMURF_START })
    axios
      .post('http://localhost:3001/smurfs', smurf)
      .then(res => {
        console.log('add', res);
        dispatch({ type: types.POST_SMURF_SUCCESS, payload: res.data })
      })
      .catch(err => {
        console.log('post err', err);
        dispatch({ type: types.POST_SMURF_FAILURE, payload: err})
      })
  }