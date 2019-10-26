import * as React from 'react'
import { render } from '@testing-library/react'
import Search from './search'

test('search works', () => {
  const { debug } = render(<Search />)
  debug()
})
