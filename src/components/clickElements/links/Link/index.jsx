import React from 'react';
import linkSize from '../../../../lib/size.js';
import linkPosition from '../../../../lib/position.js';
import { baseStyle, textStyle, getSkin } from './styles/style.js'
import getIcon from '../../../../icons';
import onHover from '../../../../events/onHover/index.jsx';
import onActive from '../../../../events/onActive/index.jsx';
import './styles/clearFocus.css';

export default function Link({
    size='tiny',
    position='',
    color='',
    icon='',
    text,
    skin='default',
    style={},
    href='#',
}){

    const { normalStyle, hoverStyle, activeStyle } = getSkin(skin,color);

    const linkStyle = { ...baseStyle, ...linkSize(size), ...linkPosition(position), ...normalStyle, ...style };
    return (
        <a
            href={href}
            style={linkStyle}
            {...onHover(hoverStyle)}
            {...onActive(activeStyle)}
        >
            {text?<span style={textStyle}>{text}</span>:null}
            {icon?<img src={getIcon(icon)}></img>:null}
        </a>
    )
}

