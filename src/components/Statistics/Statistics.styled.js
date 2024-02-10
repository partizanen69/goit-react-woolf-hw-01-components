import styled from 'styled-components';

export const StatisticsStyled = styled.div`
  display: flex;
  justify-content: center;
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .statistics {
    display: flex;
    flex-direction: column;
    align-items: center;

    .stat-list {
      display: flex;
    }
  }
`;

export const ListItemStyled = styled.li`
  &.item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 15px;
    background-color: ${props => props.$backgroundColor};

    .label {
      padding-bottom: 5px;
      font-size: 12px;
    }

    .percentage {
      font-size: 20px;
    }
  }
`;
