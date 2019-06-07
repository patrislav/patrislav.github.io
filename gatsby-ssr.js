/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from 'react'
import Root from './src/Root'

export function wrapRootElement({ element }) {
  return <Root>{element}</Root>
}
