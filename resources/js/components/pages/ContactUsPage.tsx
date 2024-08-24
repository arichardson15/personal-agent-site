import '../../../css/app.css';
import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import HeaderBanner from "../HeaderBanner";
import axios from "axios";
import ContactUs from "../ContactUs";
import FooterBanner from "../FooterBanner";

interface ContactUsPageProps {
    user: {
        first_name: string;
        last_name: string;
        // Include other user fields as needed
    } | null;
}

const userElement = document.getElementById('app');
const user = userElement ? JSON.parse(userElement.getAttribute('data-user')) : null;
const ContactUsPage = () => {

    return (
        <div id="global-background" className={"bg-secondary"} style={{height: '100%'}}>
            <HeaderBanner user={user}></HeaderBanner>
            <ContactUs></ContactUs>
            <FooterBanner></FooterBanner>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<ContactUsPage/>);
