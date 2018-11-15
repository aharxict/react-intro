import React from 'react';

const person = (props) => {
    return (
        <div>
          <p>Hello {props.name} world with {props.age}! </p>
          <p>{props.children}</p>
          <button onClick={props.click}>Inner BTN</button>
        </div>
    )
};

export default person;