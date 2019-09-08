import React from 'react'
import cn from 'classnames'
import { makeStyles } from '@material-ui/styles'
import { IoMdPin, IoMdMail } from 'react-icons/io'

interface Props {
  title: string
  subtitle: string
  location: string
  email: string
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
    paddingTop: '1.5rem',
    paddingBottom: '1.5rem',
  },
  column: {
    marginTop: '1rem',
  },
  columnBasic: {},
  columnContact: {},
  title: {
    margin: 0,
    lineHeight: 1.2,
  },
  subtitle: {
    margin: 0,
    lineHeight: 1.2,
    marginTop: '0.5rem',
  },
  contactRow: {
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    lineHeight: 1.2,
    marginTop: '0.75rem',
  },
  icon: {
    opacity: 0.5,
    marginRight: '0.5rem',
  },
})

function ResumeHeader({ title, subtitle, location, email }: Props) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={cn(classes.column, classes.columnBasic)}>
        <h1 className={classes.title}>{title}</h1>
        <p className={classes.subtitle}>{subtitle}</p>
      </div>
      <div className={cn(classes.column, classes.columnContact)}>
        <p className={classes.contactRow}>
          <IoMdPin className={classes.icon} />
          {location}
        </p>
        <p className={classes.contactRow}>
          <IoMdMail className={classes.icon} />
          {email}
        </p>
      </div>
    </div>
  )
}

export default ResumeHeader
