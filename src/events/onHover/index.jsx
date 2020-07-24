import { useState, useEffect } from 'react';

/**
 * Hovering over an element will change the css of the element to the defined hoverStyle
 * reverts this style when not hovering on the element
 * To use this function on an element, spread over the called function with a defined style change
 * ? Example: <button {...onHover(hoverStyle)}>click me</button> 
 * @param  {Object<string>}  [hoverStyle={}] - the reference of an element to execute callback with if necessary
 * @return {Object<function>} - onMouseEnter and onMouseLeave set to change hover states. 
 */
export default function onHover (hoverStyle) {

    const[ hover, setHover ] = useState({
        isHover:false,
        ref:null,
        initialStyle:null,
    })

    function toggleState() {
        // if state is true
        const { ref, initialStyle, isHover } = hover
        if(isHover){
            // apply the hoverState
            // loop over styles in hoverStyle and apply them to the ref
            for (const style in hoverStyle){
                ref.style[style] = hoverStyle[style];
            }
        } else if (initialStyle){
            // revert to initalStyle
            // loop over styles in initialStyle and apply them to the ref
            for (const style in hoverStyle){
                ref.style[style] = initialStyle[style];
            }
        }
    }

    useEffect(() => {
        toggleState()
    },[hover])

    function onMouseEnter(event) {
        const ref = event.currentTarget;

        // copy the styles that hoverStyle will replace
        const initialStyle = {};
        for (const style in hoverStyle){
            initialStyle[style] = ref.style[style];
        }

        // set hover state to true
        // store the element as a ref
        // store the initialStyle so we can referback to it on mouse leave
        setHover({
            ...hover,
            isHover:true,
            ref,
            initialStyle
        })
    }

    function onMouseLeave() {
        // set the state back to false
        setHover({
            ...hover,
            isHover:false,
        })
    }

    return {
        onMouseEnter,
        onMouseLeave,
    }
}