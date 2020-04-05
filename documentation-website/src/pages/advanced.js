import React from 'react'
import { Heading, Box } from '@chakra-ui/core'
import River from 'component-river'
import { Men, Women } from '../components/UserAvatars'
import Layout from '../components/layout'
import SyntaxHighlighter from 'react-syntax-highlighter'
import './advanced.scss'

const DATA = [
  {
    name: 'J Bloggs',
    testimonial: 'Amazing work, highly recommend!'
  },
  {
    name: 'D Smith',
    testimonial: 'Did a great job'
  },
  {
    name: 'L Taylor',
    testimonial: 'Very quick and a free quote 👍'
  },
  {
    name: 'T Bone',
    testimonial: 'Fast workers and friendly people'
  },
  {
    name: 'T Nook',
    testimonial: 'Paid off mortgage in full 🐻'
  },
  {
    name: 'J Bloggs',
    testimonial: 'Amazing work, highly recommend!'
  },
  {
    name: 'D Smith',
    testimonial: 'Did a great job'
  },
  {
    name: 'L Taylor',
    testimonial: 'Very quick and a free quote 👍'
  },
  {
    name: 'T Bone',
    testimonial: 'Fast workers and friendly people'
  },
  {
    name: 'T Nook',
    testimonial: 'Paid off mortgage in full 🐻'
  },
  {
    name: 'J Bloggs',
    testimonial: 'Amazing work, highly recommend!'
  },
  {
    name: 'D Smith',
    testimonial: 'Did a great job'
  },
  {
    name: 'L Taylor',
    testimonial: 'Very quick and a free quote 👍'
  },
  {
    name: 'T Bone',
    testimonial: 'Fast workers and friendly people'
  },
  {
    name: 'T Nook',
    testimonial: 'Paid off mortgage in full 🐻'
  },
]

const Testimonial = ({ name, testimonial }) => {
  const randomGender = Math.round(Math.random()) ? Men : Women
  const randomNumber = Math.floor((Math.random() * 4))

  return (
    <>
      <span className='FloatingHead_avatar'>{randomGender[randomNumber]()}</span>
      <div className='FloatingHead_textWrap'>
        <div className='FloatingHead_textBackground'>
          <span className='FloatingHead_name'>{name}</span>
          <span className='FloatingHead_testimonial'>{testimonial}</span>
        </div>
      </div>
    </>
  )
}

const AdvancedExample = () => (
  <Layout>
    <Box as='section' maxW={960} mt='80px' mx='auto'>
      <Heading>Advanced example</Heading>
    </Box>
    <Box w='100%' maxW='100%' h='34em' bg='rgb(233, 243, 255)' mt='40px' pt='50px' fontSize='16px'>
      <River
        allItems={DATA}
        reactKey='name'
        Component={Testimonial}
        className='FloatingHead'
        amountOfRows={3}
        yDistanceBetweenRows={150}
        yVariation={20}
        yDuration={3}
        xDistanceBetweenItems={200}
        xDuration={20}
      />
    </Box>
    <Box as='section' maxW={960} mt='80px' mx='auto' px='20px'>
      <SyntaxHighlighter>
        {`
        const DATA = [
          {
            name: 'J Bloggs',
            testimonial: 'Amazing work, highly recommend!'
          }
          ...,
          ...,
        ]

      const Testimonial = ({ name, testimonial }) => {
        const randomGender = Math.round(Math.random()) ? Men : Women
        const randomNumber = Math.floor((Math.random() * 4))
      
        return (
          <>
            <span className='FloatingHead_avatar'>{randomGender[randomNumber]()}</span> // this selects a random avatar
            <div className='FloatingHead_textWrap'>
              <div className='FloatingHead_textBackground'>
                <span className='FloatingHead_name'>{name}</span>
                <span className='FloatingHead_testimonial'>{testimonial}</span>
              </div>
            </div>
          </>
        )
      }
      
      const AdvancedExample = () => (
        <River
          allItems={DATA}
          reactKey='name'
          Component={Testimonial}
          className='FloatingHead'
          amountOfRows={3}
          yDistanceBetweenRows={150}
          yVariation={20}
          yDuration={3}
          xDistanceBetweenItems={200}
          xDuration={20}
        />
      )
      `}
      </SyntaxHighlighter>
    </Box>
  </Layout>
)

export default AdvancedExample