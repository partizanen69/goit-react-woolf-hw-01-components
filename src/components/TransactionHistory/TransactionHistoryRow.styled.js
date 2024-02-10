import styled from 'styled-components';

export const TransactionHistoryRowStyled = styled.tr`
  background-color: ${props => (props.$isEven ? 'inherit' : '#ECF1F4')};

  td {
    text-align: center;
  }

  .type {
    text-transform: capitalize;
  }
`;
