import React from 'react';
import './Person.css'
const person = (props) => {
    return (
        <div className='Person'>
          <p>Hello {props.name} world with {props.age}! </p>
          <p>{props.children}</p>
          <button onClick={props.click}>Inner BTN</button>
          <input onChange={props.changed} type="text" value={props.name}/>
        </div>
    )
};

export default person;