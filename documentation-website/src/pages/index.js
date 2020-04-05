import React from "react"
import River from 'component-river'
import { motion, useAnimation } from 'framer-motion'
import Layout from "../components/layout"
import { Link as ChakraLink, Button, Heading, Code, Text, Box, Badge } from '@chakra-ui/core'
import { Link as GatsbyLink } from 'gatsby'
import Props from '../components/Props'
import './index.css'

const DATA = [
  { label: '👏' },
  { label: '🍉' },
  { label: '🗿' },
  { label: '👁' },
  { label: '⚽️' },
  { label: '👋' },
  { label: '💅🏻' },
  { label: '🏝' },
  { label: '💊' },
  { label: '👳🏾' },
  { label: '💦' },
  { label: '🎧' },
  { label: '🍻' },
  { label: '👄' },
  { label: '🎾' },
  { label: '🙏' },
  { label: '🤖' },
  { label: '🌈' },
  { label: '👻' },
  { label: '🥇' },
  { label: '🛎' },
  { label: '💡' },
  { label: '💾' },
  { label: '❤️' },
]

const Emoji = ({ label }) => (
  <div className='emoji'>
    {label}
  </div>
)

const className = props => {
  if (props.numberInQueue % 2 === 0) {
    return 'z1'
  } else {
    return 'z2'
  }
}

const IndexPage = () => {
  // const controls = useAnimation()

  // const [rect, setRect] = React.useState(null)
  // const ref = React.useRef(null)


  // const end = {
  //   x: '600px',
  //   transition: { duration: 2, ease: 'linear', loop: Infinity, repeatDelay: 2 }
  // }

  // controls.start(end)
  // const foo = () => {
  //   const style = ref.current.getAttribute('style')
  //   const currentX = style.slice(style.indexOf('translateX(') + 11).split('px')[0]
  //   const amountLeftPerc = 1 - (currentX / 600)
  //   controls.start({
  //     x: '600px',
  //     transition: { duration: 2 * amountLeftPerc, ease: 'linear', loop: Infinity, repeatDelay: 2 }
  //   })
  // }
  return (
    <Layout>
      <div className='emoji-section'>
        <h1 className='title'>Component River</h1>
        <River
          allItems={DATA}
          amountOfRows={3}
          yDistanceBetweenRows={150}
          xDistanceBetweenItems={300}
          xDuration={10}
          yVariation={20}
          Component={Emoji}
          className={className}
          reactKey='label'
        />
      </div>
      <Box as='section' maxW={960} mt='40px' mx='auto' px='20px'>
        <Heading>Usage</Heading>
        <Text color='tomato'><Badge variantColor='orange' mr={5}>Warning</Badge>framer-motion is a peer dependency, you must install it if you do not already have it</Text>
        <Heading as='h3' size='md'>Install</Heading>
        <Code>yarn add component-river</Code>
        <Heading as='h3' size='md' mt='30px'>Import</Heading>
        <Code>import River from 'component-river'</Code>
      </Box>
      <Box as='section' maxW={960} mt='80px' mx='auto' px='20px'>
        <Heading>Basic Example</Heading>
        <ChakraLink as={GatsbyLink} to='/basic'><Button variantColor='blue'>Example</Button></ChakraLink>
      </Box>
      <Box as='section' maxW={960} mt='80px' mx='auto'>
        <Props />
      </Box>
      <Box as='section' maxW={960} mt='80px' mx='auto'>
        <Heading>Advanced Example</Heading>
        <ChakraLink as={GatsbyLink} to='/advanced'><Button variantColor='blue'>Example</Button></ChakraLink>
      </Box>
      <Box as='section' maxW={960} mt='80px' mx='auto'>
        <Heading>Check the code!</Heading>
        <ChakraLink href='https://github.com/mildrenben/component-river'><Button>Github</Button></ChakraLink>
      </Box>
    </Layout>
  )
}


export default IndexPage
