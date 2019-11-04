import React from 'react'
import { render } from '@testing-library/react'
import { toBeInTheDocument } from '@testing-library/jest-dom'
import Article from './article'

expect.extend({ toBeInTheDocument })

describe('article', () => {
  // mock article
  const data = {
    markdownRemark: {
      html: '<p>This is article body</p>',
      frontmatter: {
        title: 'Article title',
        date: 'Oct 27th, 2019',
        tags: ['typescript'],
        resource: [],
        changelog: [],
      },
      fields: {
        slug: 'article–title',
      },
      thumbnail: {
        thumbnailURL: '/images/article–thumbnail',
      },
    },
  }

  it('renders title', () => {
    const { getByText } = render(<Article data={data} />)

    expect(getByText(/Article title/i)).toBeInTheDocument()
  })

  it('renders body', () => {
    const { getByText } = render(<Article data={data} />)

    expect(getByText(/This is article body/i)).toBeInTheDocument()
  })

  it('renders date', () => {
    const { getByText } = render(<Article data={data} />)

    expect(getByText(/Oct 27th, 2019/i)).toBeInTheDocument()
  })
})
