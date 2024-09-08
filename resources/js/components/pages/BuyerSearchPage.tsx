import '../../../css/app.css';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import HeaderBanner from "../HeaderBanner";
import ImageTextImageSection from "../ImageTextImageSection";
import axios from "axios";
import ImageTextSection from "../ImageTextSection";
import FooterBanner from "../FooterBanner";


interface BuyerSearchPageProps {
    user: {
        first_name: string;
        last_name: string;
        // Include other user fields as needed
    } | null;
}
//laravel breeze to handle users signing in and how to pass user to everything.
const userElement = document.getElementById('app');
const user = userElement ? JSON.parse(userElement.getAttribute('data-user')) : null;
const BuyerSearchPage = () => {

    const [customFields, setCustomFields] = useState([]);
    const [aboutAyden, setAboutAyden] = useState('');
    const [aboutJen, setAboutJen] = useState('');

    useEffect(() => {
        const script1 = document.createElement('script');
        script1.src = "//heritagegroupmn.idxbroker.com/idx/mapwidgetjs.php?widgetid=22964";
        script1.id = "idxwidgetsrc-22964";
        script1.type = "text/javascript";
        script1.charset = "UTF-8";
        document.body.appendChild(script1);

        const script2 = document.createElement('script');
        script2.src = "//heritagegroupmn.idxbroker.com/idx/quicksearchjs.php?widgetid=22961";
        script2.id = "idxwidgetsrc-22961";
        script2.type = "text/javascript";
        script2.charset = "UTF-8";
        document.body.appendChild(script2);

        const script3 = document.createElement('script');
        script3.src = "//heritagegroupmn.idxbroker.com/idx/widgets/60128";
        script3.id = "idxwidgetsrc-60128";
        script3.type = "text/javascript";
        script3.charset = "UTF-8";
        document.body.appendChild(script3);

        // Cleanup function to remove the scripts when the component unmounts
        return () => {
            document.body.removeChild(script1);
            document.body.removeChild(script2);
            document.body.removeChild(script3);
        };
    }, []);

    return (
        <div id="global-background" className="bg-secondary min-h-screen flex flex-col" style={{height: '100%'}}>
            <HeaderBanner user={user}/>
            <script charSet="UTF-8" type="text/javascript" id="idxwidgetsrc-22964"
                    src="//heritagegroupmn.idxbroker.com/idx/mapwidgetjs.php?widgetid=22964"></script>
            <div className={"flex-grow"}>
                <ImageTextSection
                    contentImage1={'images/mortgage-calculator-picture.jpeg'}
                    textID={'mortgageQuestions'}
                    headerText={'Meet the Team'}
                    contentText={aboutJen.field_value}
                />
                <br/>
            </div>
            <FooterBanner/>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<BuyerSearchPage/>);
