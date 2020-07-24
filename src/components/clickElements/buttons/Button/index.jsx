import React from 'react';
import buttonSize from '../../../../lib/size.js';
import buttonPosition from '../../../../lib/position.js';
import { baseStyle, textStyle ,getSkin } from './styles/style.js';
import getIcon from '../../../../icons';
import onHover from '../../../../events/onHover/index.jsx';
import onActive from '../../../../events/onActive/index.jsx';
import './styles/clearFocus.css';


export default function Button({
    size='tiny',
    position='',
    color='',
    icon,
    text,
    skin='default',
    type='button',
    style={},
    onClick=() => null,
})  {

    const { normalStyle, hoverStyle, activeStyle } = getSkin(skin,color);

    const buttonStyle = { ...baseStyle, ...buttonSize(size), ...buttonPosition(position), ...normalStyle, ...style };

    return (
        <button
            {...onHover(hoverStyle)}
            {...onActive(activeStyle)}
            style={buttonStyle}
            type={type}
            onClick={onClick}
        >
            {text?<span style={textStyle}>{text}</span>:null}
            {icon?<img src={getIcon(icon)}></img>:null}
        </button>
    )
}