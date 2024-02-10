import { FriendsListStyled } from './FriendsList.styled';
import { FriendsListItem } from './FriendsListItem';

export const FriendsList = ({ friends }) => {
  return (
    <FriendsListStyled>
      <ul>
        {friends &&
          friends.length &&
          friends.map(({ avatar, name, isOnline, id }) => (
            <FriendsListItem
              key={id}
              avatar={avatar}
              name={name}
              isOnline={isOnline}
            />
          ))}
      </ul>
    </FriendsListStyled>
  );
};
