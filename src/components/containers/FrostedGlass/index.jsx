import React from 'react';
import configureGlass from './configureGlass.js';

export default function FrostedGlass({ shadow, backgroundColor, blur, style, children }) {

    const frostedGlass = configureGlass(shadow, backgroundColor, blur, style);

    return (
        <div style={frostedGlass}>
            {children}
        </div>
    )
}