import React, {forwardRef, useEffect, useState} from 'react'
import {ChevronDownIcon} from '@heroicons/react/20/solid'
import '../../css/app.css';
import axios from "axios";

interface ContactUsMainProps {
    user?: object
    image: string

}
let ContactUsMain = forwardRef<HTMLDivElement, ContactUsMainProps>((props, ref) => {
    let {
        user,
        image
    } = props;

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    const [connectUs, setConnectUs] = useState(false);
    const [connected, setConnected] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    useEffect(() => {
        if(user) {
            setFirstName(user.first_name);
            setLastName(user.last_name);
            setEmail(user.email);
            setPhoneNumber(user.phone_number)
        }
    }, []);

    const emailAlert = () => {
        const data = {
            firstName, lastName, email, phoneNumber, message,
        };
        if (!firstName || !lastName || !email && !phoneNumber) {
            console.log('Missing information');
            setAlertMessage('First name, last name, email or phone number are required.')

            return 'Missing information, not sending message';
        }
        setConnected(true);
        setConnectUs(false);

        axios.post(`/new-contact`, data)
            .then(response => {
                console.log("Form data successfully sent!", response.data);
            })
            .catch(error => {
                console.error("There was an error sending the form data!", error);
            });
    };


    return (

        <div className="relative">
            <div style={{position: 'relative', width: '100%', height: '750px', overflow: 'hidden'}}>
                <img src={image} style={{width: '100%', transform: 'translate(-0%, -20%)'}}
                     className="object-cover absolute max-h-[1000px] min-w-max image-blur" alt="House Image"></img>
                <div className="absolute inset-0 bg-black opacity-45"></div>
            </div>
            {!connected ? (!connectUs ? (<div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-4 rounded"
                    >
                        <h2 className="text-3xl font-grotesk tracking-tight font-bold text-white sm:text-6xl">Your
                            Next Home Awaits!</h2>
                        <p className="mt-2 text-lg leading-8 text-white">
                        </p>
                        <a
                            className="mt-4 border-white border-2 mx-5 px-4 py-2 bg-tertiary font-bold font-grotesk text-white rounded"
                            href={'/buy'}>Buy With The Heritage Group
                        </a>
                        <a
                            className="mt-4 border-white border-2 mx-5 px-4 py-2 bg-tertiary font-bold font-grotesk text-white rounded"
                            href={'/sell'}>Sell With The Heritage Group
                        </a>
                        <button
                            className="mt-4 border-white border-2 mx-5 px-4 py-2 bg-tertiary font-bold font-grotesk text-white rounded"
                            onClick={() => setConnectUs(true)}>Let's Connect!
                        </button>
                    </div>
                </div>
            </div>) : (<div className={'absolute inset-0 flex items-center justify-center'}>
                <div className="mx-auto mt-6 max-w-xl sm:mt-6 p-10"
                     style={{backgroundColor: 'rgba(254, 238, 221, 0.8)'}}>
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <label className="block col-span-2 text-sm font-semibold leading-6 text-red-700">
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
                                    value={firstName}
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
                                    value={lastName}
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
                                    value={email}
                                    type="email"
                                    autoComplete="email"
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
                                    value={phoneNumber}
                                    type="tel"
                                    autoComplete="tel"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-tertiary sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message"
                                   className="block text-sm font-semibold leading-6 text-gray-900">
                                Message
                            </label>
                            <div className="mt-2.5">
                                  <textarea
                                      id="message"
                                      name="message"
                                      onChange={(event) => setMessage(event.currentTarget.value)}
                                      rows={4}
                                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-tertiary sm:text-sm sm:leading-6"
                                      defaultValue={''}
                                  />
                            </div>
                        </div>

                    </div>
                    <div className="mt-10">
                        <button
                            type="button"
                            onClick={emailAlert}
                            className="block w-full rounded-md bg-tertiary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                            Let's Connect!
                        </button>
                    </div>
                </div>
            </div>)) : (<div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-4 rounded" style={{backgroundColor: 'rgba(254, 238, 221, 0.8)'}}>
                    <h2 className="text-3xl font-grotesk tracking-tight text-black sm:text-2xl">We will be in touch
                        soon!</h2>
                    <p className="mt-2 text-lg leading-8 text-white">
                    </p>
                </div>
            </div>)}
        </div>

    )
});
export default ContactUsMain;
