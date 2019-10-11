import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Smurf from './Smurf';

import { getSmurf } from '../state/actionCreators';

const SmurfList = props => {
  const { getSmurf, smurfs, isFetching, error } = props;

  useEffect(()=> {
    getSmurf()
  },[getSmurf])

  if(isFetching) {
    return <h1>Smurfs loading</h1>
  }

  return (
    <div>
      {
        smurfs.map(character => <Smurf key={character.id} character={character} /> )
      }
    </div>
  )
}

const mapStateToProps = state => {
  console.log('initial', state)
  return {
    smurfs: state.smurfs,
    isFetching: state.ifFetching,
    error: state.error    
  }
}

export default connect(mapStateToProps, { getSmurf })(SmurfList)