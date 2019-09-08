import React from 'react'
import { makeStyles } from '@material-ui/styles'

import logoGolang from './assets/golang.100px.png'
import logoKubernetes from './assets/kubernetes.100px.png'
import logoReact from './assets/react.100px.png'
import logoTypeScript from './assets/typescript.100px.png'

type Tech = 'Go' | 'React' | 'TypeScript' | 'Kubernetes'

interface Props {
  tech: Tech
}

const useStyles = makeStyles({
  root: {},
  image: {
    width: 'auto',
    height: 96,
  },
})

function logoSource(tech: Tech) {
  switch (tech) {
    case 'Go':
      return logoGolang
    case 'React':
      return logoReact
    case 'Kubernetes':
      return logoKubernetes
    case 'TypeScript':
      return logoTypeScript
  }
}

function TechLogo({ tech }: Props) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <img src={logoSource(tech)} className={classes.image} title={tech} />
    </div>
  )
}

export default TechLogo
