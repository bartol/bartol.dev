import React from 'react'
import { FilterProvider } from './filter'

const ProviderComposer = ({ contexts, children }) => {
  return contexts.reduceRight(
    (kids, parent) =>
      React.cloneElement(parent, {
        children: kids,
      }),
    children
  )
}

export const ContextProvider = ({ children }) => {
  return (
    <ProviderComposer contexts={[<FilterProvider key='filter' />]}>
      {children}
    </ProviderComposer>
  )
}
