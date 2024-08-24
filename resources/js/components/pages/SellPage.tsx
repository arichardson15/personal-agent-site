import '../../../css/app.css';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import HeaderBanner from "../HeaderBanner";
import ImageTextImageSection from "../ImageTextImageSection";
import axios from "axios";
import ImageTextSection from "../ImageTextSection";
import FooterBanner from "../FooterBanner";
import FAQComponenet from "../FAQComponent";
import HomeBuyBuyerWidget from "../HomeBuyBuyerWidget";
import HomeBuySellerWidget from "../HomeBuySellerWidget";
import TextImageSection from "../TextImageSection";


interface SellPageProps {
    user: {
        first_name: string;
        last_name: string;
        // Include other user fields as needed
    } | null;
}

const userElement = document.getElementById('app');
const user = userElement ? JSON.parse(userElement.getAttribute('data-user')) : null;
const SellPage = () => {

    const [customFields, setCustomFields] = useState([]);
    const [aboutText, setAboutText] = useState(null);
    const [faqs, setFAQS] = useState({});
    const [viewFAQS, setViewFAQS] = useState(false);
    const [whySellWithUs, setWhySellWithUs] = useState({});

    useEffect(() => {
        const faqData = document.getElementById('app').getAttribute('data-faqs');
        const parsedFaqData = JSON.parse(faqData);
        const filteredFaqs = parsedFaqData.filter(faq => faq.siteSection === 'Sell');
        const whySellWithUs = parsedFaqData.filter(faq => faq.siteSection === 'WhySellWithUs');
        setFAQS(filteredFaqs);
        setWhySellWithUs(whySellWithUs)
    }, []);
    useEffect(() => {

    }), [faqs];

    useEffect(() => {
        axios.get(`/get-custom-fields`)
            .then(response => {
                const aboutObject = response.data.find(item => item.field_name === "About_Main");
                // Set the aboutText state if needed
            })
            .catch(error => {
                console.error("There was an error fetching the custom field value!", error);
            });
    }, []);


    return (
        <div id="global-background" className="bg-secondary min-h-screen flex flex-col" style={{height: '100%'}}>
            <HeaderBanner user={user}/>
            <div className={"flex-grow"}>

                <div>
                    {whySellWithUs.length > 0 ? (
                        whySellWithUs.map((whySellWithUs, index) => (
                            <TextImageSection
                                contentText={whySellWithUs.question + whySellWithUs.answer}
                            />
                        ))
                    ) : (
                        <p>No FAQs available.</p> // You can customize this message or remove it
                    )}
                </div>
                <ImageTextSection
                    contentImage1={'images/mortgage-calculator-picture.jpeg'}
                    headerText={'Mortgage Questions?'}
                    contentText={
                        <>

                            <a href="/mortgage-calculator" className={"text-blue-700 font-bold"}> Mortgage
                                Calculator</a>.
                        </>
                    }
                />
                <br/>
            </div>
            <HomeBuySellerWidget
                contentText={'The Homebot tool will give your house valuation based on the market around it. Please keep in mind the numbers provided are just estimates. '}
                headerText={'Home Value'}></HomeBuySellerWidget>
            <br/>
            <br/>
            {viewFAQS === false ? (
                <div className={"text-xl font-grotesk font-bold tracking-tight text-center text-gray-900 sm:text-2xl"}>
                    <button className={"mt-4 px-4 py-2 bg-tertiary font-bold font-grotesk text-white rounded"}
                            onClick={() => setViewFAQS(true)}>
                        Want to learn more? Take a look at some of our most asked questions!
                    </button>
                </div>

            ) : (
                <>
                <div className={"text-xl font-grotesk font-bold self-center tracking-tight text-gray-900 sm:text-2xl"}
                     id="faqs">
                    <button className={"mt-4 px-4 p-14 py-2 bg-tertiary mb-3.5 font-bold font-grotesk text-white rounded"}
                            onClick={() => setViewFAQS(false)}>
                        Collapse Frequently Asked Questions
                    </button>
                </div>
                <div>
                    {faqs.length > 0 ? (
                        faqs.map((faq, index) => (
                            <FAQComponenet
                                key={index}
                                faqQuestion={faq.question || ''}
                                faqAnswer={faq.answer || ''}
                                faqQuestionCount={faq.number || ''}
                            />
                        ))
                    ) : (
                        <p>No FAQs available.</p> // You can customize this message or remove it
                    )}
                </div>
                </>
            )}
            <br/>

            <FooterBanner/>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<SellPage/>);
