import React, { Component } from 'react';
import styles from './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: '012', name: 'qqq', age: 25 },
      { id: '013', name: 'aaa', age: 22 },
      { id: '014', name: 'zzz', age: 21 }
    ],
    showPersons: false
  };

  nameChangeHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState( {
      persons: persons
    } )
  };
  togglePersonsHandler = () => {
    const doesShowPersons = this.state.showPersons;
    this.setState({ showPersons: !doesShowPersons});
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    // const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  render() {

    const classes = [];
    // const classes = ['red' , 'bold'].join(' ')

    if (this.state.persons.length <= 2) {
      classes.push(styles.red);
    }
    if (this.state.persons.length <= 1) {
      classes.push(styles.bold);
    }
    let persons = null;
    let btnClass = '';
    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map( (person, index) => {
            return <Person
              click = { () => this.deletePersonHandler(index) }
              name = {person.name}
              age = {person.age}
              key = {person.id}
              changed = {(event) => this.nameChangeHandler(event, person.id)}/>
          })}
        </div>
      );
      btnClass = styles.Red
    }

    return (
      <div className={styles.App}>
        <h1>Title</h1>
        <p className={classes.join(' ')}>really new APP</p>
        <button
          className={btnClass}
          onClick={this.togglePersonsHandler}>Toggle</button>
            <div>
              <h6>Separate variable block</h6>
              {persons}
            </div>
      </div>
    );
  }
}

export default App;
