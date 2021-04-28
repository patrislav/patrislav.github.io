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
        location="Poznań, Poland"
        email="patryk@kalinowski.dev"
      />
      <div className={classes.content}>
        <div className={classes.contentLeft}>
          <ResumeSection title="Experience">
            <ResumeExperienceItem
              title="Cycloid - DevOps Framework"
              started={new Date(2020, 4)}
            >

            </ResumeExperienceItem>
            <ResumeExperienceItem
              title="Lasting Dynamics SRL"
              started={new Date(2017, 8)}
              ended={new Date(2020, 4)}
            >
              <ul>
                <li>
                  UI development using <strong>React</strong> written in{' '}
                  <strong>TypeScript</strong>
                </li>
                <li>
                  Development of back-end microservices using{' '}
                  <strong>Go</strong> and <strong>Node.js/TypeScript</strong>
                </li>
                <li>
                  Cloud infrastructure management and handling of production{' '}
                  <strong>Kubernetes</strong> clusters
                </li>
                <li>
                  Management of CI/CD pipelines using tools such as Jenkins
                </li>
                <li>
                  Leading a team of both front-end and back-end developers
                  working on a complex project
                </li>
              </ul>
            </ResumeExperienceItem>
            <ResumeExperienceItem
              title="Lumesse Ltd."
              started={new Date(2016, 10)}
              ended={new Date(2017, 5)}
            >
              <p>
                <strong>React</strong> consultation and development of a complex
                responsive single page application.
              </p>
            </ResumeExperienceItem>
          </ResumeSection>
          {/* <ResumeSection title="Skills">
            <div className={classes.logoList}>
              <TechLogo tech="Go" />
              <TechLogo tech="Kubernetes" />
              <TechLogo tech="React" />
              <TechLogo tech="TypeScript" />
            </div>
          </ResumeSection> */}
        </div>
        <div className={classes.contentRight} />
      </div>
    </div>
  )
}

export default ResumePage
