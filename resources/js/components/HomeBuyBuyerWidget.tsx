import React, {forwardRef, HTMLAttributes, useEffect, useState} from 'react';

interface HomeBuyBuyerWidgetProps {
    contentText?: string;
    contentImage1?: string;
    contentImage1Caption?: string;
    headerText?: string;
}

let HomeBuyBuyerWidget = forwardRef<HTMLDivElement, HomeBuyBuyerWidgetProps>((props, ref) => {
    let {
        contentText,
        headerText,
    } = props;

    useEffect(() => {
        // Create and insert the script tag into the document
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.innerHTML = `
            (function (h,b) {
                var w = window, d = document, s = 'script', x, y;
                w['__hb_namespace'] = h;
                w[h] = w[h] || function () { (w[h].q=w[h].q||[]).push(arguments) };
                y = d.createElement(s);
                x = d.getElementsByTagName(s)[0];
                y.async = 1;
                y.src = b;
                x.parentNode.insertBefore(y,x);
            })('Homebot','https://embed.homebotapp.com/lgw/v1/widget.js');
            Homebot('#homebot_homeowner', '3662f1a887ad4d3448f745aa645bd9763680539608b4ed80', {'mode': 'buyers-mode'});
        `;

        document.body.appendChild(script);

        // Cleanup function to remove the script
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
            <div className="mx-auto text-center">
                <h2 className="text-3xl font-grotesk font-bold tracking-tight text-gray-900 sm:text-4xl">{headerText}</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600 font-grotesk">
                    {contentText}
                </p>
                <div className="">
                    <div id="homebot_homeowner"></div>
                </div>
            </div>
    );
});
export default HomeBuyBuyerWidget;

