import destructureColour from '../../../../../lib/destructureColour.js';
import HSL2RGB from '../../../../../lib/HSL2RGB.js';

export default function flatStyle(colourString) {
    
    const colour = destructureColour(colourString);

    const baseColour = colour.clone().toString();
    const disabledColour = colour.clone().desaturate(50).toString();
    const hoverColourObject = colour.clone();

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

    const disabledStyle = {
        cursor:'arrow',
        transform:'none',
        backgroundColor:disabledColour,
        color:'hsl(0,0,50)'
    }

    return { normalStyle, hoverStyle, activeStyle, disabledStyle }
}