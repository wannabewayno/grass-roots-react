import React from 'react';
import './style.css';
import Link from '../../clickElements/links/Link/index.jsx';

function LinkContainer({ links }){
    
    return (
    <nav className='LinkContainer'>
        {links.map(({ href, display, style }) => (
            <Link 
                href    = {href}
                display = {display}
                style   = {style?style:'nude'}
                key     = {display}
            />)
        )}
    </nav>
    )
}

export default LinkContainer