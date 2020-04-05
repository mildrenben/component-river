import React from 'react'
import { Box, Heading } from '@chakra-ui/core'
import SyntaxHighlighter from 'react-syntax-highlighter';
import River from 'component-river'
import Layout from '../components/layout'

const BasicExampleData = [
  { label: 'a' },
  { label: 'b' },
  { label: 'c' },
  { label: 'd' },
  { label: 'e' },
  { label: 'f' },
]

const BasicExampleComponent = ({ label }) => <div style={{ width: '40px', height: '40px', background: 'powderblue' }}>{label}</div>

const BasicExample = () => (
  <Layout>
    <Box as='section' maxW={960} mt='80px' mx='auto' px='20px'>
      <Heading>Basic example</Heading>
      <SyntaxHighlighter>
        {`import React from 'react'
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
`}
      </SyntaxHighlighter>
      <Box w='500px' maxW='100%' h='160px' rounded='lg' bg='blue.100' mt='40px' b='solid 2px black' pt='20px'>
        <River
          allItems={BasicExampleData}
          reactKey='label'
          amountOfRows={2}
          Component={BasicExampleComponent}
          yDistanceBetweenRows={60}
          xDistanceBetweenItems={50}
          yVariation={10}
        />
      </Box>
    </Box>
  </Layout>
)

export default BasicExample