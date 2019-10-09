import React from 'react'
import Card from './card'

const List = ({ articles }: Article[]) => {
  return (
    <ul className='flex flex-wrap md:py-3 py-2 xl:px-0 lg:px-1'>
      {articles.map((article, index) => {
        const { id, frontmatter, fields } = article
        const { title, date, tags } = frontmatter
        const { slug } = fields
        return (
          <Card
            id={id}
            title={title}
            date={date}
            slug={slug}
            imageName={tags[0]}
            first={index === 0}
            key={id}
          />
        )
      })}
    </ul>
  )
}

export default List

interface Article {
  id: string
  frontmatter: {
    title: string
    date: string
    tags: string[]
  }
  fields: {
    slug: string
  }
}
