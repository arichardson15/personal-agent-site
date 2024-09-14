import React, {forwardRef, HTMLAttributes, useEffect, useLayoutEffect, useState} from 'react';
import SectionDivider from "./SectionDivider";

interface TextImageSectionProps {
    contentText?: string;
    contentImage1?: string;
    contentImage1Caption?: string;
    headerText?: string;
    textID?: string;
    imageID?: string;
}



let TextImageSection = forwardRef<HTMLDivElement, TextImageSectionProps>((props, ref) => {
    let {
        contentImage1,
        contentText,
        contentImage1Caption,
        headerText,
        textID,
        imageID
    } = props;

    const [textHeight, setTextHeight] = useState(20);
    const [imageWidth, setImageWidth] = useState(20);

    useEffect(() => {
        setTimeout(() => {
            const element = document.getElementById(textID);
            const elementHeight = element.offsetHeight;
            if (element) {
                setTextHeight(elementHeight + 'px');
            }
            const imageElement = document.getElementById(imageID);
            console.log('image width' +imageElement.offsetWidth);
            console.log('text height' + elementHeight);
            if(imageElement.offsetWidth > textHeight){
                setImageWidth(elementHeight + 'px');
            }
        }, 500);
    }, []);


    return (
        <>
            <div className="mx-auto bg-white py-3 grid max-w-7xl gap-x-8 gap-y-10 px-6 lg:px-8 grid-cols-2">
                <div id={textID} className="max-w-2xl">
                    <h2 className="text-3xl pl-10 font-grotesk font-bold tracking-tight text-gray-900 sm:text-4xl">{headerText}</h2>
                    <p className="mt-6 text-lg pl-10 leading-8 text-gray-600 font-grotesk">
                        {contentText}
                    </p>
                </div>
                <div  style={{ display: 'flex',alignItems: 'center', justifyContent: 'center', padding: '10px' }}>
                <img
                    id={imageID}
                    style={{borderRadius: '100px', width: imageWidth, minHeight: "350px", verticalAlign: "middle", height: textHeight}}
                    className={'h-full align-middle'}
                    src={contentImage1}
                />
                <span
                    style={{
                        bottom: '10px',
                        left: '10px',
                        color: 'black',  // Adjust the color as needed
                        padding: '5px',
                        fontFamily: 'grotesk',
                        fontSize: '28px',
                        borderRadius: '5px',
                        fontWeight: 'bold',
                    }}
                >
    {contentImage1Caption}
  </span>
            </div>
            </div>
    <SectionDivider></SectionDivider>
    </>
    );
});
export default TextImageSection;

