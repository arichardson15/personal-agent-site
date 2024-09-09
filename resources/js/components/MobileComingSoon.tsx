import React, { forwardRef, useEffect, useState } from 'react';
import SectionDivider from "./SectionDivider";

interface MobileComingSoonProps {
}

let MobileComingSoon = forwardRef<HTMLDivElement, MobileComingSoonProps>((props, ref) => {
    let {
    } = props;


    return (
        <>

            <div className="py-3 bg-secondary"
            style={{height: '100vh'}}>
                <div
                    className="mx-auto max-w-7xl lg:px-8"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'auto 1fr',
                        alignItems: 'left',
                    }}
                >
                    <img
                        style={{
                            borderRadius: '100px',
                            maxWidth: '50%',
                            gridArea: 'image',
                            placeSelf: 'center',
                            paddingBottom: '20px',
                            paddingTop: '20px',
                        }}
                        src={'images/Heritage_Logo_Black_2022.png'}
                        alt="Content"
                    />
                    <div  style={{gridArea: 'text', background: 'rgba(255, 255, 255, 0.9)'}} className={'p-4'}>
                        <h2 className="text-3xl font-grotesk font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Mobile Coming Soon!
                        </h2>
                        <p
                            className="mt-6 text-xl py-3 leading-8 text-gray-600 font-grotesk"
                        > A mobile version is coming soon, but in the mean time please use our site on a computer! </p>
                    </div>
                </div>
            </div>
        </>
    );
});

export default MobileComingSoon;
