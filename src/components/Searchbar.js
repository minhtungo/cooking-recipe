import './Searchbar.css';

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Searchbar = () => {
  const history = useHistory();
  const [term, setTerm] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search?q=${term}`);
  };
  return (
    <div className='searchbar'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='search'>Search:</label>
        <input
          type='text'
          id='search'
          onChange={(e) => setTerm(e.target.value)}
          required
        />
      </form>
    </div>
  );
};

export default Searchbar;
