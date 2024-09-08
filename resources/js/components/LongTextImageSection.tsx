import React, { forwardRef, useEffect, useState } from 'react';

interface LongTextImageSectionProps {
    contentText?: string;
    contentImage1?: string;
    contentImage1Caption?: string;
    headerText?: string;
    textID?: string;
}

let LongTextImageSection = forwardRef<HTMLDivElement, LongTextImageSectionProps>((props, ref) => {
    let {
        contentImage1,
        contentText,
        contentImage1Caption,
        headerText,
        textID,
    } = props;


    return (
        <div className="py-3 bg-white">
            <div className="mx-auto max-w-7xl bg-white px-6 lg:px-8">
                <div id={textID} className="flex items-start">
                    <div>
                        <img
                            style={{
                                borderRadius: '100px',
                                float: 'right',   // Float the image to the left
                                margin: '20px',
                                maxWidth: '50%',  // Control the image size
                                height: '400px',
                            }}
                            src={contentImage1}
                            alt="Content"
                        />
                        <h2 className="text-3xl font-grotesk font-bold tracking-tight text-gray-900 sm:text-4xl">
                            {headerText}
                        </h2>
                        <p
                            className="mt-6 text-lg leading-8 text-gray-600 font-grotesk"
                            dangerouslySetInnerHTML={{__html: contentText?.replace(/\n/g, '<br />')}}
                        />
                        <span
                            style={{
                                display: 'block',
                                marginTop: '10px',
                                color: 'black',
                                padding: '5px',
                                fontFamily: 'grotesk',
                                fontSize: '20px',
                                borderRadius: '5px',
                                fontWeight: 'bold',
                            }}
                        >
                    {contentImage1Caption}
                </span>
                    </div>
                </div>
            </div>
        </div>

    );
});

export default LongTextImageSection;
