import React, {forwardRef, useEffect, useRef, useState} from 'react';
import NavBarButton from "./NavBarButton";
import axios from "axios";

interface MobileHeaderBannerProps {
}

const MobileHeaderBanner = forwardRef<HTMLDivElement, MobileHeaderBannerProps>((props, ref) => {
    let {
    } = props;


    return (
        <div>
            <header style={{backgroundColor: '#cec7b9', maxHeight: '94px'}}>
                <div className="relative pt-2 flex items-center justify-center" style={{height: '130px'}}>
                    <span
                        style={{
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            width: '100%',
                            height: '135px',
                            backgroundColor: '#203128',
                            zIndex: 0,
                        }}
                    />

                    {/* Centered Image */}
                    <img
                        src="/images/Heritage_Logo_White_2022.png"
                        className="relative z-10"
                        alt="Heritage Logo"
                        style={{maxHeight: '100%', width: 'auto'}}
                    />
                </div>

                {/* Navigation bar */}
                <nav className="relative px-4 lg:px-6" style={{maxHeight: '94px'}}></nav>
            </header>
        </div>


    );
});
export default MobileHeaderBanner;
