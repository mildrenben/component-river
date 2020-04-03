import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import Row from './Row'

const River = ({ allItems, amountOfRows = 1, yDistanceBetweenRows = 50, ...props }) => {
  let counter = 0
  const rows = allItems.reduce((accumulator, currentItem) => {
    // If no array exists already, create one
    if (!accumulator[counter]) {
      accumulator[counter] = []
    }

    // Add current item to it's row
    accumulator[counter].push(currentItem)

    // Increase/reset counter
    if (counter + 1 === amountOfRows) {
      counter = 0
    } else {
      counter++
    }
    return accumulator
  }, [])

  const rowsWithDistance = rows.map((row, idx) => ({ items: row, yDistanceToTop: idx * yDistanceBetweenRows }))

  // Element width
  const [itemWidth, setItemWidth] = useState(null)
  const measuredRef = useCallback(node => {
    if (node !== null) {
      setItemWidth(node.getBoundingClientRect().width)
    }
  })

  return (
    <section style={{ width: '100%', height: '100%', overflow: 'hidden', position: 'relative' }} ref={measuredRef}>
      {
        rowsWithDistance.map((row, index) => (
          <Row
            row={row}
            yDistanceBetweenRows={yDistanceBetweenRows}
            key={row.items[0][props.reactKey]}
            rowNumber={index}
            containerWidth={itemWidth}
            {...props}
          />
        ))
      }
    </section>
  )
}

River.propTypes = {
  allItems: PropTypes.array.isRequired,
  reactKey: PropTypes.string.isRequired,
  Component: PropTypes.any.isRequired,
  amountOfRows: PropTypes.number,
  yDistanceBetweenRows: PropTypes.number,
}

export default River