import { useState } from 'react';
import './style.css';
import search from '../../assets/icons/ui/search.png';

function Search() {
  return (
    <div>
      <input type='text' placeholder='Search for a city...'/>
    </div>
  );
}

export default Search;