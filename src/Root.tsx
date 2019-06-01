import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { theme } from './styles'
import Baseline from './Baseline'

interface Props {
  children: React.ReactElement
}

function Root({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Baseline />
        {children}
      </React.Fragment>
    </ThemeProvider>
  )
}

export default Root
