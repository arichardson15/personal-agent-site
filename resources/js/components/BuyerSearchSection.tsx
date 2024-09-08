import React, { useEffect, useRef } from 'react';
import SectionDivider from "./SectionDivider";

interface BuyerSearchSectionProps {}

const BuyerSearchSection: React.FC<BuyerSearchSectionProps> = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const script1 = document.createElement('script');
        script1.src = "//heritagegroupmn.idxbroker.com/idx/mapwidgetjs.php?widgetid=22964";
        script1.id = "idxwidgetsrc-22964";
        script1.type = "text/javascript";
        script1.charset = "UTF-8";
        sectionRef.current.appendChild(script1);

        return () => {
            if (sectionRef.current) {
                sectionRef.current.removeChild(script1);
            }
        };
    }, []);

    return (
        <>
        <div
             className="mx-auto bg-white py-3 text-center max-w-7xl gap-x-8 gap-y-10 px-6 lg:px-8">
            <h2 className="text-3xl font-grotesk font-bold tracking-tight text-gray-900 sm:text-4xl">Search Tool</h2>
            <div className="mx-auto text-center">
                <div ref={sectionRef} className="p-6">
                </div>
            </div>
        </div>
            <SectionDivider></SectionDivider>
            </>
    );
};

export default BuyerSearchSection;
