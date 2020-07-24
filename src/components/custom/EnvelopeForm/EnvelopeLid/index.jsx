import React from 'react';
import './style.css';

export default function EnvelopeLid(){
    return ( 
        <div id="envelope-lid" className="z4">
            <div id="lid-square"></div>
            <div id="lid-triangle">
                <div id="lid-triangle-border"></div>
                <div id="lid-triangle-body"></div>
            </div>
        </div>
    )
}