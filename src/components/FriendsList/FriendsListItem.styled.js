import styled from 'styled-components';

export const OnlineStatusStyled = styled.span`
  &.status {
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${props => (props.$isOnline ? 'green' : 'red')};
  }
`;

export const FriendsListItemStyled = styled.li`
  &.item {
    display: flex;
    border: 1px solid grey;
    border-radius: 3px;
    padding: 5px 15px;
    align-items: center;
    gap: 5px;
  }
`;
