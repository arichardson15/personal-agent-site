import React, {forwardRef, useEffect, useState} from 'react'
import {ChevronDownIcon} from '@heroicons/react/20/solid'
import '../../css/app.css';
import axios from "axios";

interface SignInProps {
    setCreateUser: string
    setForgotPassword: string
}

const SignIn = forwardRef<HTMLDivElement, SignInProps>((props, ref) => {
    let {
    } = props;

    const [emailAddress, setEmailAddress] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [alertMessage, setAlertMessage] = useState('');


    // useEffect(() => {
    //     const script = document.createElement('script');
    //     script.src = 'https://accounts.google.com/gsi/client';
    //     script.async = true;
    //     script.defer = true;
    //     script.onload = () => {
    //         google.accounts.id.initialize({
    //             client_id: '1068980408035-7ttek7fdhk17mgg6nksca6kd55th838a.apps.googleusercontent.com',
    //             callback: handleCredentialResponse
    //         });
    //         google.accounts.id.renderButton(
    //             document.querySelector(".g_id_signin"),
    //             {theme: "outline", size: "large"}  // Customize the button appearance here
    //         );
    //         google.accounts.id.prompt(); // Optional: Automatically prompts the user to sign in
    //     };
    //     document.body.appendChild(script);
    // }, []);

    // const handleCredentialResponse = (response) => {
    //     console.log("Encoded JWT ID token: " + response.credential);
    // };

    const forgotPassword = () => {
        if (!emailAddress.includes('@')) {
            setAlertMessage('Please enter a valid email');
            return;
        }
        const data = {
            email: emailAddress,
            newPassword: newPassword,
        };
        axios.post('/change-password', data)
            .then(response => {
                if (response.status === 204) { // Check if the login was successful
                    console.log('Password updated.', response.data);
                    setAlertMessage('Password updated! Please try to log in again.')
                } else {
                    console.error('Login response not OK:', response);
                    console.log(response.data);
                }
            })
            .catch(error => {
                setAlertMessage('ERROR: ' + error.response.data.message);
            });
    };

    return (

        <>
            <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
                    <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
                        <form action="#" method="POST" className="space-y-6">
                            <div>
                                <label>{alertMessage}</label>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        onChange={(event) => setEmailAddress(event.currentTarget.value)}
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-tertiary sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        onChange={(event) => setNewPassword(event.currentTarget.value)}
                                        required
                                        autoComplete="current-password"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-tertiary sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <button
                                    type="button"
                                    onClick={forgotPassword}
                                    className="flex w-full justify-center rounded-md bg-tertiary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary"
                                >
                                    Update password
                                </button>
                            </div>
                        </form>
                        </div>
                </div>
            </div>
        </>
    )
});
export default SignIn;
