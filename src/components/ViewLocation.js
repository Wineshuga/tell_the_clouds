import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import styles from '../styles/ViewLocation.module.css';
import nigeria from '../images/nigeria.png';
import { fetchLocationData } from '../redux/weather/weatherSlice';

const ViewLocation = () => {
  const { name } = useParams();
  const { weather } = useSelector((store) => store.weather);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLocationData(name));
  });

  return (
    <section>
      <div className={styles.header}>
        <div className={styles.nav}>
          <img
            src={nigeria}
            alt="nigeria map"
            className={styles.nigeria_map}
          />
          <h1>TellTheClouds</h1>
        </div>
        {' '}
        <Link to="/">
          <h2> ← Back </h2>
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
