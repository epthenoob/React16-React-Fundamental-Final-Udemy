import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Auxiliary';

const cockpit = (props) => {

    let btnClasses = classes.Button;

    if(props.showData){
        btnClasses = [classes.Button, classes.Red].join(' ');
    }

    const assignedClasses = [];
    if(props.persons.length <= 2){
        assignedClasses.push(classes.red);
    }
    if(props.persons.length <= 1){
        assignedClasses.push(classes.bold);
    }

    return (
        <Aux>
            <h1 className={assignedClasses.join(' ')}>{props.headerTitle}</h1>
            <button
                className = {btnClasses}
                onClick = {props.clicked} 
            >Show Datas</button>
        </Aux>    
    );
}

export default cockpit;