import React from 'react'
import { Edit } from 'react-feather'

interface Props {
  link: string
}

const EditArticle: React.FC<Props> = ({ link }) => {
  return (
    <a
      href={`https://github.com/bartol/bartol.dev/edit/master/${link}`}
      target='_blank'
      rel='nofollow noopener noreferrer'
      className='edit'
    >
      <Edit size={16} />
      Noticed typo or wrong info? Edit article.
    </a>
  )
}

export default EditArticle
