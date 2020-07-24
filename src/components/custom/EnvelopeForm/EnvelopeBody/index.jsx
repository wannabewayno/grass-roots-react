import React from 'react';
import './style.css';

export default function EnvelopeBody(){
    return (
        <div id="envelope-body">
            <div id="letter-back" className="z1"></div>
            <div id="triangle-left" className="z3"> 
                <div id="triangle-left-border"></div>
                <div id="triangle-left-body"></div>
            </div>
            <div id="triangle-right" className="z3">
                <div id="triangle-right-border"></div>
                <div id="triangle-right-body"></div>
            </div>
            <div id="trapezoid" className="z3">
                <div id="trapezoid-border"></div>
                <div id="trapezoid-body"></div>
            </div>
        </div>
    )
}