import React from 'react';
import Person from './Person/Person';

const persons = (props) => {
    return props.persons.map( (person, key) => {
        return <Person 
            key = {person.id}
            position = {key}
            name = {person.name}
            age = {person.age}
            clicked = {props.clicked.bind(this, key)}
            //clicked = {(key) => props.clicked(key)}
            changed = {(event) => props.changed(event, person.id)}
        />
    });
}

export default persons;