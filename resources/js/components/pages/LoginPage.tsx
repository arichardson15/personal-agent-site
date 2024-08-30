import '../../../css/app.css';
import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import HeaderBanner from "../HeaderBanner";
import axios from "axios";
import FooterBanner from "../FooterBanner";
import Login from "../CreateUser";
import SignIn from "../SignIn";
import CreateUser from "../CreateUser";
import ForgotPassword from "../ForgotPassword";

interface LoginProps {
    user: {
        first_name: string;
        last_name: string;
        // Include other user fields as needed
    } | null;
}

const userElement = document.getElementById('app');
const user = userElement ? JSON.parse(userElement.getAttribute('data-user')) : null;
const LoginPage = () => {
    const [creatingUser, setCreatingUser] = useState(false);
    const [forgotPassword, setForgotPassword] = useState(false);

    useEffect(() => {
        axios.get(`/get-custom-fields`)
            .then(response => {
                const aboutObject = response.data.find(item => item.field_name === "About_Main");
            })
            .catch(error => {
                console.error("There was an error fetching the custom field value!", error);
            });
    }, []);

    return (
        <div id="global-background" className="bg-secondary min-h-screen flex flex-col" style={{height: '100%'}}>
            <HeaderBanner user={user}></HeaderBanner>
            <img
                alt="MN Heritage Group Logo"
                src="/images/Heritage_Logo_Black_2022.png"
                className="mx-auto h-36 w-auto"
            />
            <div className={"flex-grow"}>
                {creatingUser ? (
                    <CreateUser />
                ) : forgotPassword ? (
                    <ForgotPassword setForgotPassword={setForgotPassword} setCreateUser={setCreatingUser} />
                ) : (
                    <SignIn setForgotPassword={setForgotPassword} setCreateUser={setCreatingUser} />
                )}
                <br></br>
            </div>
            <FooterBanner></FooterBanner>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<LoginPage/>);
