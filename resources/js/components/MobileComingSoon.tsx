import React, { forwardRef, useEffect, useState } from 'react';
import SectionDivider from "./SectionDivider";
import ContactUs from "./ContactUs";
import HeaderBanner from "./HeaderBanner";
import MobileHeaderBanner from "./MobileHeaderBanner";
import ImageTextImageSection from "./ImageTextImageSection";
import axios from "axios";
import FooterBanner from "./FooterBanner";
import MobileFooterBanner from "./MobileFooterBanner";
import TestimonialsSection from "./TestimonialsSection";
import ImageImageSection from "./ImageImageSection";

interface MobileComingSoonProps {
}

let MobileComingSoon = forwardRef<HTMLDivElement, MobileComingSoonProps>((props, ref) => {
    let {
    } = props;

    const [aboutText, setAboutText] = useState(null);


    const [testimonials, setTestimonials] = useState({});

    useEffect(() => {
        axios.get(`/get-testimonials`)
            .then(response => {
                console.log(response.data);
                setTestimonials(response.data.slice(0, 2));
            })
            .catch(error => {
                console.error("There was an error fetching the custom field value!", error);
            });
    }, []);

    useEffect(() => {
        axios.get(`/get-custom-fields`)
            .then(response => {
                const fields = response.data;
                const aboutMainField = fields.find(field => field.field_name === 'About_Main');
                setAboutText(aboutMainField ? aboutMainField.field_value : '');
                const mainPageImage = fields.find(field => field.field_name === 'Main_Page_Image');
            })
            .catch(error => {
                console.error("There was an error fetching the custom field value!", error);
            });
    }, []);


    return (
        <>

            <div className="bg-secondary">
                <MobileHeaderBanner></MobileHeaderBanner>
                <ImageTextImageSection
                    contentImage1Caption={''}
                    contentImage2Caption={''}
                    headerText={'Who Are We?'}
                    contentText={aboutText}
                    contentImage1={''}
                    contentImage2={''}
                    textID={'about-main-text'}
                />
                <ImageImageSection
                    contentImage2Caption={'Jen Mains'}
                    contentImage1Caption={'Ayden Anderson'}
                    contentImage2={'/images/thumbnail_Jen_Mains.jpg'}
                    contentImage1={'/images/thumbnail_Ayden_Mains.png'}>
                </ImageImageSection>
                <SectionDivider></SectionDivider>
                <label className="text-4xl bg-white font-grotesk font-bold flex justify-center py-4">
                    Testimonials
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
                <SectionDivider></SectionDivider>
                <ContactUs></ContactUs>
                <MobileFooterBanner></MobileFooterBanner>
            </div>
        </>
    );
});

export default MobileComingSoon;
