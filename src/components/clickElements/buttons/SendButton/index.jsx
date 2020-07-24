import React from 'react';
import Button from '../Button/index.jsx';

export default function SendButton(props) {
    return (
    <Button
        {...props}
        text='Send'
        icon='paper-plane'
    />
    )
} 