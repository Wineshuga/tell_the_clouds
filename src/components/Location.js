import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from '../styles/Location.module.css';
import { fetchLocationData } from '../redux/weather/weatherSlice';

const Location = ({ name }) => {
  const dispatch = useDispatch();
  return (
    <NavLink to={`/${name}`} onClick={() => dispatch(fetchLocationData(name))}>
      <div className={styles.location}><p>{name}</p></div>
    </NavLink>
  );
};

Location.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Location;
