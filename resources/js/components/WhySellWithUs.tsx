import React, {forwardRef, useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import axios from "axios";
import TextImageSection from "./TextImageSection";
import FAQComponenet from "./FAQComponent";
import WhySellWithUsSlice from "./WhySellWithUsSlice";
import SectionDivider from "./SectionDivider";



interface WhySellWithUsProps {
    whySellWithUs: object
}

const WhySellWithUs = forwardRef<HTMLButtonElement, WhySellWithUsProps>((props, ref) => {
    const {
        whySellWithUs,
    } = props;

    const pictures = {
        handshake: 'images/handshake.jpeg',
        marketing: 'images/Marketing Plan.jpeg',
        resource: 'images/Resource Network.jpeg',
        checklist: 'images/Checklist Complete.jpeg',
    }

    return (
        <>
        <div id="global-background" className="bg-secondary min-h-screen flex flex-col" style={{height: '100%'}}>

            <div className={"flex-grow bg-white"}>
                <div>
                    {whySellWithUs.length > 0 ? (
                        whySellWithUs.map((whySellWithUs, index) => (
                            <>
                            <WhySellWithUsSlice whySellWithUs={whySellWithUs}
                                                reverseOrder={index % 2 === 0}
                                                contentImage={whySellWithUs.imagePath}></WhySellWithUsSlice>
                            <SectionDivider></SectionDivider>
                            </>
                        ))
                    ) : (
                        <p>No FAQs available.</p> // You can customize this message or remove it
                    )}
                </div>
                <br/>
            </div>
        </div>
            </>
    );
});

export default WhySellWithUs;
