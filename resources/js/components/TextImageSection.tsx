import React, {forwardRef, HTMLAttributes, useEffect, useLayoutEffect, useState} from 'react';

interface TextImageSectionProps {
    contentText?: string;
    contentImage1?: string;
    contentImage1Caption?: string;
    headerText?: string;
    textID?: string;
}

let TextImageSection = forwardRef<HTMLDivElement, TextImageSectionProps>((props, ref) => {
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
    }, []);


    return (
        <div className="bg-white py-3">
            <div className="mx-auto bg-white py-3 grid max-w-7xl gap-x-8 gap-y-10 px-6 lg:px-8 grid-cols-2">
                <div id={textID} className="max-w-2xl">
                    <h2 className="text-3xl pl-10 font-grotesk font-bold tracking-tight text-gray-900 sm:text-4xl">{headerText}</h2>
                    <p className="mt-6 text-lg pl-10 leading-8 text-gray-600 font-grotesk">
                        {contentText}
                    </p>
                </div>
                <div style={{height: 'auto', display: "flex", justifySelf: 'center'}}>
                <img
                    style={{borderRadius: '100px', minHeight: "350px", verticalAlign: "middle", height: textHeight}}
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
        </div>
        // <div className="grid grid-cols-2 gap-x-3.5 max-h-64">
        //     <div id={'text'} className={'border h-max'}>;alskdjfl;askdjl;aksdjflk;asdjflkajsdlkfasdlkfjlkasdjflasdlkfjlaksdjflkasdjfla;skdjfl;kasd
        //     </div>
        //     <div className={'border'}>
        //         <img style={{height: textHeight}} src={contentImage1} alt=""/>
        //
        //     </div>
        // </div>
    );
});
export default TextImageSection;

