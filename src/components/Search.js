import React from 'react';
import PropTypes from 'prop-types';

Search.propTypes = {
  searchTerm: PropTypes.string
};

export function Search({ onChange }) {
  // console.log(searchTerm, typeof SearchTerm)

  return (
    <div>
      <input name="searchInput" onChange={({target}) => onChange(target.value)}/>
    </div>
  );
}
