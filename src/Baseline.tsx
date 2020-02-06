import { makeStyles } from '@material-ui/styles'
import { Theme } from './styles'

const useStyles = makeStyles<Theme>(theme => ({
  '@global': {
    html: {
      WebkitFontSmoothing: 'antialiased', // Antialiasing.
      MozOsxFontSmoothing: 'grayscale', // Antialiasing.
      // Change from `box-sizing: content-box` so that `width`
      // is not affected by `padding` or `border`.
      boxSizing: 'border-box',
    },
    '*, *::before, *::after': {
      boxSizing: 'inherit',
    },
    body: {
      margin: 0,
      fontFamily: '"Fira Code", monospace',
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
  },
}))

function Baseline() {
  useStyles()
  return null
}

export default Baseline
