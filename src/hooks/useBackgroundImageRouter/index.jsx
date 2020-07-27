import { useState, useEffect } from 'react';  

// css for the html body
const pageStyle = {
    backgroundSize:'cover',
    backgroundAttachment:'fixed'
}

/**
 * Pass in a map of router location to desired background image and let this do the rest
 * @param {Object} backgroundImageMap - An object whose key:value pairs => location:image 
 */
export default backgroundImageMap => {

    const [ location ] = useState(window.location.pathname);
    const [ imageMap ] = useState(backgroundImageMap);
    const [ bodyStyle ] = useState(pageStyle);

    // Changes the body css everytime the router switches pages
    useEffect(() => {
        if(typeof(imageMap[location]) === 'object') {

            //image
            document.body.style.backgroundImage = `url(${imageMap[location].image})`

            // position options
            if(imageMap[location].position)  document.body.style.backgroundPosition = imageMap[location].position;  
            if(imageMap[location].positionX) document.body.style.backgroundPositionX = imageMap[location].positionX;
            if(imageMap[location].positionY) document.body.style.backgroundPositionY = imageMap[location].positionY;

        } else {
            // else just serve and image and center it as default
            document.body.style.backgroundPosition = 'center'
            document.body.style.backgroundImage = `url(${imageMap[location]})`
        }
        
    },[location])

    useEffect(() => {
        Object.keys(pageStyle).forEach(style => {
            document.body.style[style] = bodyStyle[style];
        })
    },[])
}