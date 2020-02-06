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
    // prevent Flash Of Unstyled Text
    '.wf-loading *': {
      color: 'rgba(0,0,0,0) !important',
    },
    body: {
      margin: 0,
      fontFamily: '"Fira Code", monospace',
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,

      '&.light': {
        '--main-color': '255, 255, 234',
        '--text-color': '0, 0, 0',
      },

      '&.dark': {
        '--main-color': '55, 71, 79',
        '--text-color': '255, 255, 255',
      },
    },
  },
}))

function Baseline() {
  useStyles()
  return null
}

export default Baseline
