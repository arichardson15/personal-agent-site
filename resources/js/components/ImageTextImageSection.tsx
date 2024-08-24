import React, {forwardRef, HTMLAttributes} from 'react';

interface ImageTextImageSectionProps {
    contentText?: string;
    contentImage1?: string;
    contentImage1Caption?: string;
    contentImage2?: string;
    contentImage2Caption?: string;
    headerText?: string;
}

let ImageTextImageSection = forwardRef<HTMLDivElement, ImageTextImageSectionProps>((props, ref) => {
    let {
        contentImage1,
        contentText,
        contentImage2,
        contentImage1Caption,
        contentImage2Caption,
        headerText,
    } = props;


    return (
        <div className="bg-white py-16 ">
            <div className="mx-auto h-full grid max-w-7xl gap-x-8 gap-y-10 px-6 lg:px-8 xl:grid-cols-4">
                <div>
                    <img
                        style={{borderRadius: '100px'}}
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
                <div className="max-w-2xl col-span-2">
                    <h2 className="text-3xl font-grotesk font-bold tracking-tight text-gray-900 sm:text-4xl">{headerText}</h2>
                    <p className="mt-6 text-md align-middle content-center text-lg leading-8 text-gray-600 font-grotesk whitespace-pre-line">
                        {contentText}
                    </p>
                </div>
                <div>
                    <img
                        style={{borderRadius: '100px'}}
                        src={contentImage2}
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
    {contentImage2Caption}
  </span>
                </div>
            </div>
        </div>
    );
});
export default ImageTextImageSection;

