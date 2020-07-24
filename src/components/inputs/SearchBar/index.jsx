import React, { useState, useEffect } from 'react';
import { imgStyle, inputStyle, labelBox, labelStyle, containerStyle } from './style.js'
import magnifyingGlass from './magnifying-glass.png';

export default function SearchBar({
    icon,
    name,
    placeholder='search...',
    backgroundColor='rgb(125,125,125)',
    handleliftup,
    labelColor,
    inputBGColor,
    inputColor,
    container={},
    label={},
    input={},
}) {
    
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
                style={{ borderColor:backgroundColor,...inputStyle, backgroundColor:inputBGColor, color:inputColor, ...input}}
            />
            <div style={{...labelBox, backgroundColor, borderColor:backgroundColor }}>
                {name.toDisplay?<label style={{...labelStyle, color:labelColor,...label}}>{name.display}</label>:null}
                {icon?<img src={magnifyingGlass} alt="search-icon" style={imgStyle}/>:null}
            </div>
        </div>
    );
}
