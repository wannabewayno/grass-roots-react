import destructureColour from '../../../../../lib/Colour/destructureColour.js';

export default function nudeStyle(colourString) {

    const colour = destructureColour(colourString);
    const baseColour = colour.CSS()

    const normalStyle = {
        color:baseColour,
        margin: '0.75rem 0.25rem',
        padding: '0.25rem 10px',
    }

    const hoverStyle = {
        borderWidth:'0.1em',
        borderColor:baseColour,
        margin:'0.75rem calc(0.25rem - 2px)',
    }

    const activeStyle = {
        outline:'none',
        backgroundColor:baseColour,
        color:'#000'
    }

    return { normalStyle, hoverStyle, activeStyle }
}
