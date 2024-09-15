import React, { forwardRef, useEffect, useState } from 'react';

interface TestimonialsSectionProps {
    contentText?: string;
    contentImage1?: string;
    contentImage1Caption?: string;
    headerText?: string;
    textID?: string;
    testimonial?: object;
}

let TestimonialsSection = forwardRef<HTMLDivElement, TestimonialsSectionProps>((props, ref) => {
    let {
        contentImage1,
        contentText,
        headerText,
        textID,
        testimonial
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
        <div className="py-8 bg-white">
            <div className="mx-auto max-w-7xl bg-white lg:px-8">
                <div id={textID} className="relative bg-white p-10 rounded-lg border-2">
                    <div
                        className="relative p-4 rounded-lg shadow-[0px_4px_15px_rgba(0,0,0,0.15),_0px_-4px_15px_rgba(0,0,0,0.15)]
                        before:content-[''] before:absolute before:-left-4 before:top-1/2
                before:border-t-8 before:border-r-8 before:border-t-white before:border-r-transparent before:transform
                before:-translate-y-1/2"
                    >
                        <h2 className="text-xl italic font-grotesk tracking-tight text-gray-900">
                                <span className="text-6xl pr-4 font-bold text-gray-300 absolute -left-8 top-0 leading-none">
        &ldquo;
    </span>
                            {testimonial.testimonial}
                            <span className="text-6xl font-bold text-gray-300 absolute -right-8 bottom-0 leading-none">
        &rdquo;
    </span>
                        </h2>
                    </div>

                    <p className="mt-6 pl-10 text-xl bg-tertiary text-white py-3 font-bold leading-8 text-gray-600 font-grotesk"
                       style={{
                           borderRadius: '100px',
                           boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.15), 0px -4px 15px rgba(0, 0, 0, 0.15)'
                       }}>
                        -{testimonial.name}
                    </p>
                </div>
            </div>
        </div>


    );
});

export default TestimonialsSection;
