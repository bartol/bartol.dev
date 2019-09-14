import React from 'react'
import { Link } from 'gatsby'
import { ArrowLeft } from 'react-feather'

const BackToHome: React.FC = () => {
  return (
    <Link to='/' className='backToHome'>
      <ArrowLeft size={20} />
      Back to home
    </Link>
  )
}

export default BackToHome
