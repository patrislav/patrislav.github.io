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
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,

      '&.light': {
        '--main-color': '255, 255, 245',
        '--text-color': '0, 0, 0',
      },

      '&.dark': {
        '--main-color': '55, 71, 79',
        '--text-color': '255, 255, 255',
      },
    },
    // Prevent Flash of Unstyled Text
    'html:not(.wf-firacode-n4-active.wf-firacode-n7-active) body': {
      fontFamily: 'courier, monospace',
    },
    'html.wf-firacode-n4-active.wf-firacode-n7-active body': {
      fontFamily: '"Fira Code", courier, monospace',
    },
  },
}))

function Baseline() {
  useStyles()
  return null
}

export default Baseline
