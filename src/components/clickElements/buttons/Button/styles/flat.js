import destructureColour from '../../../../../lib/destructureColour.js';

export default function flatStyle(colourString) {
    
    const colour = destructureColour(colourString);

    const baseColour = colour.clone().toString();
    const hoverColourObject = colour.clone()

    hoverColourObject.darken(5)
    const hoverColour = hoverColourObject.toString(); 
    

    const normalStyle = {
        border:'none',
        margin: '0.5rem',
        padding: '0.5em 0.75em',
        color: '#FFF',
        backgroundColor: baseColour,
    }

    const hoverStyle = {
        cursor:'pointer',
        backgroundColor: hoverColour,
    }

    const activeStyle = {
        outline: 'none',
        transform: 'scale(0.95)'
    }

    return { normalStyle, hoverStyle, activeStyle }
}