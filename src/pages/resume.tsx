import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Helmet } from 'react-helmet'
import ResumeExperienceItem from '../components/ResumeExperienceItem'
import ResumeSection from '../components/ResumeSection'
import TechLogo from '../components/TechLogo'
import ResumeHeader from '../components/ResumeHeader'

const useStyles = makeStyles({
  root: {
    maxWidth: '60rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    lineHeight: 1.75,
    '@media screen and (min-width: 40em)': {
      paddingLeft: '1.5rem',
      paddingRight: '1.5rem',
    },
  },
  content: {},
  contentLeft: {},
  contentRight: {},
  logoList: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
})

function ResumePage() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Helmet>
        <title>Patryk Kalinowski Resume</title>
      </Helmet>
      <ResumeHeader
        title="Patryk Kalinowski"
        subtitle="Software developer"
        location="Saint Petersburg, Russia"
        email="patryk@kalinowski.dev"
      />
      <div className={classes.content}>
        <div className={classes.contentLeft}>
          <ResumeSection title="Experience">
            <ResumeExperienceItem
              title="Lasting Dynamics S.r.l."
              started={new Date(2018, 8)}
            >
              <p>
                <strong>React</strong> and <strong>Node.js</strong> project
                management and development of multiple applications. More
                recently systems management (cloud infrastructure,{' '}
                <strong>Kubernetes</strong> clusters) and <strong>Go</strong>{' '}
                microservice development.
              </p>
            </ResumeExperienceItem>
            <ResumeExperienceItem
              title="Lumesse Ltd."
              started={new Date(2017, 10)}
              ended={new Date(2018, 5)}
            >
              <p>
                <strong>React</strong> consultation and development of a complex
                responsive single page application.
              </p>
            </ResumeExperienceItem>
          </ResumeSection>
          <ResumeSection title="Skills">
            <div className={classes.logoList}>
              <TechLogo tech="Go" />
              <TechLogo tech="Kubernetes" />
              <TechLogo tech="React" />
              <TechLogo tech="TypeScript" />
            </div>
          </ResumeSection>
        </div>
        <div className={classes.contentRight} />
      </div>
    </div>
  )
}

export default ResumePage
