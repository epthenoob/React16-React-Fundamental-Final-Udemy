import React, {Component} from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';

class Person extends Component{ 


    componentDidMount() {
        console.log('[Person.js] inside componentDidMount');
        if(this.props.position === 0){
            this.inputElement.focus();
        }
    }

    render() {
        return(
            <Aux>
                <p onClick = {this.props.clicked}>My Name is: {this.props.name} </p>
                <p>My Age is: {this.props.age}</p>
                <input 
                    ref = {(inp) => this.inputElement = inp}
                    type = "text"
                    onChange = {this.props.changed} 
                />
            </Aux>    
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, classes.Person);