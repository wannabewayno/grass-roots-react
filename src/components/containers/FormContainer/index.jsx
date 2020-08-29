import React, { useState } from 'react';
import liftUpAll from './liftUpAll.js'

const FormContainer = ({ onSubmit, children, style }) => {

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
        <form style={{padding:'1.5rem', ...style}} onSubmit={handleFormSubmit}>
            {liftUpAll(children,handleliftup)}
        </form>
    )
}

export default FormContainer;