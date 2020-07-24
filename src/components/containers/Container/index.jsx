import React from 'react';
import './style.css';

export default function Container({ children, style }) {

    style = { margin:'0 auto', textAlign:'center', ...style }

    return (
        <section className='Container' style={style}>
            {children}
        </section>
    )
}

 Container;