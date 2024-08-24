import '../../../css/app.css';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import HeaderBanner from "../HeaderBanner";
import ImageTextImageSection from "../ImageTextImageSection";
import axios from "axios";
import ImageTextSection from "../ImageTextSection";
import FooterBanner from "../FooterBanner";


interface AboutPageProps {
    user: {
        first_name: string;
        last_name: string;
        // Include other user fields as needed
    } | null;
}

const userElement = document.getElementById('app');
const user = userElement ? JSON.parse(userElement.getAttribute('data-user')) : null;
const AboutPage = () => {

    const [customFields, setCustomFields] = useState([]);
    const [aboutText, setAboutText] = useState(null);

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

    useEffect(() => {
        // Create and insert the script tag into the document
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.innerHTML = `
            (function (h,b) {
                var w = window, d = document, s = 'script', x, y;
                w['__hb_namespace'] = h;
                w[h] = w[h] || function () { (w[h].q=w[h].q||[]).push(arguments) };
                y = d.createElement(s);
                x = d.getElementsByTagName(s)[0];
                y.async = 1;
                y.src = b;
                x.parentNode.insertBefore(y,x);
            })('Homebot','https://embed.homebotapp.com/lgw/v1/widget.js');
            Homebot('#homebot_homeowner', '3662f1a887ad4d3448f745aa645bd9763680539608b4ed80', {'mode': 'buyers-mode'});
        `;

        document.body.appendChild(script);

        // Cleanup function to remove the script
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div id="global-background" className="bg-secondary min-h-screen flex flex-col" style={{ height: '100%' }}>
            <HeaderBanner user={user} />
            <div className={"flex-grow"}>
                <ImageTextSection
                    contentImage1={'images/mortgage-calculator-picture.jpeg'}
                    headerText={'Mortgage Questions?'}
                    contentText={
                        <>
                            Mortgages can be a tricky thing to manage. If you have any questions, please just reach out
                            so we can schedule a time to walk you through the whole process.
                            <br />
                            <br />
                            If you are curious to find what a potential mortgage payment would look like, please check
                            out our in-house
                            <a href="/mortgage-calculator" className={"text-blue-700 font-bold"}> Mortgage
                                Calculator</a>.
                        </>
                    }
                />
                <br />
            </div>
            <div id="homebot_homeowner"></div>

            <FooterBanner />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<AboutPage />);
