import React from 'react';
import destructureUnit from '../../lib/Unit/destructureUnit'

export default function useComputedStyle(ref,property){
    if(ref.current) ref = ref.current;
    const computedStyle = getComputedStyle(ref)[property];
    return destructureUnit(computedStyle);
}