import React from 'react'
import Helmet from 'react-helmet'
import { ThemeProvider } from '@material-ui/styles'
import { theme } from './styles'

interface Props {
  children: React.ReactElement
}

const themeScript = `
  (function(){
    function setTheme(theme) {
      const cls = document.body.classList
      cls.remove('dark', 'light')
      cls.add(theme)
    }
    function setPreferredTheme(e) {
      if (e.matches) setTheme('dark')
      else setTheme('light')
    }
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')
    prefersDark.addListener(setPreferredTheme)
    setPreferredTheme(prefersDark)
  })()
`

function Root({ children }: Props) {
  return (
    <>
      <Helmet>
        <script type="text/javascript">{themeScript}</script>
      </Helmet>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  )
}

export default Root
