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
//laravel breeze to handle users signing in and how to pass user to everything.
const userElement = document.getElementById('app');
const user = userElement ? JSON.parse(userElement.getAttribute('data-user')) : null;
const AboutPage = () => {

    const [customFields, setCustomFields] = useState([]);
    const [aboutAyden, setAboutAyden] = useState('');
    const [aboutJen, setAboutJen] = useState('');

    useEffect(() => {
        axios.get(`/get-custom-fields`)
            .then(response => {
                setAboutJen(response.data.find(item => item.field_name === "About_Jen"))
                const aboutAyden = response.data.find(item => item.field_name === "About_Jen");
                // Set the aboutText state if needed
            })
            .catch(error => {
                console.error("There was an error fetching the custom field value!", error);
            });
    }, []);

    console.log(aboutJen);

    return (
        <div id="global-background" className="bg-secondary min-h-screen flex flex-col" style={{ height: '100%' }}>
            <HeaderBanner user={user} />
            <div className={"flex-grow"}>
                <ImageTextSection
                    contentImage1={'images/mortgage-calculator-picture.jpeg'}
                    textID={'mortgageQuestions'}
                    headerText={'Meet the Team'}
                    contentText={aboutJen.field_value}
                />
                <br />
            </div>
            <FooterBanner />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<AboutPage />);
