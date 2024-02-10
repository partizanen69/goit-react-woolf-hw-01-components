import { ListItemStyled, StatisticsStyled } from './Statistics.styled';

export const Statistics = ({ title = undefined, stats }) => {
  const generateColor = () => {
    const colors = ['#51C3F5', '#A13FEF', '#E54C64', '#21B8C5'];
    const idx = Math.floor(Math.random() * 3);
    return colors[idx];
  };

  return (
    <StatisticsStyled>
      <section className="statistics">
        {title && <h2 className="title">{title}</h2>}

        {stats.length && (
          <ul className="stat-list">
            {stats.map(({ label, percentage, id }) => (
              <ListItemStyled
                key={id}
                className="item"
                $backgroundColor={generateColor()}
              >
                <span className="label">{label}</span>
                <span className="percentage">{percentage}%</span>
              </ListItemStyled>
            ))}
          </ul>
        )}
      </section>
    </StatisticsStyled>
  );
};
