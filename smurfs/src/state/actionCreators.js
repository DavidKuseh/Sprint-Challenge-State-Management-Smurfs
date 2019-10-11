import * as types from './actionTypes';
import axios from 'axios';

const url = "http://localhost:3001/smurfs";

export function getSmurfs(smurfs) {
    return { type: types.GET_SMURFS, payload: smurfs}
}

export function postSmurfs(smurfs) {
    return { type: types.POST_SMURFS, payload: smurfs}
}

export const getChars = () => dispatch => {
    axios.get(url)
    .then(res => {
        dispatch({ type: types.GET_SMURFS, payload: res.data})
    })
}