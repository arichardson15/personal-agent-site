import React, { forwardRef, useEffect, useState } from 'react';

interface TestimonialsSectionProps {
    contentText?: string;
    contentImage1?: string;
    contentImage1Caption?: string;
    headerText?: string;
    textID?: string;
}

let TestimonialsSection = forwardRef<HTMLDivElement, TestimonialsSectionProps>((props, ref) => {
    let {
        contentImage1,
        contentText,
        headerText,
        textID,
    } = props;

    const [textHeight, setTextHeight] = useState(20);

    useEffect(() => {
        setTimeout(() => {
            const element = document.getElementById(textID);
            if (element) {
                const elementHeight = element.offsetHeight;
                setTextHeight((elementHeight/1.8) + 'px');
            }
        }, 100);
    }, []);


    return (
        <div className="py-3 bg-white">
            <div
                className="mx-auto max-w-7xl bg-white lg:px-8"
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'auto 1fr',
                    alignItems: 'left',
                }}
            >
                <img
                    style={{
                        borderRadius: '100px',
                        maxWidth: '100%',
                        height: textHeight,
                        gridArea: 'image',
                        placeSelf: 'center',
                        paddingBottom: '20px',
                        paddingTop: '20px',
                    }}
                    src={contentImage1}
                    alt="Content"
                />
                <div id={textID} style={{gridArea: 'text',background: 'rgba(255, 255, 255, 0.9)'}} className={''}>
                    <h2 className="text-3xl font-grotesk font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {headerText}
                    </h2>
                    <p
                        className="mt-6 text-xl py-3 leading-8 text-gray-600 font-grotesk"
                        dangerouslySetInnerHTML={{__html: contentText?.replace(/\n/g, '<br />')}}
                    />
                </div>
            </div>
        </div>


    );
});

export default TestimonialsSection;
