import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from '../styles/Location.module.css';

const Location = ({ name }) => (
  <NavLink to={`/${name}`}>
    <div className={styles.location}><p>{name}</p></div>
  </NavLink>
);

Location.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Location;
