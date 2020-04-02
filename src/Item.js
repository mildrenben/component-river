import React, { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

const windowWidth = window.innerWidth
const BASELINE_WINDOW_WIDTH = 1920

const Item = ({
  item,
  numberInQueue,
  row,
  yDistanceToTop,
  yVariation = 30,
  yDuration = 3,
  xDuration = 20,
  xDistanceBetweenItems = 0,
  rowNumber,
  Component
}) => {
  // Element width
  const [itemWidth, setItemWidth] = useState(500)
  const measuredRef = useCallback(node => {
    if (node !== null) {
      setItemWidth(node.getBoundingClientRect().width)
    }
  })
  // Element width including xDistanceBetweenItems
  const itemWithGapWidth = itemWidth + xDistanceBetweenItems

  // Is row on an even number
  const isEvenRow = rowNumber % 2 === 0

  // Total distance a testimonial needs to travel, in px
  const distanceToTravel = (windowWidth + itemWidth + (itemWithGapWidth / 2) + (xDistanceBetweenItems / 2))

  // Speed modifier
  const SPEED = 1
  // Time it takes to complete 1 loop on the x axis
  const X_DURATION = (distanceToTravel / BASELINE_WINDOW_WIDTH) * (xDuration / SPEED)
  // Time it takes to complete 1 loop on the y axis
  const Y_DURATION = yDuration / SPEED


  // How many seconds it takes to travel a pixel
  const secPerPx = X_DURATION / distanceToTravel

  const initial = {
    position: 'absolute',
    width: '500px',
    // change the "start" point depending on whether it's odd/even
    // odd rows start further to the right to offset the entire row slightly
    x: `calc(100vw + ${isEvenRow ? 0 : (itemWidth / 2) + (xDistanceBetweenItems / 2)}px)`,
    y: yDistanceToTop + 'px',
  }

  let animate = {
    // change the "end" point depending on whether it's odd/even row
    // odd rows "end" point is closer as they start an equal distance further away
    x: `-${itemWidth + (isEvenRow ? (itemWidth / 2) + (xDistanceBetweenItems / 2) : 0)}px`,
    y: yDistanceToTop + yVariation + 'px',
  }

  const repeatDelay = (((secPerPx * itemWithGapWidth) * row.items.length) - X_DURATION)

  const transition = {
    x: {
      duration: X_DURATION,
      ease: 'linear',
      delay: (secPerPx * itemWithGapWidth) * numberInQueue,
      loop: Infinity,
      repeatDelay: repeatDelay < 0 ? 0 : repeatDelay
    },
    y: {
      duration: Y_DURATION,
      ease: 'easeInOut',
      delay: (Math.random() * (yDuration / 2)),
      yoyo: Infinity
    }
  }

  return (
    <motion.div style={initial} animate={animate} transition={transition} className='Item' ref={measuredRef}>
      <Component {...item} />
    </motion.div>
  )
}

Item.propTypes = {
  item: PropTypes.any.isRequired,
  numberInQueue: PropTypes.number.isRequired,
  rowNumber: PropTypes.number.isRequired,
  row: PropTypes.object.isRequired,
  yDistanceToTop: PropTypes.number.isRequired,
  yVariation: PropTypes.number,
  yDuration: PropTypes.number,
  Component: PropTypes.any.isRequired,
}

export default Item