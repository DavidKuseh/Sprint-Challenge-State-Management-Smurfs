import React from 'react';
import styled from 'styled-components';

const Character = styled.div`
    width: 300px;
    border: 3px solid gray;
    margin: 15px;
`

const Smurf = props => {
    const { name, age , height } = props.character;
    return (
        <Character>
            <h2>Name: {name}</h2>
            <h3>Age: {age}</h3>
            <h3>Height: {height}</h3>
        </Character>
    )
}

export default Smurf;