import React from 'react';
import styled from 'styled-components';

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

const ModalContainer = styled.div<{ $isVisible: boolean }>`
    display: ${({ $isVisible }) => ($isVisible ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
`;

const ModalContent = styled.div`
    background-color: #fff;
    border-radius: 5px;
    padding: 2rem;
    width: 30%;
    margin: 5% auto;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    z-index: 1001;
    position: relative;
`;

const CloseButton = styled.button`
    background-color: transparent;
    border: none;
    font-size: 1.5rem;
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
`;

export default function Modal({ isOpen, onClose, children }: ModalProps) {
    const handleOutsideClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <ModalContainer $isVisible={isOpen} onClick={handleOutsideClick}>
            <ModalContent>
                <CloseButton onClick={onClose}> &times; </CloseButton>
                {children}
            </ModalContent>
        </ModalContainer>
    );
}
