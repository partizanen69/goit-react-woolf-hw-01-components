import {
  FriendsListItemStyled,
  OnlineStatusStyled,
} from './FriendsListItem.styled';

export const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendsListItemStyled className="item">
      <OnlineStatusStyled className="status" $isOnline={isOnline} />
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </FriendsListItemStyled>
  );
};
