import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { theme } from './styles'

interface Props {
  children: React.ReactElement
}

function Root({ children }: Props) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Root
