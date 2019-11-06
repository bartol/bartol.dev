import React, { useContext } from 'react'
import { FilterContext } from '../../state'
import Card from './card'
import NoResults from './noResults'

const List = ({ articles }: Articles) => {
  const { results, query } = useContext(FilterContext)

  return (
    <main className='flex flex-col lg:w-4/5 xl:w-5/6'>
      <ul className='flex flex-wrap md:py-3 py-2 xl:px-0 lg:px-1'>
        {articles.map((article, index) => {
          const { id, frontmatter, fields } = article.item || article
          const { title, date, tags } = frontmatter
          const { slug } = fields
          return (
            <Card
              id={id}
              title={title}
              date={date}
              slug={slug}
              tags={tags}
              first={index === 0}
              key={id}
            />
          )
        })}
      </ul>
      {!results.length && query ? <NoResults /> : null}
    </main>
  )
}

export default List

interface Articles {
  articles: Article[]
}

interface Article {
  item: Article
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
