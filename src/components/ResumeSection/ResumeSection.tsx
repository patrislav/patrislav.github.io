import React from 'react'
import { makeStyles } from '@material-ui/styles'

interface Props {
  title: string
  children: React.ReactNode
}

const useStyles = makeStyles({
  root: {},
  title: {
    paddingBottom: '0.4rem',
    borderBottom: '1px solid #aaa',
  },
  content: {
    marginTop: '2rem',
    marginBottom: '2rem',
  },
})

function ResumeSection({ title, children }: Props) {
  const classes = useStyles()
  return (
    <section className={classes.root}>
      <h2 className={classes.title}>{title}</h2>
      <div className={classes.content}>{children}</div>
    </section>
  )
}

export default ResumeSection
