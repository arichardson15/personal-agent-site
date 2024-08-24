import React, {forwardRef, useEffect, useState} from 'react'
import {ChevronDownIcon} from '@heroicons/react/20/solid'
import '../../css/app.css';
import axios from "axios";

interface SignInProps {
    setCreateUser: string
}

const SignIn = forwardRef<HTMLDivElement, SignInProps>((props, ref) => {
    let {
        setCreateUser,
    } = props;

    const [alertMessage, setAlertMessage] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

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

    const logInUser = () => {
        if (!emailAddress.includes('@')) {
            setAlertMessage('Please enter a valid email');
            return;
        }
        const data = {
            email: emailAddress,
            password: password,
        };
        axios.post('/login', data)
            .then(response => {
                if (response.status === 200) { // Check if the login was successful
                    console.log('User logged in successfully.', response.data);
                    window.location.href = '/';
                } else {
                    console.error('Login response not OK:', response);
                    setAlertMessage('Login failed.');
                }
            })
            .catch(error => {
                console.error('Incorrect username or password.', error);
                setAlertMessage('Incorrect username or password');
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
                                        onChange={(event) => setPassword(event.currentTarget.value)}
                                        required
                                        autoComplete="current-password"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-tertiary sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-gray-300 text-tertiary focus:ring-tertiary"
                                    />
                                    <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-gray-900">
                                        Remember me
                                    </label>
                                </div>

                                <div className="text-sm leading-6">
                                    <a href="#" className="font-semibold text-tertiary hover:text-green-700">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="button"
                                    onClick={logInUser}
                                    className="flex w-full justify-center rounded-md bg-tertiary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary"
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>

                        <div>
                            <div className="relative mt-10">
                            {/*    <div aria-hidden="true" className="absolute inset-0 flex items-center">*/}
                            {/*        <div className="w-full border-t border-gray-200"/>*/}
                            {/*    </div>*/}
                            {/*    <div className="relative flex justify-center text-sm font-medium leading-6">*/}
                            {/*        <span className="bg-white px-6 text-gray-900">Or continue with</span>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                            {/*<div className="mt-6 grid grid-cols-1 gap-4">*/}
                            {/*    <script src="https://accounts.google.com/gsi/client" async defer></script>*/}
                            {/*    <div id="g_id_onload"*/}
                            {/*         data-client_id="1068980408035-7ttek7fdhk17mgg6nksca6kd55th838a.apps.googleusercontent.com"*/}
                            {/*         data-login_uri="http://127.0.0.1:8002/login"*/}
                            {/*         data-auto_prompt="false">*/}
                            {/*    </div>*/}
                            {/*    <div className="g_id_signin"*/}
                            {/*         data-type="standard"*/}
                            {/*         data-size="large"*/}
                            {/*         data-theme="outline"*/}
                            {/*         data-text="sign_in_with"*/}
                            {/*         data-shape="rectangular"*/}
                            {/*         data-logo_alignment="left">*/}
                            {/*    </div>*/}

                                <a
                                    href="#"
                                    className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent"
                                >
                                    <span className="text-sm font-semibold leading-6"
                                          onClick={() => setCreateUser(true)}>Create Account</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
});
export default SignIn;
