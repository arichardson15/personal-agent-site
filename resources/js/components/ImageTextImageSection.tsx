import React, {forwardRef, useEffect, useState} from 'react';

interface ImageTextImageSectionProps {
    contentText?: string;
    contentImage1?: string;
    contentImage1Caption?: string;
    contentImage2?: string;
    contentImage2Caption?: string;
    headerText?: string;
    textID?: string;
}

let ImageTextImageSection = forwardRef<HTMLDivElement, ImageTextImageSectionProps>((props, ref) => {
    let {
        contentImage1,
        contentText,
        contentImage2,
        contentImage1Caption,
        contentImage2Caption,
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
        <div  className="py-16">
            <div className="mx-auto bg-white h-full grid max-w-7xl gap-x-8 gap-y-10 px-6 lg:px-8 xl:grid-cols-4">
                <div className="flex flex-col items-center justify-center">
                    <img
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
                <div className="max-w-2xl col-span-2 flex items-center">
                    <div>
                        <h2 className="text-3xl font-grotesk font-bold tracking-tight text-gray-900 sm:text-4xl">{headerText}</h2>
                        <p id={textID} className="mt-6 text-md text-lg leading-8 text-gray-600 font-grotesk whitespace-pre-line">
                            {contentText}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img
                        style={{borderRadius: '100px', maxHeight: textHeight}}
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

export default ImageTextImageSection;
