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
<li>
    <a href={props.url} className="block flex-1 py-2 font-grotesk pr-4 pl-3 text-black rounded
    bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-black " aria-current="page">{props.text}</a>
</li>
    );
    });
    export default NavBarButton;
