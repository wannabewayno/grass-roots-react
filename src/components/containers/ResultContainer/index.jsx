import React, { cloneElement, useState, useEffect } from 'react';
import './style.css';

/**
 * A contianer that renders a list of data
 * @param {Object} props - Passed down through props
 * @param {Object} props.results       - an array of values/objects from an API call or generation function
 * @param {Object} props.children      - The template component to render the data with matching data keys
 * @param {Object} [props.liftUpState] - a function that lift's up the containers data state and setData attributes.
 */
const ResultContainer = ({ children, liftUpState, style={} }) => {
    
    const errorInfo = 'The ResultContainer should wrap a template component used to render the data it receives'

    if (!Array.isArray(children)) children = [children]

    if (!children ) {
        console.error('No template component detected!:', errorInfo)
    }

    if (Array.isArray(children)){
        if(children.length > 2){
            console.error('Too many child elements in the ResultContainer:', errorInfo)
        }
    }

    // user passes down a template to place data, and placeholder for no data
    const [UItemplate, noResultPlaceholder] = children
    
    const [resultContainerData, setResultContainerData] = useState([]);


    // we're using the liftUpState function make the container state function available to it's parent's
    useEffect(() => {
        // if a liftUpState function was passed as a prop, call it
        if(liftUpState){
            liftUpState('resultContainerData',resultContainerData,setResultContainerData)
        }
        //other wise do nothing, it won't break anything
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);

    function displayResults(){
        // if there's data, display it
        if(resultContainerData.length !== 0){
            return (
                <ul>
                    {resultContainerData.map((dataItem,index) => cloneElement(UItemplate,{ data: dataItem, key: index }))}
                </ul>
            )
        // no data, display the placholder if it was defined
        } else if(noResultPlaceholder){
            return noResultPlaceholder
        } else {
        // else just display nothing
            return null
        }
    }

    return (
        <section className='ResultContainer' style={style}>
            {displayResults()}
        </section>
    )
}

export default ResultContainer;