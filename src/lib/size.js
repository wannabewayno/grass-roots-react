
function initializeStepRadius(baseRadius, stepValue, bracket){

    return function (fontSize){
        const value = Number(fontSize.replace('px','')); 
        const steps = Math.floor(value/bracket)
        const radius = baseRadius + steps*stepValue 
        return radius+'px';
    }
}


/**
 * @param {String} - natural language for the size of a button
 *                  ? accepts => tiny|xx-small|x-small|small|medium|large|x-large|xx-large|huge 
 */
export default function size(size){

    const stepRadius = initializeStepRadius(1.5,1,6);
    const sizeStyle = fontSize => ({ fontSize, borderRadius:stepRadius(fontSize) })
    
    switch(size){
        case 'tiny':     return sizeStyle('5px');
        case 'xx-small': return sizeStyle('8px');
        case 'x-small':  return sizeStyle('12px');
        case 'small':    return sizeStyle('16px');
        case 'medium':   return sizeStyle('20px');
        case 'large':    return sizeStyle('24px');
        case 'x-large':  return sizeStyle('30px');
        case 'xx-large': return sizeStyle('45px');
        case 'huge':     return sizeStyle('64px');
        default: 
            console.warn(
                'buttonSize not recognised! setting to default of small',
                'Please choose a buttonSize from tiny|xx-small|x-small|small|medium|large|x-large|xx-large|huge',
                'Or define a custom style by passing it down as a style prop -> style={{<CSSStyle>:<value>}}'
            );

            return { fontSize:'16px', padding:'0.75em', borderWidth:'1.5px', borderRadius:'5px' };
    }
}