import '../../../css/app.css';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import HeaderBanner from "../HeaderBanner";
import axios from "axios";
import ImageTextSection from "../ImageTextSection";
import FooterBanner from "../FooterBanner";
import TextImageSection from "../TextImageSection";
import HomeBuyBuyerWidget from "../HomeBuyBuyerWidget";
import FAQComponenet from "../FAQComponent";


interface BuyPageProps {
    user: {
        first_name: string;
        last_name: string;
    } | null;
}

const userElement = document.getElementById('app');
const user = userElement ? JSON.parse(userElement.getAttribute('data-user')) : null;
const BuyPage = () => {

    const [customFields, setCustomFields] = useState([]);
    const [whyBuyWithHeritage, setWhyBuyWithHeritage] = useState('');
    const [whatSetsUsApart, setWhatSetsUsApart] = useState('');
    const [faqs, setFAQS] = useState({});
    const [viewFAQS, setViewFAQS] = useState(false);

    useEffect(() => {
        const faqData = document.getElementById('app').getAttribute('data-faqs');
        setFAQS(JSON.parse(faqData));
    }, []);
    useEffect(() => {

    }), [faqs];

    useEffect(() => {
        const faqData = document.getElementById('app').getAttribute('data-faqs');
        setFAQS(JSON.parse(faqData));
        axios.get('/get-custom-fields')
            .then(response => {
                const whyBuyWithHeritageField = response.data.find((item: any) => item.field_name === "Why_Buy_With_Heritage");
                const whatSetsUsApartField = response.data.find((item: any) => item.field_name === "What_Sets_Us_Apart");
                setWhyBuyWithHeritage(whyBuyWithHeritageField?.field_value || '');
                setWhatSetsUsApart(whatSetsUsApartField?.field_value || '');
            })
            .catch(error => {
                console.error("There was an error fetching the custom field value!", error);
            });

    }, []);




    return (
        <div id="global-background" className="bg-secondary min-h-screen flex flex-col" style={{height: '100%'}}>
            <HeaderBanner user={user}/>
            <br/>
            <div className={"flex-grow"}>
                <TextImageSection contentText={whyBuyWithHeritage}
                                  textID={'whyBuyWithHeritage'}
                                  headerText={'Why Buy With Heritage?'}
                                  contentImage1={'images/mortgage-calculator-picture.jpeg'}

                ></TextImageSection>
                <br/>
                <HomeBuyBuyerWidget
                    contentText={'The Homebot tool is a great way to see the value in a certain city. Please keep in mind the numbers provided are just averages. '}
                    headerText={'Home Prices'}></HomeBuyBuyerWidget>
                <br/>
                <ImageTextSection
                    contentImage1={'images/mortgage-calculator-picture.jpeg'}
                    textID={'mortgageQuestions'}
                    headerText={'Mortgage Questions?'}
                    contentText={
                        <>
                            Mortgages can be a tricky thing to manage. If you have any questions, please just reach out
                            so we can schedule a time to walk you through the whole process.
                            <br/>
                            <br/>
                            If you are curious to find what a potential mortgage payment would look like, please check
                            out our in-house
                            <a href="/mortgage-calculator" className={"text-blue-700 font-bold"}> Mortgage
                                Calculator</a>.
                        </>
                    }
                />
                <br/>
                <TextImageSection contentText={whatSetsUsApart}
                                  textID={'whatSetsUsApart'}
                                  headerText={'What makes Heritage different?'}
                                  contentImage1={'images/mortgage-calculator-picture.jpeg'}

                ></TextImageSection>
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
                        <div className={"text-xl font-grotesk font-bold text-center self-center tracking-tight text-gray-900 sm:text-2xl"}
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
            </div>

            <FooterBanner/>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<BuyPage/>);
