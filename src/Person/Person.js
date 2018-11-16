import React from 'react';
import styles from './Person.css'

const person = (props) => {
    return (
        <div className = {styles.Person} >
          <p>Hello {props.name} world with {props.age}! </p>
          <p>{props.children}</p>
          {
            props.click ?
              <button onClick={props.click}>Delete  BTN</button>
              : null
          }
          <input onChange={props.changed} type="text" value={props.name}/>
        </div>
    )
};

export default person;