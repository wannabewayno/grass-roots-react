import { useState, useEffect } from 'react';  

// css for the html body
const pageStyle = {
    backgroundSize:'cover',
    backgroundPosition:'center',
    backgroundAttachment:'fixed'
}

/**
 * Pass in a map of router location to desired background image and let this do the rest
 * @param {Object} backgroundImageMap - An object whose key:value pairs => location:image 
 */
export default function useBackgroundImageRouter(backgroundImageMap) {

    const [ location ] = useState(window.location.pathname);
    const [ imageMap ] = useState(backgroundImageMap);
    const [ bodyStyle ] = useState(pageStyle);

    // Changes the body css everytime the router switches pages
    useEffect(() => {
         document.body.style.backgroundImage = `url(${imageMap[location]})`
    },[location])

    useEffect(() => {
        Object.keys(pageStyle).forEach(style => {
            document.body.style[style] = bodyStyle[style];
        })
    },[])
}









