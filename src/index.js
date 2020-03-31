import React from 'react'
import PropTypes from 'prop-types'
import Row from './Row'

const BobbingItems = ({ allItems, amountOfRows, yDistanceBetweenRows = 50, Component }) => {
  let counter = 0
  const rows = allItems.reduce((accumulator, currentTestimonial) => {
    // If no array exists already, create one
    if (!accumulator[counter]) {
      accumulator[counter] = []
    }

    // Add current item to it's row
    accumulator[counter].push(currentTestimonial)

    // Increase/reset counter
    if (counter + 1 === amountOfRows) {
      counter = 0
    } else {
      counter++
    }
    return accumulator
  }, [])

  const rowsWithDistance = rows.map((row, idx) => ({ items: row, yDistanceToTop: idx * yDistanceBetweenRows }))

  return (
    <section className='Testimonials'>
      {
        rowsWithDistance.map(row => (
          <Row
            row={row}
            allItems={allItems}
            yDistanceBetweenRows={yDistanceBetweenRows}
            Component={Component}
            key={row.yDistanceBetweenRows}
          />
        ))
      }
    </section>
  )
}

BobbingItems.propTypes = {
  allItems: PropTypes.array.isRequired,
  amountOfRows: PropTypes.number.isRequired,
  yDistanceBetweenRows: PropTypes.number,
  Component: PropTypes.any.isRequired
}

export default BobbingItems