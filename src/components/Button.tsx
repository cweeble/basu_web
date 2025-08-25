import styled from 'styled-components';
import { colors } from '../styles/theme';

const StyledButton = styled.button`
    background-color: ${colors.uplandBlue};
    color: #fff;
    font-size: 1rem;
    padding: 0.75rem 1.7rem;
    margin: 0.5rem 0 0.5rem 0;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
`;

interface ButtonProps {
    type: 'button' | 'submit' | 'reset' | undefined;
    label: string;
}

export default function Button({
    type,
    label,
}: ButtonProps): React.ReactElement {
    return <StyledButton type={type}>{label}</StyledButton>;
}
