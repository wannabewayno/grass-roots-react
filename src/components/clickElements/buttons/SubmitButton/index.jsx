import React from 'react';
import Button from '../Button/index.jsx';

export default function SubmitButton(props) {
    return (
        <Button
            {...props}
            type='submit'
            text={props.text}
        />
    )
}