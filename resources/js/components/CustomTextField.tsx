import React, {forwardRef, HTMLAttributes, useState} from 'react';
import axios from "axios";

interface CustomTextFieldProps {
    field_name: string;
    field_value: string;
    table_name: string;
    id: number;
    customFieldName: boolean;
    section?: string;
    image?: string;
    image2?: string;
}
let CustomTextField = forwardRef<HTMLDivElement, CustomTextFieldProps>((props, ref) => {
    let {
        table_name,
        field_value,
        field_name,
        id,
        customFieldName,
        section,
        image,
        image2
    } = props;

    const [newFieldValue, setNewFieldValue] = useState(field_value);
    const [newFieldName, setNewFieldName] = useState(field_name);
    const [alertMessage, setAlertMessage] = useState('');
    const [newImage, setNewImage] = useState(image);
    const [newImage2, setNewImage2] = useState(image2);

    const saveCustomField = () => {
        const formData = new FormData();
        formData.append('newFieldName', newFieldName);
        formData.append('newFieldValue', newFieldValue);
        formData.append('table_name', table_name);
        formData.append('id', id);

        if (image) {
            formData.append('image', newImage);
        }

        if (image2) {
            formData.append('image2', newImage2);
        }

        const url = table_name === 'testimonials' ? '/create-testimonial' : '/save-field';
        axios.post(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                setAlertMessage('Value saved successfully');
            })
            .catch(error => {
                console.error('Error uploading image:', error);
            });
    };

    const handleImageUpload1 = (event) => {
        const file = event.target.files[0];
        setNewImage(file);
    };

    const handleImageUpload2 = (event) => {
        const file = event.target.files[0];
        setNewImage2(file);
    };

    return (
        <div className="">
            <div className="table w-full p-16">
                <table className="w-full">
                    <tbody>
                    <tr>
                        <td className={'text-green-700'}>{alertMessage}</td>
                    </tr>
                    <tr className={'pl-2 h-fit'}>
                            {!customFieldName ? (
                                    <td className="w-1/4 p-2">
                                <h2 className="text-3xl font-grotesk font-bold tracking-tight text-gray-900">{field_name}</h2>
                                    </td>
                            ) : (
                                <>
                                    <td>
                                        {section}
                                    </td>
                                <td className="w-1/4 p-2">
                                <textarea
                                id={field_name}
                            className="w-full h-32 p-2 border border-gray-300 rounded-md resize-none"
                            onChange={(e) => {
                                setNewFieldName(e.target.value);
                            }}
                                >{field_name}</textarea>
                                </td>
                                </>
                        )}
                        {image || image2 ? (
                            <td>
                                {image && (
                                    <div>
                                        <img style={{ maxWidth: '64px', maxHeight: '64px' }} src={image} alt="Image 1 description" />
                                        <input type="file" onChange={handleImageUpload1} />
                                    </div>
                                )}
                                {image2 && (
                                    <div>
                                        <img style={{ maxWidth: '64px', maxHeight: '64px' }} src={image2} alt="Image 2 description" />
                                        <input type="file" onChange={handleImageUpload2} />
                                    </div>
                                )}
                            </td>
                        ) : <></>}
                        <td className="w-3/4 p-2">
                    <textarea
                        id={field_name}
                        className="w-full h-32 p-2 border border-gray-300 rounded-md resize-none"
                        onChange={(e) => {
                            setNewFieldValue(e.target.value);
                        }}
                    >
                        {field_value}
                    </textarea>
                        </td>
                        <td><button id={field_name}
                                    onClick={() => {
                                        saveCustomField()
                                    }}
                                    className={'bg-gray-500 text-black'}>Save
                        </button></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
});

export default CustomTextField;
