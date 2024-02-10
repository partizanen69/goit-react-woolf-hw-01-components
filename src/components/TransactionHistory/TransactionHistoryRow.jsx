import { TransactionHistoryRowStyled } from './TransactionHistoryRow.styled';

export const TransactionHistoryRow = ({ type, amount, currency, isEven }) => {
  return (
    <TransactionHistoryRowStyled $isEven={isEven}>
      <td className="type">{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </TransactionHistoryRowStyled>
  );
};
