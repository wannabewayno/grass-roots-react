import React, { useState, useEffect, cloneElement, useRef } from 'react';
import Button from '../../clickElements/buttons/Button/index.jsx'
import useComputedStyle from '../../../hooks/useComputedStyle/index.jsx'
import destructureUnit from '../../../lib/destructureUnit'

export default function ShowOnClick({ children, showOnMount, provideButton=true, liftUpState, transitionTime }) {

    if (!children) throw new Error("ShowOnClick doesn't have any content")
    if (!Array.isArray(children)) children = [ children ];
    if (children.length > 2) throw new Error('TOO MANY CHILDREN: ShowOnClick should only contain an element to show and a button')

    let [ showThisOnClick, userButton ] = children

    //destructure transisitionTime
    transitionTime = destructureUnit(transitionTime);

    // Set up refs
    const dropdown = useRef();
    const elementToShow = useRef();


    // clone the element and pass a ref into it
    showThisOnClick = cloneElement(
        // Element to clone
        showThisOnClick,
        //Props to add
        {
            ...showThisOnClick.props, 
            ref:elementToShow
        },
        //any children
    )

    const [ isShown, setIsShown ] = useState(showOnMount)


    //if using liftUpState hook in parent, activate on mount
    useEffect(() => {
        if(liftUpState) liftUpState('showOnClickState',isShown,setIsShown)
    } ,[])


    // if the user didn't provide a button, set up a dummy button
    if(!userButton && provideButton ) {

        userButton = <Button size='small' skin='flat' onClick={handleClick} text='Show more'/>

    } else if(!liftUpState){

        // we need to configure the user's button with our custom trigger
        const { props } = userButton
        userButton = cloneElement(userButton, {...props, onClick:handleClick })
    }

    
    useEffect(() => {
        if(isShown){
            const height = useComputedStyle(elementToShow,'height');
            dropdown.current.style.height = height.css()
        }
    })
    
    function handleClick(){

        if(isShown) { 
            dropdown.current.style.height = '0'
            setTimeout(() => {
                setIsShown(false)
            }, transitionTime.value())
        } else {
            setIsShown(true);
        }
    }

    function showElement(){
        if(isShown){
            return showThisOnClick
        } else {
            return null
        }
    }

    return (
        <div>
            <div ref={dropdown} style={{ transition:`all ${transitionTime.css()} ease-in-out 0s`, position:'relative', height:'0', overflow:'hidden',}}>
                {showElement()}
            </div>  
            <div>
                {userButton? userButton : null}
            </div>
        </div>

    )
}

