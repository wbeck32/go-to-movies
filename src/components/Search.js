import React from 'react';
import PropTypes from 'prop-types';

Search.propTypes = {
  category: PropTypes.string,
  value: PropTypes.string
}

export function Search({category, value}) {
  return (

    <div>'in search: ', {category}, {value}</div>

  );

}
