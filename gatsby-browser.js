/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react'
import Root from './src/Root'

export function wrapRootElement({ element }) {
  return <Root>{element}</Root>
}
