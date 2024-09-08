import React, { forwardRef, useEffect, useState } from 'react';
import SectionDivider from "./SectionDivider";

interface ImageTextSectionProps {
    contentText?: string;
    contentImage1?: string;
    contentImage1Caption?: string;
    headerText?: string;
    textID?: string;
}

let ImageTextSection = forwardRef<HTMLDivElement, ImageTextSectionProps>((props, ref) => {
    let {
        contentImage1,
        contentText,
        contentImage1Caption,
        headerText,
        textID,
    } = props;

    const [textHeight, setTextHeight] = useState(20);

    useEffect(() => {
        setTimeout(() => {
            const element = document.getElementById(textID);
            if (element) {
                const elementHeight = element.offsetHeight;
                console.log(elementHeight);
                setTextHeight(elementHeight + 'px');
            }
        }, 100);
    }, [textID]);

    return (
        <>
            <div className="">
                <div className="mx-auto bg-white py-3 grid max-w-7xl gap-x-8 gap-y-10 px-6 lg:px-8 grid-cols-2">
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px'}}>
                        <img
                            style={{borderRadius: '100px', height: textHeight}}
                            className="h-full"
                            src={contentImage1}
                            alt="Content"
                        />
                        <span
                            style={{
                                marginTop: '10px',
                                color: 'black',
                                padding: '5px',
                                fontFamily: 'grotesk',
                                fontSize: '20px',
                                borderRadius: '5px',
                                fontWeight: 'bold',
                                textAlign: 'center'
                            }}
                        >
                        {contentImage1Caption}
                    </span>
                    </div>
                    <div id={textID} className="max-w-2xl col-span-1 flex items-center">
                        <div id={textID} className="max-w-2xl">
                            <h2 className="text-3xl pl-10 font-grotesk font-bold tracking-tight text-gray-900 sm:text-4xl">{headerText}</h2>
                            <p className="mt-6 text-lg pl-10 leading-8 text-gray-600 font-grotesk">
                                {contentText}
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <SectionDivider></SectionDivider>
        </>
    );
});

export default ImageTextSection;
