/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
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

exports.onRenderBody = ({ setBodyAttributes }) => {
  setBodyAttributes({
    className: 'light',
  })
}
