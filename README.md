# Component River

## Usage

`yarn add component-river framer-motion`

`import River from 'component-river'`

allItems: array of objects
Component: component
reactKey: maps to a unique key
yDistanceBetweenRows: distance between rows
yVariation: how much it moves up and down
ySpeed: how long it takes to go from top to bottom
xDistanceBetweeItems: default 0. 
xDuration: baselined at 1920
className: for motion.div container. Can be string or func with access to rowNumber and numberInQueue

Explain how it splits arrays

Explain how it loops items. 0 if not enough items

Add overflow-x: hidden to html

## Contributing

`yarn link` in this dir. Then `yarn link "component-river"` where you want to test it out.

You'll also need to [do this](https://github.com/facebook/react/issues/14257#issuecomment-595183610) for `react`, `react-dom` and `framer-motion`. 

Once these are done, you can fire it up as follows:

- `yarn start` at the top level. This will watch and rebuild changes to the component in `src` as you make them.
- `yarn start` in `/documentation-website`. You can now test your changes in the examples/documentation website and use it as a playground.


TODO
- LTR support
- Top to bottom/bottom to top support
- minus xDistanceBetween items
- Offset odd rows option

BUGS
- The first item in an odd row moves incorrectly along the x-axis slightly, unsure why