import React, { useState, useContext } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import { FilterContext } from '../../state'
import Card from './card'
import NoResults from './noResults'

const List = ({ articles }: Articles) => {
  const { results, query } = useContext(FilterContext)
  const [length, setLength] = useState(0)

  return (
    <main className='flex flex-col lg:w-4/5 xl:w-5/6'>
      {results.length ? (
        <InfiniteScroll
          pageStart={0}
          loadMore={() => {
            setLength(length + 3)
          }}
          hasMore={length < articles.length}
        >
          <ul className='flex flex-wrap md:py-3 py-2 xl:px-0 lg:px-1'>
            {articles.slice(0, length).map((article, index) => {
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
        </InfiniteScroll>
      ) : null}
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
