import React, { forwardRef } from 'react';

interface ButtonProps {
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    layoutClass?: string;
    children?: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const {
        type = 'button',
        className = 'bg-brown-300 text-white hover:bg-brown-400 active:bg-brown-500 rounded-full px-4 py-2',
        layoutClass = 'flex gap-1 items-center',
        children,
        onClick = () => {},
    } = props;

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (onClick) {
            onClick(e);
        }
    };

    return (
        <div>

            <button type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">Default
            </button>

        </div>
    );
});

export default Button;
