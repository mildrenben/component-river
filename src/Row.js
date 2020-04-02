import React from 'react'
import PropTypes from 'prop-types'
import Item from './Item'

const Row = ({ row, reactKey, ...props }) => {
  return row.items.map(
    (item, index) => (
      <Item
        item={item}
        numberInQueue={index}
        yDistanceToTop={row.yDistanceToTop}
        key={item[reactKey]}
        row={row}
        {...props}
      />
    ))
}

Row.propTypes = {
  row: PropTypes.shape({
    items: PropTypes.array.isRequired,
    yDistanceToTop: PropTypes.number.isRequired
  }).isRequired,
  reactKey: PropTypes.string.isRequired
}

export default Row