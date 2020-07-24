import defaultStyle from './default.js'

export const baseStyle = {
    outline:'none',
    textDecoration:'none',
    width:'fit-content',
    height:'fit-content',
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:'100%',
    backgroundColor: 'transparent',
    objectPosition: 'center',
    borderStyle:'solid'
}

export const textStyle = {
    fontSize:'inherit',
    whiteSpace:'nowrap',
    color:'inherit',
}

export function getSkin(skin,color,backgroundColor){
    if(color === '') color = 'rgb(125,125,125)'
    switch(skin){
        case'default': return defaultStyle(color);
    }
}

