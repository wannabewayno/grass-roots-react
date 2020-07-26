import destructureColour from '../../../../../lib/destructureColour.js';
import HSL2RGB from '../../../../../lib/HSL2RGB.js';

export default function flatStyle(colourString) {
    
    const colour = destructureColour(colourString);

    const baseColour = colour.clone();
    const disabledColour = colour.clone();
    const hoverColour = colour.clone();

    disabledColour.desaturate(25);
    hoverColour.darken(5);

    const normalStyle = {
        border:'none',
        margin: '0.5rem',
        padding: '0.5em 0.75em',
        color: baseColour.getContrast(),
        backgroundColor: baseColour.CSS(),
    }

    const hoverStyle = {
        cursor:'pointer',
        backgroundColor: hoverColour.CSS(),
    }

    const activeStyle = {
        outline: 'none',
        transform: 'scale(0.95)'
    }

    const disabledStyle = {
        cursor:'default',
        transform:'none',
        backgroundColor:disabledColour.CSS(),
        color:'hsla(0,0%,50%,0.5)'
    }

    return { normalStyle, hoverStyle, activeStyle, disabledStyle }
}