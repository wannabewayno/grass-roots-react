import destructureColour from '../../../../../lib/destructureColour.js';

export default function defaultStyle(colourString) {
    
    const colour = destructureColour(colourString);
    const baseColour = colour.toString();
    const disabledColourObject = colour.clone(); 

    disabledColourObject.desaturate(50);
    const disabledColour = disabledColourObject.toString();

    const normalStyle = {
        margin:'0.5rem',
        padding:'0.5em 0.75em',
        color:baseColour,
        borderWidth:'0.1em',
        borderStyle:'solid',
        borderColor:baseColour,
    }

    const hoverStyle = {
        cursor:'pointer',
        color:'#FFF',
        backgroundColor:baseColour
    }

    const activeStyle = {
        outline:'none',
        transform:'scale(0.95)'
    }

    const disabledStyle = {
        cursor:'arrow',
        color:disabledColour,
    }

    return { normalStyle, hoverStyle, activeStyle, disabledStyle }
}

