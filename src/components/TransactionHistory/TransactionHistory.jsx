import { TransactionHistoryStyled } from './TransactionHistory.styled';
import { TransactionHistoryRow } from './TransactionHistoryRow';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryStyled>
      <table className="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items &&
            items.length &&
            items.map(({ type, amount, currency, id }, idx) => (
              <TransactionHistoryRow
                key={id}
                type={type}
                amount={amount}
                currency={currency}
                isEven={idx % 2 === 0}
              />
            ))}
        </tbody>
      </table>
    </TransactionHistoryStyled>
  );
};
