import React from 'react'
import PropTypes from 'prop-types'
import Item from './Item'

const Row = ({ row, ...props }) => {
  return row.items.map(
    (item, index) => (
      <Item
        item={item}
        numberInQueue={index}
        yDistanceToTop={row.yDistanceToTop}
        key={item.key}
        {...props}
      />
    ))
}

Row.propTypes = {
  row: PropTypes.shape({
    items: PropTypes.array.isRequired,
    yDistanceToTop: PropTypes.number.isRequired
  }).isRequired
}

export default Row