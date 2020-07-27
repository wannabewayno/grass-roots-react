import React, { useState, useEffect } from 'react';
import { imgStyle, inputStyle, labelBox, labelStyle, containerStyle } from './style.js'
import magnifyingGlass from './magnifying-glass.png';
import destructureColour from '../../../lib/Colour/destructureColour'

export default function SearchBar({
    icon,
    name,
    placeholder='search...',
    color='rgb(125,125,125)',
    handleliftup,
    labelColor,
    inputBGColor,
    inputColor,
    container={},
    label={},
    input={},
}) {

    // we need to parse all the colours the user might set
    const colour        = destructureColour(color) // base colour

    const colourClone   = colour.clone()
    const labelColour   = labelColor? labelColor : colourClone.getContrast()  // user colour or contrasting colour
    
    const inputBGColour = inputBGColor? inputBGColor: undefined // user defined or default
    const inputColour   = inputColor? inputColor: inputBGColour? destructureColour(inputBGColour).getContrast():undefined // user defined or contrast to background colour
    
    //everything that uses colour will now be turned to CSS
    colour.CSS()

    if (!handleliftup){
        handleliftup = () => console.warn(
            "SearchBar is not sharing it's state with the container!",
            "Can't use a form component not wrapped by a FormContainer.",
            "Consider wrapping SearchBar in a FormContainer.")
    }

    const [searchValue, setSearchValue ] = useState('');

    const handleSearchInput = event => {
        const value = event.target.value
        setSearchValue(value);
    }

    useEffect(()=>{
        // makes searchValue available to FormContainer
        handleliftup({stateName:name.id,value:searchValue})
        // eslint-disable-next-line react-hooks/exhaustive-deps
        return () => handleliftup({stateName:name.id,toDelete:true})
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [searchValue])

    return(
        <div style={{...containerStyle, ...container}}>
            <input 
                type='text'
                value={searchValue}
                placeholder={placeholder}
                onChange={event => handleSearchInput(event)}
                style={{ borderColor:colour,...inputStyle, backgroundColor:inputBGColour, color:inputColour, ...input}}
            />
            <div style={{...labelBox, backgroundColor:colour, borderColor:colour }}>
                {name.toDisplay?<label style={{...labelStyle, color:labelColour,...label}}>{name.display}</label>:null}
                {icon?<img src={magnifyingGlass} alt="search-icon" style={imgStyle}/>:null}
            </div>
        </div>
    );
}
