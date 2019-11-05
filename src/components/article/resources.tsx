import React from 'react'
import { ManualAutolink } from './manualAutolink'

export const Resources = ({ resources }) => {
  return (
    <div className='markdown'>
      <h3 id='resources'>
        <ManualAutolink id='resources' />
        Resources
      </h3>
      <ul>
        {resources.map((resource: Resource) => {
          const { name, url } = resource
          return (
            <li>
              <a href={url} target='_blank' rel='nofollow noopener noreferrer'>
                {name}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

interface Resource {
  name: string
  url: string
}
