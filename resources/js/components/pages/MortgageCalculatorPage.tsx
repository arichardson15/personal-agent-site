import '../../../css/app.css';
import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import HeaderBanner from "../HeaderBanner";
import axios from "axios";
import MortgageCalculator from "../MortgageCalculator";
import ContactUs from "../ContactUs";
import FooterBanner from "../FooterBanner";

interface MortgageCalculatorPageProps {
    user: {
        first_name: string;
        last_name: string;
        // Include other user fields as needed
    } | null;
}

const userElement = document.getElementById('app');
const user = userElement ? JSON.parse(userElement.getAttribute('data-user')) : null;
const MortgageCalculatorPage = () => {
    const [percentageDown, setPercentageDown] = useState(20);
    const [purchasePrice, setPurchasePrice] = useState(200000);
    const [downPayment, setDownPayment] = useState(20000);
    const [mortgageFacts, setMortgageFacts] = useState('');
    const [customFields, setCustomFields] = useState([]);

    useEffect(() => {
        axios.get(`/get-custom-fields`)
            .then(response => {
                const fields = response.data;
                setCustomFields(response.data);
                console.log(response.data)
                const mortgageFacts = fields.find(field => field.field_name === 'Mortgage_Facts');
                setMortgageFacts(mortgageFacts ? mortgageFacts.field_value : '');
            })
            .catch(error => {
                console.error("There was an error fetching the custom field value!", error);
            });
    }, []);

    useEffect(() => {
        let percent = (downPayment/purchasePrice)*100;
        setPercentageDown(percent)
    }, [purchasePrice, downPayment, purchasePrice]);

    return (
        <div id="global-background" className={"bg-secondary"} style={{height: '100%'}}>
            <HeaderBanner user={user}></HeaderBanner>
            <MortgageCalculator downPayment={downPayment} mortgageFacts={mortgageFacts} purchasePrice={purchasePrice} percentageDown={percentageDown}></MortgageCalculator>
            <FooterBanner></FooterBanner>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<MortgageCalculatorPage/>);
