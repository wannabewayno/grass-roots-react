import React from 'react';
import './style.css';

export default function Footer ({children, position, height }) {

    const CSS = { position, height }

    return (
        <footer style={CSS}>
            {children}
        </footer>
    )
}