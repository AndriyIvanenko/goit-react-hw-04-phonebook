import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #000;
  border-radius: 2px;
  width: 270px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
`;

export const Input = styled.input`
  margin-bottom: 5px;
`;

export const Button = styled.button`
  width: 100px;
  font-size: 12px;
  margin-top: 20px;
  &:hover {
    cursor: pointer;
  }
`;
