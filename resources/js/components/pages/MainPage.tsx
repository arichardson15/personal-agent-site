import '../../../css/app.css';
import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import HeaderBanner from "../HeaderBanner";
import ImageTextImageSection from "../ImageTextImageSection";
import axios from "axios";
import ContactUsMain from "../ContactUsMain";
import FooterBanner from "../FooterBanner";

interface MainPageProps {
    user: {
        first_name: string;
        last_name: string;
        // Include other user fields as needed
    } | null;
}

const userElement = document.getElementById('app');
const user = userElement ? JSON.parse(userElement.getAttribute('data-user')) : null;


const MainPage = () => {
    const [customFields, setCustomFields] = useState([]);
    const [aboutText, setAboutText] = useState(null);

useEffect(() => {
    axios.get(`/get-custom-fields`)
        .then(response => {
            const fields = response.data;
            setCustomFields(fields);
            const aboutMainField = fields.find(field => field.field_name === 'About_Main');
            setAboutText(aboutMainField ? aboutMainField.field_value : '');
        })
        .catch(error => {
            console.error("There was an error fetching the custom field value!", error);
        });
}, []);




    return (
        <div>
                <HeaderBanner user={user}></HeaderBanner>
                <ImageTextImageSection
                    contentImage1Caption={'Jen Mains'}
                    contentImage2Caption={'Ayden Mains'}
                    headerText={'Who Are We?'}
                    contentText={aboutText}
                    contentImage1={'/images/thumbnail_Jen_Mains.jpg'}
                    contentImage2={'/images/thumbnail_Ayden_Mains.png'}>
                </ImageTextImageSection>
            <ContactUsMain>
            </ContactUsMain>
            <FooterBanner></FooterBanner>
        </div>
            );
            };

            const root = ReactDOM.createRoot(document.getElementById('app'));
        root.render(<MainPage user={user} />);
