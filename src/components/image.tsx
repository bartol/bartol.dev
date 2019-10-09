import React from 'react'

interface Props {
  name: string
  env: string
}

const Image: React.FC<Props> = ({ name, env, className }) => {
  return (
    <img
      src={`/images/${name}.svg`}
      alt={`${name} icon`}
      loading='lazy'
      className={`image ${env} ${className}`}
    />
  )
}

export default Image
