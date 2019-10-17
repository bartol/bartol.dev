import React from 'react'
import { ContextProvider } from './provider-composer'

export const wrapRootElement = ({ element }) => {
  return <ContextProvider>{element}</ContextProvider>
}
