import React, { Component } from 'react';
import classes from './App.css';
import Aux from '../hoc/Auxiliary';
import withClass from '../hoc/withClass';
import Cockpit from '../Components/Cockpit/Cockpit';
import Persons from '../Components/Persons/Persons';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      persons:[
        {id:"aa1", name:"eko", age: 27},
        {id:"aaa2", name:"Andi", age: 37},
        {id:"aaa3", name:"Max", age: 17},
      ],
      showData: false,
      toggleCount: 0
    }
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[UPDATE App.js] inside shouldComponentUpdate', nextProps, nextState);
    return nextState.persons !== this.state.persons || nextState.showData !== this.state.showData;
    // return true;
  }

  componentWillUpdate(nextProps, nextState){
    console.log('[UPDATE App.js] inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate(){
    console.log('[UPDATE App.js] inside componentDidUpdate');
  }

  showDataHandler = () => {
    const showData = this.state.showData;

    this.setState(
      {showData: !showData}
    );
  }

  deleteDataHandler = (id) => {
    const persons = [...this.state.persons];

    persons.splice(id, 1);
    this.setState({persons:persons});
  }

  changeNameHandler = (event, id) => {
      // console.log("id = " + id);
      // console.log("event = " + {event});
      const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
      });

      const person = {
        ...this.state.persons[personIndex]
      };

      person.name = event.target.value;

      const persons = [...this.state.persons];

      persons[personIndex] = person;

      this.setState({persons:persons});
  }


  render() {

    let persons = null;

    if(this.state.showData){
      persons = <Persons 
        persons = {this.state.persons}
        clicked = {this.deleteDataHandler}
        changed = {this.changeNameHandler}
      />;
    }


    return (
      <Aux>
        <button onClick={()=>{this.setState({showData:true})}}>Show Datas</button>
        <Cockpit
          persons = {this.state.persons}
          headerTitle = {this.props.headerTitle}
          showData = {this.state.showData}
          clicked = {this.showDataHandler}
        />
        {persons}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
