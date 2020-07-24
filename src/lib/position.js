export default function position(position){
    const absolute = {
        margin:'0.75rem 0.75rem', 
        position: 'absolute',
        transform:'translate(-50%,50%)',
        msTransform:'translate(-50%,50%)'
    };
    switch(position){
        case 'top-right':    return { right:'0%',    top:'0%',  ...absolute }
        case 'top-left':     return {  left:'0%',    top:'0%',  ...absolute }
        case 'bottom-right': return { right:'0%', bottom:'0%',  ...absolute }
        case 'bottom-left':  return {  left:'0%', bottom:'0%',  ...absolute }
        case 'center':       return {  left:'50%',   top:'50%', ...absolute }
        case 'center-top':   return {  left:'50%',   top:'0%',  ...absolute }
        case 'center-bottom':return {  left:'50%',bottom:'0%',  ...absolute }
        case 'center-left':  return {  left:'0%',    top:'50%', ...absolute }
        case 'center-right': return {  right:'50%',   top:'50%',...absolute }
        case '':             return { position: 'relative'}
        default:
            console.error('Button position was not recognised! Setting button default ');
            return { position: 'relative'}
    }
}
