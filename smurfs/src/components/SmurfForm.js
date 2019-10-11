import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addSmurf } from '../state/actionCreators';

 const SmurfForm = props => {
  const { addSmurf, isPosting} = props;
  const [smurf, setSmurf] = useState({name:'', age:'', height:''});

  const handleChange = event => {
    setSmurf({ ...smurf, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSmurf(smurf);
    setSmurf({name:'', age:'', height:''});
  }

  if(isPosting) {
    return <h1>Adding Smurf...</h1>
  }

  return (
    <form onSubmit={handleSubmit} >
      <h2>Add New Smurf Here</h2>
      <label>Smurf Name:</label>
      <input 
        type='text'
        name='name'
        value={smurf.name}
        onChange={handleChange}
      />
      <label>Smurf Age:</label>
      <input 
        type='number'
        name='age'
        value={smurf.age}
        onChange={handleChange}
      />
      <label>Smurf Height:</label>
      <input 
        type='text'
        name='height'
        value={smurf.height}
        onChange={handleChange}
      />
      <button type='submit'>Add Smurf</button>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isPosting: state.isPosting,
    error: state.error   
  }
}

export default connect(mapStateToProps, { addSmurf })(SmurfForm);