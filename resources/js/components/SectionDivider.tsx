import React, { forwardRef } from 'react';

interface SectionDividerProps {
    color?: string

}

const SectionDivider = forwardRef<HTMLButtonElement, SectionDividerProps>((props, ref) => {
    const {
        color,
    } = props;


    return (
        <div className="flex justify-center">
            <div style={{backgroundColor: '#cec7b9'}} className="w-7/12 h-1"></div>
        </div>
    );
});

export default SectionDivider;
