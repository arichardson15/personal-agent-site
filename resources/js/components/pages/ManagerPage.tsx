import '../../../css/app.css';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import HeaderBanner from "../HeaderBanner";
import FooterBanner from "../FooterBanner";
import axios from "axios";
import CustomTextField from "../CustomTextField";

interface ManagerPageProps {
    user: {
        first_name: string;
        last_name: string;
        // Include other user fields as needed
    } | null;
}

const userElement = document.getElementById('app');
const user = userElement ? JSON.parse(userElement.getAttribute('data-user')) : null;
const ManagerPage = () => {
    const [customFields, setCustomFields] = useState<any[]>([]);

    useEffect(() => {
        axios.get(`/get-custom-fields`)
            .then(response => {
                setCustomFields(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the custom field value!", error);
            });
    }, []);

    return (
        <div id="global-background" className="bg-secondary min-h-screen flex flex-col" style={{ height: '100%' }}>
            <HeaderBanner user={user} />
            <div className="flex-grow mt-28">
                <a href={"/edit-faqs"}>View FAQs</a>
                <div>
                    <CustomTextField
                        field_name={'Testimonial Giver'}
                        field_value={'Testimonial'}
                        table_name={'testimonials'}
                        id={'testimonials'}
                        customFieldName={true}
                        section={'New Testimonial'}>
                    </CustomTextField>
                </div>
                <div id='custom-fields'>
                    {customFields.map(field => (
                        <CustomTextField key={field.id}
                                         id={field.id}
                                         table_name={'custom_fields'}
                                         field_value={field.field_value}
                                         customFieldName={false}
                                         image={field.imagePath}
                                         image2={field.imagePath2}
                                         field_name={field.field_name}/>
                    ))}
                </div>
            </div>
            <FooterBanner />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('app')!);
root.render(<ManagerPage/>);
