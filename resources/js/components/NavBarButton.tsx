import React, {forwardRef, HTMLAttributes} from 'react';

interface NavBarButtonProps {
    url?: string;
    text?: string;
}

let NavBarButton = forwardRef<HTMLDivElement, NavBarButtonProps>((props, ref) => {
    let {
        url,
        text,
    } = props;


    return (
<p>
    <a href={props.url} className="block px-4 py-2 font-grotesk text-black rounded
    bg-primary-700 lg:bg-transparent lg:text-primary-700 dark:text-black " aria-current="page">{props.text}</a>
</p>
    );
    });
    export default NavBarButton;
