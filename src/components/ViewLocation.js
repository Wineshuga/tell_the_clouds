import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import styles from '../styles/ViewLocation.module.css';
import nigeria from '../images/nigeria.png';

const ViewLocation = () => {
  const { name } = useParams();
  const { weather } = useSelector((store) => store.weather);

  return (
    <section>
      <div className={styles.header}>
        <Link to="/">
          <div className={styles.nav}>
            <img
              src={nigeria}
              alt="nigeria map"
              className={styles.nigeria_map}
            />
            <h1>TellTheClouds</h1>
          </div>
          {' '}
        </Link>
      </div>
      <div className={styles.weatherBox}>
        <h1>
          Weather in
          {' '}
          { name}
        </h1>
      </div>
      <section className={styles.weatherDetails}>
        <p>{weather.text}</p>
        <p>
          Temperature:
          {' '}
          {weather.minTemp}
          F
          {' '}
          -
          {' '}
          {weather.maxTemp}
          F
        </p>
        <p>{(weather.dayPrecipitation) ? 'Day Time: Expect rain' : 'Day Time: No rain'}</p>
        <p>{(weather.nightPrecipitation) ? 'Night Time: Expect rain' : 'Night Time: No rain'}</p>
      </section>
    </section>
  );
};

export default ViewLocation;
