import React from 'react'
import { Link } from 'gatsby'
import { ArrowLeft } from 'react-feather'

const BackToAll: React.FC = () => {
  return (
    <Link to='/' className='backToAll'>
      <ArrowLeft size={20} />
      Back to all articles
    </Link>
  )
}

export default BackToAll
