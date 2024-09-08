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


interface TestimonialPageProps {
    user: {
        first_name: string;
        last_name: string;
        // Include other user fields as needed
    } | null;
}
//laravel breeze to handle users signing in and how to pass user to everything.
const userElement = document.getElementById('app');
const user = userElement ? JSON.parse(userElement.getAttribute('data-user')) : null;
const TestimonialPage = () => {

    const [testimonials, setTestimonials] = useState('');

    useEffect(() => {
        axios.get(`/get-testimonials`)
            .then(response => {
                console.log(response.data);
                setTestimonials(response.data)
            })
            .catch(error => {
                console.error("There was an error fetching the custom field value!", error);
            });
    }, []);

    return (
        <div id="global-background" className="bg-secondary min-h-screen flex flex-col" style={{ height: '100%' }}>
            <HeaderBanner user={user} />
            <div className={"flex-grow"}>
                <TestimonialsSection
                    contentImage1={'images/Heritage_Logo_Black_2022.png'}
                    textID={'aboutHeritage'}
                    headerText={'Testimonials'}
                    contentText={testimonials}
                ></TestimonialsSection>
                <br />
            </div>
            <FooterBanner />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<TestimonialPage />);
