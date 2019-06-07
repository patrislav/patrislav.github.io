import React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  root: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    fontSize: 64,
    fontWeight: 300,
  },
})

function IndexPage() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <h1 className={classes.h1}>kalinowski.dev</h1>
    </div>
  )
}

export default IndexPage
