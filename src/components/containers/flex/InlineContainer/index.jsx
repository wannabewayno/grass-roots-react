import React from 'react';
import inlineStyle from './style.js';


/**
 * Trys to keep elements Inline. 
 * Specify a breakPoint to collapse inline elements to a vertical list
 * 
 * @param {Object}  props 
 * @param {Element} props.children  - Elements this container wraps
 * @param {String}  [props.gap='0px']       - Horizontal gap between elements
 * @param {String}  [props.minWidth='0px']  - Breakpoint Width to convert to vertical list  
 */
const InlineContainer = ({ children, gap='0px', minWidth='0px', style }) => {

    const length = children.length;

    const css = {
        ...inlineStyle,
        gridTemplateColumns: `repeat(auto-fill, minmax( min(max(${minWidth}, calc(${100/length}% - ${gap})),100%), 1fr))`,
        gap: gap,
        ...style,
    }

    return (
        <div style={css}>
            {children}
        </div>
    )
}

export default InlineContainer;