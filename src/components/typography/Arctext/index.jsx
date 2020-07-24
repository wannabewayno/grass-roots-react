import React, { useState, useRef, useEffect } from 'react';
import { containerStyle, letterStyle } from './style.js';
import { getChararcterDimensions, calculateStepAngles, loadValues, defaultRadius } from './arctextEngine';
import destructureUnit from '../../../lib/destructureUnit';

export default function Arctext({ radius, letterSpacing, wordSpacing, underneath, offset, font, fontSize, color, children }){
    

    if(!children){
        console.warn('You need to wrap arctext around some text!');
    } else if (Array.isArray(children)) {
        console.warn('TOO MANY CHILDREN BEING PASSED: Arctext can only handle one instance of text');
    }

    const initialState = children.split('').map(letter => {
        return { letter, ref:useRef() }
    })

    // configure letter style
    if(font)  letterStyle.font  = font;
    if(fontSize) letterStyle.fontSize = fontSize;
    if(color) letterStyle.color = color;

    // set up the state to reference after mounting
    const [ letters ] = useState( underneath? initialState.reverse() : initialState);
    
  
    useEffect(() => {
        // Default everything else to 0 if not defined by the developer
        letterSpacing = !letterSpacing? { value:0 , unit:'px'} : destructureUnit(letterSpacing);
        offset = !offset? { value:0, unit:'px' } : destructureUnit(offset);

        // finds real dimensions of charracters once mounted into the DOM
        let calibratedLetters = getChararcterDimensions(letters, wordSpacing, letterSpacing);

        //if radius hasn't been defined, make a half circle
        radius = !radius? defaultRadius(calibratedLetters) : destructureUnit(radius);

        // Calculates the angle of each letter relative to one another
        const [totalAngle, configuredLetters ] = calculateStepAngles(calibratedLetters, radius);

        // Applies the configured letter styles to the letters in the DOM
        loadValues(configuredLetters, totalAngle, radius, offset, underneath);
    },[])

    return (
        <p style={containerStyle}>
            {letters.map(({ letter, ref },index) => <span ref={ref} key={index} style={letterStyle}>{letter}</span>)}    
        </p>
    )
}

