import React from 'react'
import { Link } from 'gatsby'

const Footer: React.FC = () => {
  return (
    <footer>
      <a
        href='https://github.com/bartol'
        target='_blank'
        rel='nofollow noopener noreferrer'
        className='footerLink'
      >
        GitHub
      </a>
      <Link to='/legal/' className='copyright'>
        <span>© 2019 Bartol Deak.</span> <span>All rights reserved.</span>
      </Link>
      <a
        href='/rss.xml'
        target='_blank'
        rel='nofollow noopener noreferrer'
        className='footerLink'
      >
        RSS
      </a>
    </footer>
  )
}

export default Footer
