import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

const ViewLocation = () => {
  const { name } = useParams();
  const { weather } = useSelector((store) => store.weather);

  return (
    <section>
      <Link to="/"><h1>TellTheClouds</h1></Link>
      <h1>
        Weather in
        {' '}
        { name}
      </h1>
      <section>
        <p>{weather.text}</p>
        <p>
          Temperature:
          {' '}
          {weather.minTemp}
          {' '}
          -
          {' '}
          {weather.maxTemp}
        </p>
        <p>{(weather.dayPrecipitation) ? 'Day Time: Expect rain' : 'Day Time: No rain'}</p>
        <p>{(weather.nightPrecipitation) ? 'Night Time: Expect rain' : 'Night Time: No rain'}</p>
      </section>
    </section>
  );
};

export default ViewLocation;
