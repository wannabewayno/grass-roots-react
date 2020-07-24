import React from 'react';
import destructureUnit from '../../lib/destructureUnit'

export default function useComputedStyle(ref,property){
    const computedStyle = getComputedStyle(ref.current)[property];
    return destructureUnit(computedStyle);
}