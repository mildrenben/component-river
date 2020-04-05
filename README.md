# Component River

## Examples and documentation site

TODO: Add docs site when on github pages

TODO: Add "pause" function and document. Add to advanced example

## Usage

WARNING: `framer-motion` is a peer dependency and must be installed if you do not already have it

Install:
`yarn add component-river`

Import:
`import River from 'component-river'`

Add a height and width to your containing element. The items are positioned absolutely (with overflow hidden!), so the container needs a width and height.

## Basic Example

```javascript
import React from 'react'
import River from 'component-river'

const BasicExampleData = [
  { label: 'a' },
  { label: 'b' },
  { label: 'c' },
  { label: 'd' },
  { label: 'e' },
  { label: 'f' },
]

const BasicExampleComponent = ({ label }) => <div>{label}</div>

<River
  allItems={BasicExampleData}
  reactKey='label'
  amountOfRows={2}
  Component={BasicExampleComponent}
  yDistanceBetweenRows={60}
  xDistanceBetweenItems={50}
  yVariation={10}
/>
```

## Props

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
| className             |          | String or Func   |         | A className for the container that wraps your Component. If you pass a function, that function will receive { rowNumber, numberInQueue } as arguments. When using a function, return a string.     |

## How it splits your items

The array of items you pass is split up into rows. It divides them equally across rows as if it were dealing out playing cards. It does not split the deck in half and give the first half to row 1 and then the second half to row 2.

It does this so that when you're calling API data and you get an array of items in chronological order, the most recent items appear furthest left.

For example:

```javascript
  const DATA = [{ key: 1 }, { key: 2 }, { key: 3 }...]
```
Given 3 rows, the above `DATA` becomes this:
```javascript
  1    4    7
    2   5     8
  3    6    9
```

## How it loops

Component river will automatically loop through your items and each item will "wait" until it's their time to restart their loop. These times change depending on the screen width, so it calculates these times based on `window.innerWidth`.

If there are not enough items to keep a consistent stream of items, the items will not wait to restart their loop to try and minimise any gap between the "end" of row and the "start".

## Contributing

`yarn link` in this dir. Then `yarn link "component-river"` where you want to test it out.

You'll also need to [do this](https://github.com/facebook/react/issues/14257#issuecomment-595183610) for `react`, `react-dom` and `framer-motion`. 

Once these are done, you can fire it up as follows:

- `yarn start` at the top level. This will watch and rebuild changes to the component in `src` as you make them.
- `yarn start` in `/documentation-website`. You can now test your changes in the examples/documentation website and use it as a playground.

### Todo
- LTR support
- Top to bottom/bottom to top support
- minus xDistanceBetweenItems items to have some 'overlap'
- Offset odd rows prop option (ability to turn it off altogether)

### Known bugs
- The first item in an odd row moves incorrectly along the x-axis slightly, unsure why