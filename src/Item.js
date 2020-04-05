import React, { useState, useCallback, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import PropTypes from 'prop-types'

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
  className,
  Component,
  containerWidth
}) => {
  // Window width
  let windowWidth = 0
  const BASELINE_WINDOW_WIDTH = 1920
  useEffect(() => {
    windowWidth = window.innerWidth
  }, [])

  // Element width
  const [itemWidth, setItemWidth] = useState(null)
  const measuredRef = useCallback(node => {
    if (node !== null) {
      setItemWidth(node.getBoundingClientRect().width)
    }
  })

  // Default to window width
  containerWidth = containerWidth || windowWidth

  // Element width including xDistanceBetweenItems
  const itemWithGapWidth = itemWidth + xDistanceBetweenItems

  // Is row on an even number
  const isEvenRow = rowNumber % 2 === 0

  // Total distance a testimonial needs to travel, in px
  const distanceToTravel = (containerWidth + itemWidth + (itemWithGapWidth / 2) + (xDistanceBetweenItems / 2))

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
    // change the "start" point depending on whether it's odd/even
    // odd rows start further to the right to offset the entire row slightly
    x: `calc(${containerWidth}px + ${isEvenRow ? 0 : itemWithGapWidth / 2}px)`,
    y: yDistanceToTop + 'px',
  }

  let animate = {
    // change the "end" point depending on whether it's odd/even row
    // odd rows "end" point is closer as they start an equal distance further away
    x: `-${itemWidth + (isEvenRow ? itemWithGapWidth / 2 : 0)}px`,
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

  let containerClassName
  if (typeof className === 'string') {
    containerClassName = className
  } else if (typeof className === 'function') {
    containerClassName = className({ rowNumber, numberInQueue })
  }

  return (
    <motion.div
      style={initial}
      animate={animate}
      transition={transition}
      className={className ? containerClassName : null}
      ref={measuredRef}
    >
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
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  containerWidth: PropTypes.number
}

export default Item