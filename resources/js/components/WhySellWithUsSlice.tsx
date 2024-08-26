import React, {forwardRef, useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import axios from "axios";
import TextImageSection from "./TextImageSection";
import FAQComponenet from "./FAQComponent";



interface WhySellWithUsSliceProps {
    whySellWithUs: object;
    contentImage: string;
    reverseOrder: boolean;
}

const WhySellWithUsSlice = forwardRef<HTMLButtonElement, WhySellWithUsSliceProps>((props, ref) => {
    const {
        whySellWithUs,
        contentImage,
        reverseOrder
    } = props;

    const [textHeight, setTextHeight] = useState(20);
    let textOrder = 2;
    let imageOrder = 1;


        if (reverseOrder) {
            textOrder = 1;
            imageOrder = 2;
        }

    useEffect(() => {
        setTimeout(() => {
            const element = document.getElementById(whySellWithUs.id);
            if (element) {
                const elementHeight = element.offsetHeight;
                console.log(elementHeight);
                setTextHeight(elementHeight + 'px');
            }
        }, 100);
    }, []);

    return (
        <>
            <br/>
            <div style={{borderRadius: '100px'}} className="mx-auto bg-white py-3 grid max-w-7xl gap-x-8 gap-y-10 px-6 lg:px-8 grid-cols-2">
                <div id={whySellWithUs.id} className="max-w-2xl" style={{order: textOrder}}>
                    <h2 className="text-3xl pl-10 font-grotesk font-bold tracking-tight text-gray-900 sm:text-4xl">{whySellWithUs.question}</h2>
                    <p className="mt-6 text-lg pl-10 leading-8 text-gray-600 font-grotesk"
                       dangerouslySetInnerHTML={{__html: whySellWithUs.answer.replace(/\n/g, '<br />')}}>
                    </p>
                </div>
                <div style={{height: 'auto', order: imageOrder, display: "flex", justifySelf: 'center'}}>
                    <img
                        style={{
                            borderRadius: '100px',
                            minHeight: "200px",
                            verticalAlign: "middle",
                            height: textHeight
                        }}
                        className={'h-full align-middle'}
                        src={contentImage}
                    />
                </div>
            </div>
            <br/>
        </>
    );
                });

                export default WhySellWithUsSlice;
