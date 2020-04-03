import React from "react"
import { Button } from '@chakra-ui/core'
import './header.css'

const Header = () => (
  <header>
    <nav>
      <Button variantColor='grey' color='black' className='github'>Github</Button>
    </nav>
  </header>
)

export default Header
