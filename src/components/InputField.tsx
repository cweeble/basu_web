import React from 'react';
import styled from 'styled-components';

const FieldWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 0.5rem;
`;

const Label = styled.label`
    font-weight: bold;
    margin-bottom: 0.25rem;
`;

const Field = styled.input`
    border: 1px solid #ccc;
    padding: 0.5rem;
    border-radius: 0.25rem;
    width: 15rem;

    &:focus {
        outline: none;
        border-color: #666;
    }
`;

interface InputFieldProps {
    label: string;
    type: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, type, name, value, onChange }) => {
    return (
        <FieldWrapper>
            <Label htmlFor={name}>{label}</Label>
            <Field type={type} name={name} value={value} onChange={onChange} />
        </FieldWrapper>
    );
};

export default InputField;
