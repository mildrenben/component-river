import React, { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

const windowWidth = window.innerWidth

const Item = ({
  item,
  numberInQueue,
  allItems,
  yDistanceToTop,
  Component
}) => {
  const amountOfItems = allItems.length

  const [itemWidth, setItemWidth] = useState(500)
  const measuredRef = useCallback(node => {
    if (node !== null) {
      setItemWidth(node.getBoundingClientRect().width)
    }
  })

  const isEven = numberInQueue % 2 === 0

  const ITEM_WIDTH = itemWidth
  const Y_INITIAL = isEven
    ? 40 + (Math.random() * 10)
    : 200 + (Math.random() * 10)
  const SPEED = 12
  const X_DURATION = 70 / SPEED
  const Y_DURATION = 3 / SPEED
  // How much it moves up and down on the Y axis
  const Y_VARIATION = 30

  // Total distance a testimonial needs to travel, in px
  const distanceToTravel = (windowWidth + itemWidth)
  // How many seconds it takes to travel a pixel
  const secPerPx = X_DURATION / distanceToTravel
  // The time for a testimonial to reach the left edge of the screen
  const timeToLeftEdge = secPerPx * windowWidth
  // The amount that can fit on screen at one time
  const amountOnScreenAtOneTime = windowWidth / itemWidth

  const X_GAP = 0

  const initial = {
    position: 'absolute',
    width: '500px',
    x: '100vw',
    y: yDistanceToTop + 'px'
  }

  let animate = {
    x: `-${itemWidth}px`,
    y: yDistanceToTop + Y_VARIATION + 'px',
  }

  const transition = {
    x: {
      duration: X_DURATION,
      ease: 'linear',
      delay: (timeToLeftEdge / amountOnScreenAtOneTime) * numberInQueue,
      loop: Infinity,
      // repeatDelay: (((timeToLeftEdge / amountOnScreenAtOneTime) * (amountOfHeads - 1)) + (secPerPx * itemWidth)) - X_DURATION
    },
    y: {
      duration: Y_DURATION,
      ease: 'easeInOut',
      delay: numberInQueue === 0 ? 0 : Math.random() * 3,
      yoyo: Infinity
    }
  }

  return (
    <motion.div style={initial} animate={animate} transition={transition} className='Item' ref={measuredRef}>
      {/* <Component {...item} /> */}
      FOO
    </motion.div>
  )
}

Item.propTypes = {
  item: PropTypes.any.isRequired,
  numberInQueue: PropTypes.number.isRequired,
  allItems: PropTypes.array.isRequired,
  yDistanceToTop: PropTypes.number.isRequired,
  Component: PropTypes.any.isRequired
}

export default Item