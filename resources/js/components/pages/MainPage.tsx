import '../../../css/app.css';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import HeaderBanner from "../HeaderBanner";
import ImageTextImageSection from "../ImageTextImageSection";
import axios from "axios";
import ContactUsMain from "../ContactUsMain";
import FooterBanner from "../FooterBanner";
import SectionDivider from "../SectionDivider";
import { isMobile } from '../../utils/detectMobile'; // Import mobile detection utility
import MobileComingSoon from '../MobileComingSoon'; // Import mobile component

interface MainPageProps {
    user: {
        first_name: string;
        last_name: string;
    } | null;
}

const userElement = document.getElementById('app');
const user = userElement ? JSON.parse(userElement.getAttribute('data-user')) : null;

const MainPage = () => {
    const [customFields, setCustomFields] = useState([]);
    const [aboutText, setAboutText] = useState(null);
    const [mainImage, setMainImage] = useState('');

    useEffect(() => {
        axios.get(`/get-custom-fields`)
            .then(response => {
                const fields = response.data;
                setCustomFields(fields);
                const aboutMainField = fields.find(field => field.field_name === 'About_Main');
                setAboutText(aboutMainField ? aboutMainField.field_value : '');
                const mainPageImage = fields.find(field => field.field_name === 'Main_Page_Image');
                setMainImage(mainPageImage ? mainPageImage.imagePath : '');
            })
            .catch(error => {
                console.error("There was an error fetching the custom field value!", error);
            });
    }, []);

    if (isMobile()) {
        return <MobileComingSoon />;
    }

    return (
        <div>
            <HeaderBanner user={user} />
            <ContactUsMain user={user} image={mainImage} />
            <SectionDivider />
            <ImageTextImageSection
                contentImage1Caption={'Jen Mains'}
                contentImage2Caption={'Ayden Anderson'}
                headerText={'Who Are We?'}
                contentText={aboutText}
                contentImage1={'/images/thumbnail_Jen_Mains.jpg'}
                contentImage2={'/images/thumbnail_Ayden_Mains.png'}
                textID={'about-main-text'}
            />
            <FooterBanner />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<MainPage user={user} />);
