import styled from 'styled-components';

export const TransactionHistoryStyled = styled.div`
  display: flex;
  justify-content: center;

  table {
    th,
    td {
      padding: 7px 20px;
    }

    thead {
      tr {
        th {
          background-color: #01bdd5;
          text-transform: uppercase;
        }
      }
    }
  }
`;
