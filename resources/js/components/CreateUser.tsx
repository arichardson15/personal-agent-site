import React, {forwardRef, useEffect, useState} from 'react'
import {ChevronDownIcon} from '@heroicons/react/20/solid'
import '../../css/app.css';
import axios from "axios";

interface CreateUserProps {
    setCreateUser: string
}

const CreateUser = forwardRef<HTMLDivElement, CreateUserProps>((props, ref) => {
    let {
        setCreatedUser,
    } = props;

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [password, setPassword] = useState('');

    const createUser = () => {
        if(!email.includes('@')){
            setAlertMessage('Please enter a valid email');
            return;
        }
        const data= {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber,
            password: password,
        }
        axios.post('/create-user', data)
            .then(response => {
                console.log('User created successfully!', response.data);
                window.location.reload();
            })
            .catch(error => {
                console.error('There was an error creating the user!', error);
                setAlertMessage(error.response.data.message);
            });
    };

    const emailAlert = () => {
        const data = {
            firstName, lastName, email, phoneNumber
        };
        if (!firstName || !lastName || !email && !phoneNumber) {
            setAlertMessage('First name, last name, email or phone number are required.')

            return 'Missing information, not sending message';
        }

        axios.post(`/new-contact`, data)
            .then(response => {
                console.log("Form data successfully sent!", response.data);
                window.location.reload();
            })
            .catch(error => {
                console.error("There was an error sending the form data!", error);
            });
    };


    return (

        <div className="isolate relative">
            <div style={{position: 'relative', width: '100%', height: '550px', overflow: 'hidden'}}>
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-black">
                        Create Account
                    </h2>
                </div>
            </div>
            <div className={'absolute inset-0 flex items-center justify-center'}>
                <div className="mx-auto mt-6 max-w-xl sm:mt-6">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <label className="block pt-20 col-span-2 text-sm font-semibold leading-6 text-red-700">
                            {alertMessage}
                        </label>
                        <div>
                            <label htmlFor="first-name"
                                   className="block text-sm font-semibold leading-6 text-gray-900">
                                First Name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    id="first-name"
                                    name="first-name"
                                    type="text"
                                    onChange={(event) => setFirstName(event.currentTarget.value)}
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-tertiary sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="last-name"
                                   className="block text-sm font-semibold leading-6 text-gray-900">
                                Last Name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    id="last-name"
                                    name="last-name"
                                    onChange={(event) => setLastName(event.currentTarget.value)}
                                    type="text"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-tertiary sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                Email
                            </label>
                            <div className="mt-2.5">
                                <input
                                    id="email"
                                    name="email"
                                    onChange={(event) => setEmail(event.currentTarget.value)}
                                    type="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-tertiary sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                Password
                            </label>
                            <div className="mt-2.5">
                                <input
                                    id="password"
                                    name="password"
                                    onChange={(event) => setPassword(event.currentTarget.value)}
                                    type="password"
                                    autoComplete="password"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-tertiary sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="phone-number"
                                   className="block text-sm font-semibold leading-6 text-gray-900">
                                Phone Number
                            </label>
                            <div className="relative mt-2.5">
                                <div className="absolute inset-y-0 left-0 flex items-center">
                                    <label htmlFor="country" className="sr-only">
                                        Country
                                    </label>
                                    <select
                                        id="country"
                                        name="country"
                                        className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-tertiary sm:text-sm"
                                    >
                                        <option>US</option>
                                        <option>CA</option>
                                        <option>EU</option>
                                    </select>
                                    <ChevronDownIcon
                                        aria-hidden="true"
                                        className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                                    />
                                </div>
                                <input
                                    id="phone-number"
                                    name="phone-number"
                                    onChange={(event) => setPhoneNumber(event.currentTarget.value)}
                                    type="tel"
                                    autoComplete="tel"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-tertiary sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <button
                            type="button"
                            onClick={createUser}
                            className="block w-full rounded-md bg-tertiary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                            Create User
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
});
export default CreateUser;
