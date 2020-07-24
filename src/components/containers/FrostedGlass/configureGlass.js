const shadowMap = {
    'xx-small'  :'0 0 0.5rem 0 rgba(0,0,0,0.4)',
    'x-small'   :'0 0 1rem 0 rgba(0,0,0,0.4)'  ,
    'small'     :'0 0 1.5rem 0 rgba(0,0,0,0.4)',
    'medium'    :'0 0 2rem 0 rgba(0,0,0,0.4)',
    'large'     :'0 0 2.5rem 0 rgba(0,0,0,0.4)',
    'x-large'   :'0 0 3rem 0 rgba(0,0,0,0.4)',
    'xx-large'  :'0 0 4rem 0 rgba(0,0,0,0.4)',
    'xxx-large' :'0 0 6rem 0 rgba(0,0,0,0.4)',
}

const blurMap = {
    'xx-small'  :'blur(1.5px)',
    'x-small'   :'blur(3px)'  ,
    'small'     :'blur(5px)'  ,
    'medium'    :'blur(7px)'  ,
    'large'     :'blur(10px)' ,
    'x-large'   :'blur(15px)' ,
    'xx-large'  :'blur(20px)' ,
    'xxx-large' :'blur(30px)' ,
}

function getProperty(property, propertyMap, numberCallBack) {

    switch(typeof(property)){
        case'string': // entered a formal syntax
            return propertyMap[property]
        case'number': // user has specified custom blur
            return numberCallBack(property)
        default: // nothing was specified return a default blur of x-small
            return propertyMap['x-small']
    }
}

export default function configureGlass(shadow, backgroundColor, blur, style) {

    if (!backgroundColor) backgroundColor = 'rgba(255,255,255,0.5)'
    const backdropFilter = getProperty(blur,blurMap, blur => `blur(${blur}px)`);
    const boxShadow = getProperty(shadow,shadowMap,shadow => shadow);

    return { 
        backgroundColor,
        backdropFilter,
        boxShadow,
        borderRadius:'10px',
        overflow:'hidden',
        ...style
    };
}