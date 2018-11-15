import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'qqq', age: 25 },
      { name: 'aaa', age: 22 },
      { name: 'zzz', age: 21 }
    ]
  };
  changeNameHandler = (Name) => {
    this.setState( {
      persons: [
        { name: 'CCC', age: 25 },
        { name: 'aaa', age: 22 },
        { name: Name, age: 31 }
      ]
    } )
  };

  render() {
    return (
      <div className="App">
        <h1>Title</h1>
        <button onClick={ () => this.changeNameHandler('Body') }>Switch me</button>
        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age} />
        <Person
          name = {this.state.persons[1].name}
          age = {this.state.persons[1].age}
          click = {this.changeNameHandler.bind(this, 'DDD')} > Inner text <b>bold</b> </Person>
        <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
