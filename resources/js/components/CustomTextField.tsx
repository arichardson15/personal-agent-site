import React, {forwardRef, HTMLAttributes, useState} from 'react';
import axios from "axios";

interface CustomTextFieldProps {
    field_name: string;
    field_value: string;
    table_name: string;
    id: number;
    customFieldName: boolean;
    section?: string;
}
let CustomTextField = forwardRef<HTMLDivElement, CustomTextFieldProps>((props, ref) => {
    let {
        table_name,
        field_value,
        field_name,
        id,
        customFieldName,
        section
    } = props;

    const [newFieldValue, setNewFieldValue] = useState(field_value);
    const [newFieldName, setNewFieldName] = useState(field_name);
    const [alertMessage, setAlertMessage] = useState('');

    const saveCustomField = () => {
        const data = {
           newFieldName:  newFieldName,
            newFieldValue: newFieldValue,
            table_name: table_name,
            id: id
        }
        axios.post('/save-field', data)
            .then(response => {
                setAlertMessage('Value saved successfully');

            })
            .catch(error => {
            });
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
