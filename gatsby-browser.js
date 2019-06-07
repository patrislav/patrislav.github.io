/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

const React = require('react')
const Root = require('./src/Root').default
const Baseline = require('./src/Baseline').default

exports.wrapRootElement = ({ element }) => (
  <Root>{element}</Root>
)

exports.wrapPageElement = ({ element }) => (
  <React.Fragment>
    <Baseline />
    {element}
  </React.Fragment>
)
