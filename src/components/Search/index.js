import { useState } from 'react';
import './style.css';
import search from '../../assets/icons/ui/search.png';

function Search({ onSearch, locations }) {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async () => {
    if (!query) return;
    setLoading(true);
    setError(false);

    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=cbfe29932a8bb4e7f20315babd8f135b`);
      if (response.ok) {
        const data = await response.json();
        const location = {
          co: data.sys.country,
          loc: data.name,
          time: data.timezone,
          temp: data.main.temp,
          desc: data.weather[0].main,
        };
        onSearch(location);
        setQuery('');
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
    setError(false);
  };

  return (
    <div className={`search-container${error ? ' search-container-error' : ''}`}>
      <input type='text' placeholder='Search for a city...' value={query} onChange={handleQueryChange} onKeyPress={handleKeyPress} />
    </div>
  );
}

export default Search;