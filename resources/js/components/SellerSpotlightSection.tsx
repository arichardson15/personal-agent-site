import React, { useEffect, useRef } from 'react';

interface SellerSpotlightSectionProps {}

const SellerSpotlightSection: React.FC<SellerSpotlightSectionProps> = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (sectionRef.current) {
            const script3 = document.createElement('script');
            script3.src = "//heritagegroupmn.idxbroker.com/idx/widgets/61096";
            script3.id = "idxwidgetsrc-61096";
            script3.type = "text/javascript";
            script3.charset = "UTF-8";
            sectionRef.current.appendChild(script3);

            // Cleanup function to remove the script when the component unmounts
            return () => {
                if (sectionRef.current) {
                    sectionRef.current.removeChild(script3);
                }
            };
        }
    }, []);

    return (
        <div
             className="mx-auto bg-white py-3 text-center max-w-7xl gap-x-8 gap-y-10 px-6 lg:px-8">
            <h2 className="text-3xl font-grotesk font-bold tracking-tight text-gray-900 sm:text-4xl">Recently Sold</h2>
            <div className="mx-auto text-center">
                <div ref={sectionRef} style={{borderRadius: '100px'}} className="p-6">
                </div>
            </div>
        </div>
    );
};

export default SellerSpotlightSection;
