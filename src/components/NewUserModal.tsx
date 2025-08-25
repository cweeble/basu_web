import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';

import { User } from '../utils/users';

import 'react-datepicker/dist/react-datepicker.css';
import Checkbox from './Checkbox';

type NewUserModalProps = {
    isOpen: boolean;
    onClose: () => void;
//  onSave: (newUser: UserData) => void;
//  onDelete?: () => void;
//  existingEvent?: boolean; // To check if we are editing an event
//  eventData?: EventData | null;
//  currentUser: User;
};

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const ButtonContainer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: 15px;
`;

const ModalTitle = styled.h2`
    margin-top: 0;
`;

const StyledLabel = styled.label`
    font-size: 1rem;
    font-weight: bold;
    color: #333;
`;

const StyledInput = styled.input`
    padding: 0.8rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 1rem;
    width: 100%;
    box-sizing: border-box;
    margin-top: 0.5rem;
    &:focus {
        outline: none;
        border-color: #2574db;
        box-shadow: 0 0 5px rgba(37, 116, 219, 0.3);
    }
`;

export default function NewUserModal({
    isOpen,
    onClose,
//  onSave,
//  onDelete,
//  existingEvent = false,
//  eventData,
//  currentUser,
}: NewUserModalProps) {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [superAdmin, setSuperAdmin] = useState(false);
//  const [end, setEnd] = useState<Date>(new Date());
//  const [allDayStart, setAllDayStart] = useState<boolean>(false);
//  const [allDayEnd, setAllDayEnd] = useState<boolean>(false);

    const clearFieldsEvent = () => {
        setEmail('');
        setFirstName('');
        setLastName('');
        setSuperAdmin(false);
    };

    useEffect(() => {
        clearFieldsEvent();

//      if (eventData && existingEvent) {
//          setTitle(extractEventName(eventData.title) || 'Untitled Event');
//          setStart(eventData.start);
//          setEnd(eventData.end);
//          setAllDayStart(eventData.allDayStart);
//          setAllDayEnd(eventData.allDayEnd);
//      }
    }, []);//[eventData, existingEvent]);

    const handleClose = () => {
        clearFieldsEvent();
        onClose();
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

/*         onSave({
            emailAddress: email;
            firstName: firstName;
            lastName: lastName;
            superAdmin: superAdmin;
            id: eventData?.id || 0,
//          title: eventTitle,
//          start,
//          end,
//          allDayStart,
//          allDayEnd,

        });
*/
        handleClose();
    };

/*  const handleStartDateChange = (date: Date | null) => {
        if (date) {
            setStart(date);

            // Automatically adjust the end date if it's earlier than the new start date
            if (date > end) {
                setEnd(date);
            }
        } else {
            setStart(new Date()); // Default to current date
        }
    };

    const handleEndDateChange = (date: Date | null) => {
        if (date) {
            setEnd(date);
        } else {
            setEnd(new Date()); // Default to current date
        }
    };
*/
    return (
        <Modal isOpen={isOpen} onClose={handleClose}>
            <ModalTitle>
                Create New User
            </ModalTitle>
            <form onSubmit={handleSubmit}>
                <FormContainer>
                    <div>
                        <StyledLabel>First name</StyledLabel>
                        <StyledInput
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <StyledLabel>Last name</StyledLabel>
                        <StyledInput
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <StyledLabel>Email address</StyledLabel>
                        <StyledInput
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <StyledLabel>Grant SuperAdmin status</StyledLabel>
                        <Checkbox
                            id="1"
                            label=""
                            isChecked={superAdmin}
                            onChange={(e) => setSuperAdmin(e.target.checked)}
                        />
                    </div>

                    <ButtonContainer>
                        <button
                            type="submit"
                            className="button-primary"
                            style={{ width: '60%' }}
                        >
                            Submit
                        </button>
                    </ButtonContainer>
                </FormContainer>
            </form>
        </Modal>
    );
}
