import styled from 'styled-components';

interface CheckboxProps {
    id: string;
    label: string;
    isChecked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxContainer = styled.label`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const StyledCheckbox = styled.input`
    display: inline-block;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 0.25rem;
    border: 0.125rem solid #555;
    background-color: ${({ checked }) => (checked ? '#555' : 'white')};
    margin-right: 0.5rem;
    cursor: pointer;

    &:checked {
        background-color: #555;
    }
`;

export default function Checkbox({
    id,
    label,
    isChecked,
    onChange,
}: CheckboxProps) {
    return (
        <CheckboxContainer>
            <StyledCheckbox
                id={id}
                type="checkbox"
                checked={isChecked}
                onChange={onChange}
            />
            <span>{label}</span>
        </CheckboxContainer>
    );
}
