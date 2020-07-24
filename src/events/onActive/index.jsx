import { useState, useEffect } from 'react';

/**
 * When an element is active: change the css of the element to the defined 'activeStyle'
 * reverts this style when element is not Active
 * To use this function on an element, spread over the called function with a defined style change
 * ? Example: <button {...onActive(activeStyle)}>click me</button> 
 * @param  {Object<string>}  [activeStyle={}] - the reference of an element to execute callback with if necessary
 * @return {Object<function>} - onMouseDown and onMouseUp set to change Active states. 
 */
export default function onActive (activeStyle) {

    const[ active, setActive ] = useState({
        isActive:false,
        ref:null,
        initialStyle:null,
    })

    function toggleState() {
        // if state is true
        const { ref, initialStyle, isActive } = active
        if(isActive){
            // apply the ActiveState
            // loop over styles in ActiveStyle and apply them to the ref
            for (const style in activeStyle){
                ref.style[style] = activeStyle[style];
            }
        } else if (initialStyle){
            // revert to initalStyle
            // loop over styles in initialStyle and apply them to the ref
            for (const style in activeStyle){
                ref.style[style] = initialStyle[style];
            }
        }
    }

    useEffect(() => {
        toggleState()
    },[active])

    function onMouseDown(event) {
        const ref = event.currentTarget;

        // copy the styles that ActiveStyle will replace
        const initialStyle = {};
        for (const style in activeStyle){
            initialStyle[style] = ref.style[style];
        }

        // set active state to true
        // store the element as a ref
        // store the initialStyle so we can referback to it on mouse leave
        setActive({
            ...active,
            isActive:true,
            ref,
            initialStyle
        })
    }

    function onMouseUp() {
        // set the state back to false
        setActive({
            ...active,
            isActive:false,
        })
    }

    return {
        onMouseDown,
        onMouseUp,
    }
}