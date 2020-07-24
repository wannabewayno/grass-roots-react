import React from 'react';
// import './style.css';
import SendButton from '../../clickElements/buttons/SendButton/index.jsx';
import CloseButton from  '../../clickElements/buttons/CloseButton/index.jsx';
import EnvelopeLid from './EnvelopeLid/index.jsx';
import EnvelopeBody from './EnvelopeBody/index.jsx';

export default function EnvelopeForm (props) {

 // here we define custom app logic. 

    return (
        <div id="envelope" className="hoverable-5" status="closed">
            {/* <EnvelopeLid/> */}
            <form id="email-form" className="z2" onSubmit={'submitgoeshere'}>
                <div id="fold-top">
                    <CloseButton position='top-right' size='medium'/>
                    <SendButton position='top-left' size='medium'/>
                    <input type="text" id="name" placeholder="name" name="name"/>
                    <input type="text" id="email" placeholder="email" name="email"/>
                </div>
                <div id="fold-bottom" className="fold-up">
                    <textarea name="message" id="message" placeholder="message..." className="not-visible"></textarea>
                </div>
            </form>
            {/* <EnvelopeBody/> */}
            
        </div>
    )
}