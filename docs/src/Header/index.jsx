import React from 'react';
import { useLocation, useParams } from 'react-router-dom'; 
import { headlineStyle, headerStyle } from './style';
import { Color } from 'grass-roots-react'; 

export default function Header({
    text,
    color = 'transparent',
    textColor,
    skin = 'default',
    position = 'relative',
    height = '10vh',
    style = {}
}) {
    const params = useParams();
    console.log('params:',params);
    const location = useLocation();
    console.log('location:',location);
    console.log('Colour:', color);
    if(!textColor) textColor = new Color(color);

    const headerCSS = { ...headerStyle, color:textColor, height, backgroundColor:color, position,...style }

    return (
        <header style={headerCSS}>
            <a style={headlineStyle} href='/'>
                {text}
            </a>
        </header>
    )
}