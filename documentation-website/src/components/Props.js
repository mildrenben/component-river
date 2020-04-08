import React from 'react'
import { Box, Heading } from '@chakra-ui/core'
import ReactMarkdown from 'react-markdown'

const propsMarkdown = `
| Prop                  | Required | Type             | Default | Description                                                                                                                                                                                        |
|-----------------------|:--------:|------------------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| allItems              |     ✔️    | Array of Objects |         | The items you want to flow down the river                                                                                                                                                          |
| reactKey              |     ✔️    | String           |         | Maps to a unique key in each object in allItems. Example: allItems = [{ label: 'hello'}, {label: 'world'}], label should be used as the unique key                                                 |
| Component             |     ✔️    | React Component  |         | The component to render. Each object in allItems will be passed to Component as props                                                                                                              |
| amountOfRows          |          | Number           | 1       |                                                                                                                                                                                                    |
| yDistanceBetweenRows  |          | Number (px)      | 50      | Distance between rows vertically in pixels                                                                                                                                                         |
| yVariation            |          | Number (px)      | 30      | Distance each item will move up and down in pixels                                                                                                                                                 |
| yDuration             |          | Number (s)       | 3       | How long it takes an item to go from top of curve to bottom in seconds                                                                                                                             |
| xDistanceBetweenItems |          | Number (px)      | 0       | Distance between each item horizontally in pixels                                                                                                                                                  |
| xDuration             |          | Number (s)       | 20      | How long it takes each item to move across the screen in seconds. (This amount is based on a 1920px width screen, it gets changed automatically to keep the same "speed" if the screen is smaller) |
| className             |          | String or Func   |         | A className for the container that wraps your Component. If you pass a function, that function will receive { rowNumber, numberInQueue, item } as arguments. When using a function, return a string.     |
`

const Props = () => (
  <Box px='20px' overflowX='auto'>
    <Heading>Props</Heading>
    <ReactMarkdown source={propsMarkdown} />
  </Box>
)

export default Props