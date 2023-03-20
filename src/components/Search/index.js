import { useState } from 'react';
import './style.css';
import search from '../../assets/icons/ui/search.png';

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      onSearch(searchTerm);
      setSearchTerm('');
    }
  };

  return (
    <div>
      <input type='text' placeholder='Search for a city...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onKeyPress={handleSearch}/>
    </div>
  );
}

export default Search;