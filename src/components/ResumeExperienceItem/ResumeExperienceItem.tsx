import React from 'react'
import { makeStyles } from '@material-ui/styles'
import ExperienceDuration from './ExperienceDuration'

interface Props {
  title: string
  started: Date
  ended?: Date
  children?: React.ReactNode
}

const useStyles = makeStyles({
  root: {
    marginTop: '2rem',
    marginBottom: '2rem',
  },
  heading: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    lineHeight: 1.25,
  },
  title: {
    margin: 0,
  },
  duration: {
    textAlign: 'right',
  },
  content: {
    opacity: 0.95,
  },
})

function ResumeExperienceItem({ title, started, ended, children }: Props) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.heading}>
        <h4 className={classes.title}>{title}</h4>
        <div className={classes.duration}>
          <ExperienceDuration start={started} end={ended} />
        </div>
      </div>
      <div className={classes.content}>{children}</div>
    </div>
  )
}

export default ResumeExperienceItem
