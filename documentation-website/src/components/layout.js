import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import { ThemeProvider, theme } from '@chakra-ui/core'
import { Button, Grid } from "@chakra-ui/core";
import "./layout.css"

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
