import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSmurf } from '../state/actionCreators';
import Smurf from './Smurf';
import styled from 'styled-components';

const CharacterList = styled.div`
  display: flex;
`

const SmurfList = props => {
  const { getSmurf, smurfs, isFetching } = props;
  useEffect(()=> {
    getSmurf()
  },[getSmurf])

  if(isFetching) {
    return <h1>Smurfs loading</h1>
  }

  return (
    <CharacterList>
      {
        smurfs.map(character => <Smurf keys={character.id} character={character} />)
      }
    </CharacterList>
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