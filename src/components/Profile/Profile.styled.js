import styled from 'styled-components';

export const ProfileStyled = styled.div`
  background-color: #e7ecf2;
  width: 100%;
  display: flex;
  justify-content: center;
  height: fit-content;

  ul {
    list-style-type: none;
    padding: 0;
  }

  .profile {
    background-color: #ffffff;

    .description {
      display: flex;
      align-items: center;
      flex-direction: column;

      .avatar {
        padding: 5px 0 15px 0;
      }

      p {
        padding: 0;
        margin: 0;
      }

      .name {
        font-size: 20px;
        padding: 10px 0;
      }

      .tag,
      .location {
        font-size: 16px;
        color: grey;
        padding: 5px 0;
      }
    }

    .stats {
      display: flex;
      padding: 0 10px;
      gap: 15px;

      font-size: 14px;

      li {
        display: flex;
        flex-direction: column;
        align-items: center;

        .label {
          color: grey;
          font-size: 14px;
        }

        .quantity {
          font-weight: 600;
        }
      }
    }
  }
`;
