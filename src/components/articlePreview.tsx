import React from 'react'
import { Link } from 'gatsby'
import Image from './image'

const ArticlePreview = ({ title, date, slug, tag }: Props) => {
  return (
    <li className='previewContainer'>
      <Link to={`/${slug}/`} tabIndex={0}>
        <Image name={tag} env='preview' />
        <div>
          <h2>{title}</h2>
          <p className='date'>{date}</p>
        </div>
      </Link>
    </li>
  )
}

export default ArticlePreview

interface Props {
  title: string
  date: string
  slug: string
  tag: string
}
