import styled from 'styled-components';

export const Contact = styled.div`
  display: flex;
  align-items: center;
`;

export const Name = styled.span`
  width: 130px;
`;

export const Button = styled.button`
  margin-left: 20px;
  font-size: 11px;
  padding: 1px;
  padding-left: 5px;
  padding-right: 5px;
  &:hover {
    cursor: pointer;
  }
`;
