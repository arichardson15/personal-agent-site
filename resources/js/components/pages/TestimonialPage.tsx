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
import {Label} from "@headlessui/react";


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

    const [testimonials, setTestimonials] = useState({});

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
        <div id="global-background" className=" justify-center min-h-screen flex flex-col" style={{ height: '100%' }}>
            <HeaderBanner user={user} />
            <div className={"flex-grow"}>
                <div>
                    <label className="text-4xl font-grotesk font-bold flex justify-center py-4">
                        What is it like to partner with The Heritage Group?
                    </label>
                    {Object.keys(testimonials).map((key, index) => (
                        <TestimonialsSection
                            key={index} // Add a unique key here
                            contentImage1={'images/Heritage_Logo_Black_2022.png'}
                            textID={`testimonial-${index}`} // Ensure the ID is unique
                            headerText={'Testimonials'}
                            testimonial={testimonials[key]} // Access the testimonial object
                        />
                    ))}
                    <br/>
                </div>
            </div>
            <FooterBanner/>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<TestimonialPage />);
