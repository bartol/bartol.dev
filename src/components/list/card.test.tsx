/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { render } from '@testing-library/react'
import { toBeInTheDocument, toHaveAttribute } from '@testing-library/jest-dom'
import Card from './card'

expect.extend({ toBeInTheDocument, toHaveAttribute })

describe('article', () => {
  // mock article
  const data = {
    title: 'Article title',
    date: 'Oct 27th, 2019',
    slug: 'article-title',
    tags: ['typescript'],
    first: false,
  }

  it('renders title', () => {
    const { getByText } = render(<Card {...data} />)

    expect(getByText(/Article title/i)).toBeInTheDocument()
  })

  it('renders date', () => {
    const { getByText } = render(<Card {...data} />)

    expect(getByText(/Oct 27th, 2019/i)).toBeInTheDocument()
  })

  it('renders image', () => {
    const { getByAltText } = render(<Card {...data} />)

    expect(getByAltText(/typescript/i)).toBeInTheDocument()
    expect(getByAltText(/typescript/i)).toHaveAttribute(
      'src',
      expect.stringContaining('typescript')
    )
  })
})
