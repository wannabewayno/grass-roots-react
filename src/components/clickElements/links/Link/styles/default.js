import destructureColour from '../../../../../lib/Colour/destructureColour.js';

export default function defaultStyle(colourString) {
    
    const colour = destructureColour(colourString);
    const baseColour = colour.clone();

    const normalStyle = {
        margin:'0.5rem',
        padding:'0.5em 0.75em',
        color:baseColour.CSS(),
        borderWidth:'0.1em',
        borderStyle:'solid',
        borderColor:baseColour.CSS(),
    }

    const hoverStyle = {
        color:baseColour.getContrast(),
        backgroundColor:baseColour.CSS()
    }

    const activeStyle = {
        outline:'none',
        transform:'scale(0.95)'
    }

    return { normalStyle, hoverStyle, activeStyle }
}

