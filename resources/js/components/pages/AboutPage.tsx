import '../../../css/app.css';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import HeaderBanner from "../HeaderBanner";
import ImageTextImageSection from "../ImageTextImageSection";
import axios from "axios";
import ImageTextSection from "../ImageTextSection";
import FooterBanner from "../FooterBanner";
import ImageLongTextSection from "../LongTextImageSection";
import LongTextImageSection from "../LongTextImageSection";
import TestimonialsSection from "../TestimonialsSection";
import SectionDivider from "../SectionDivider";
import TextImageSection from "../TextImageSection";


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
    const [aboutHeritage, setAboutHeritage] = useState('');

    useEffect(() => {
        axios.get(`/get-custom-fields`)
            .then(response => {
                setAboutJen(response.data.find(item => item.field_name === "About_Jen"))
                setAboutAyden(response.data.find(item => item.field_name === "About_Ayden"));
                setAboutHeritage(response.data.find(item => item.field_name === "About_Heritage"));
                // Set the aboutText state if needed
            })
            .catch(error => {
                console.error("There was an error fetching the custom field value!", error);
            });
    }, []);

    return (
        <div id="global-background" className="bg-secondary min-h-screen flex flex-col" style={{ height: '100%' }}>
            <HeaderBanner user={user} />
            <div className={"flex-grow bg-white"}>
                <LongTextImageSection
                    contentImage1={'images/Heritage_Logo_Black_2022.png'}
                    textID={'aboutHeritage'}
                    headerText={'Meet The Heritage Group'}
                    contentText={aboutHeritage.field_value}
                    imageID={'aboutHeritage'}
                ></LongTextImageSection>
                <SectionDivider></SectionDivider>
                <LongTextImageSection
                    contentImage1={'images/thumbnail_Ayden_Mains.png'}
                    textID={'aboutAyden'}
                    headerText={'Meet Ayden Anderson'}
                    contentText={aboutAyden.field_value}
                />
                <SectionDivider></SectionDivider>
                <LongTextImageSection
                    contentImage1={'images/thumbnail_Jen_Mains.jpg'}
                    textID={'aboutJen'}
                    headerText={'Meet Jen Mains'}
                    contentText={aboutJen.field_value}
                />
                <SectionDivider></SectionDivider>
            </div>
            <FooterBanner />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<AboutPage />);
