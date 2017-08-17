import React from 'react';
import PropTypes from 'prop-types';

Search.propTypes = {
  searchTerm: PropTypes.string
};

export function Search({ onSearch }) {

  return (
    <div>
      <input name="searchInput" onChange={({target}) => onSearch(target.value)}/>

    </div>
  );
}
