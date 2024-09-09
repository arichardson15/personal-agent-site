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
        axios.get(`/get-faqs`)
            .then(response => {
                setCustomFields(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the custom field value!", error);
            });
    }, []);

    return (
        <div id="global-background" className="bg-secondary min-h-screen flex flex-col" style={{ height: '100%' }}>
            <HeaderBanner user={user} />
            <div className="flex-grow">
                <a href={'/manager'}>Return to manager page</a>
                <div id='custom-fields'>
                    {customFields.map(field => (
                        <CustomTextField key={field.id}
                                         id={field.id}
                                         table_name={'faqs'}
                                         field_value={field.answer}
                                         field_name={field.question}
                                         customFieldName={true}
                                         section={field.site_section}/>
                    ))}
                </div>
            </div>
            <FooterBanner />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('app')!);
root.render(<ManagerPage/>);
