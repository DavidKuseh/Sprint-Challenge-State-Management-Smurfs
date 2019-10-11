import React, { useEffect } from 'react';
import * as actionCreators from '../state/actionCreators';
import Smurf from './Smurf';
import { connect } from 'react-redux';

export const SmurfsList = (props) => {

    useEffect(() => {
        props.getChars();
    })
    return (
        <div>
            {
                props.state.smurfs.map(character => <Smurf key={character.id} props={character}/>)
            }
        </div>
    )
}

export default connect(
    state => state, 
    actionCreators, 
  )(SmurfsList);