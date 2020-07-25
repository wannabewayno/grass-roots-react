import React, { useState } from 'react';
import './style.css';
import liftUpAll from './liftUpAll.js'

const FormContainer = ({ onSubmit, children }) => {

    const [ formState, setFormState ] = useState({});

    const handleliftup = ({stateName, value, toDelete}) => {
        formState[stateName] = value;
        if (toDelete){
            delete formState[stateName]
        }
        setFormState(formState);
    }
    
    // const [ formElements ] = useState(liftUpAll(children,handleliftup))

    const handleFormSubmit = event => {
        event.preventDefault()
        onSubmit(formState);
    }

    return (
        <form style={{padding:'1.5rem'}} onSubmit={handleFormSubmit}>
            {liftUpAll(children,handleliftup)}
        </form>
    )
}

export default FormContainer;