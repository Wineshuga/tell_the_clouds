import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchAdminAreas, searchAreas } from '../redux/weather/weatherSlice';
import Location from './Location';

const Home = () => {
  const dispatch = useDispatch();
  const { adminAreas, filteredAreas } = useSelector((store) => store.weather);

  useEffect(() => {
    if (adminAreas.length === 0) {
      dispatch(fetchAdminAreas());
    }
  }, [adminAreas.length, dispatch]);

  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setSearch(inputValue);
    dispatch(searchAreas(inputValue));
  };

  return (
    <section>
      <header>
        <Link to="/"><h1>TellTheClouds</h1></Link>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search Location"
          value={search}
          onChange={(e) => handleChange(e)}
        />
      </header>
      {
        (filteredAreas.length > 0 ? filteredAreas : adminAreas).map((item) => (
          <Location key={item} name={item} />
        ))
      }
    </section>
  );
};

export default Home;
