import React, {forwardRef, useEffect, useState} from 'react';

interface ImageImageSectionProps {
    contentImage1?: string;
    contentImage1Caption?: string;
    contentImage2?: string;
    contentImage2Caption?: string;
    headerText?: string;
    textID?: string;
}

let ImageImageSection = forwardRef<HTMLDivElement, ImageImageSectionProps>((props, ref) => {
    let {
        contentImage1,
        contentImage2,
        contentImage1Caption,
        contentImage2Caption,
    } = props;

    return (
        <div className="lg:py-16">
            <div
                className="mx-auto bg-white h-full flex flex-col md:flex-row items-center justify-center gap-x-8 gap-y-10 px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center">
                    <img
                        className="w-full max-w-xs" // Limits the width of the image
                        style={{borderRadius: '100px'}}
                        src={contentImage1}
                    />
                    <span
                        style={{
                            marginTop: '10px',
                            color: 'black',
                            padding: '5px',
                            fontFamily: 'grotesk',
                            fontSize: '25px',
                            borderRadius: '5px',
                            fontWeight: 'bold',
                            textAlign: 'center'
                        }}
                    >
                {contentImage1Caption}
            </span>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img
                        className="w-full max-w-xs" // Limits the width of the image
                        style={{borderRadius: '100px'}}
                        src={contentImage2}
                    />
                    <span
                        style={{
                            marginTop: '10px',
                            color: 'black',
                            padding: '5px',
                            fontFamily: 'grotesk',
                            fontSize: '25px',
                            borderRadius: '5px',
                            fontWeight: 'bold',
                            textAlign: 'center'
                        }}
                    >
                {contentImage2Caption}
            </span>
                </div>
            </div>
        </div>


    );
});

export default ImageImageSection;
