import React from 'react';
import PropTypes from 'prop-types';

Search.propTypes = {
  searchTerm: PropTypes.string
};

export function Search({ handleSearch }) {

  return (
    <div>
      <input name="searchInput" onChange={({target}) => handleSearch(target.value)}/>
    </div>
  );
}
