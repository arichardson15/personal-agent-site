import React, {forwardRef, useEffect, useState} from 'react'
import {ChevronDownIcon} from '@heroicons/react/20/solid'
import '../../css/app.css';
import axios from "axios";

interface ContactUsProps {
    user?: object
}

let ContactUs = forwardRef<HTMLDivElement, ContactUsProps>((props, ref) => {
    let {
        user
    } = props;
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    const [connectUs, setConnectUs] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        if (user) {
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

        axios.post(`/new-contact`, data)
            .then(response => {
                console.log("Form data successfully sent!", response.data);
                setSuccessMessage('Message Received! We will be in touch soon.')
            })
            .catch(error => {
                console.error("There was an error sending the form data!", error);
            });
    };

    const handleRadioChange = (e) => {
        setConnectUs(true);
    };
//add event listener isn't great. Need to prevent it from addEventListener every time it renders. Need to make it a use state field
    //const mainDivRef = userRef<HTMLDivElement>(null); add too main div 'ref=(mainDivRef).
    //add use effect and drop the event listener in there and change document to mainDivRef.current.addEventListener()
    //anytime you're thinking document., there is a way to do it from a reference instead which is the way it should be done.
    document.addEventListener('scroll', function () {
        const image = document.querySelector('.image-blur');
        const imagePosition = image.getBoundingClientRect().top;
        const threshold = 600;

        if (imagePosition < threshold) {
            image.classList.add('blur');
        } else {
            image.classList.remove('blur');
        }
    });


    return (

        <div className="bg-white sm:pb-1">
            <div>
                <div className="mx-auto mt-6 max-w-xl p-4 bg-secondary sm:mt-6 rounded-none sm:rounded-[25px]">
                    <label className="block text-center sm:col-span-2 pb-2 text-2xl font-semibold leading-6">
                        Contact Us
                    </label>
                    <div className="grid grid-cols-1 gap-x-8sm:grid-cols-2">
                        <label
                            className="block text-center sm:col-span-2 text-sm font-semibold leading-6 text-red-700">
                            {alertMessage}
                        </label>
                        <label
                            className="block text-center sm:col-span-2 text-sm font-semibold leading-6">
                            {successMessage}
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
                                    type="text"
                                    value={lastName}
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
                                    value={email}
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

            </div>
        </div>

    )
});
export default ContactUs;
