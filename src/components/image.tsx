import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

interface Props {
  name: string
  env: string
}

const Image: React.FC<Props> = ({ name, env, className }) => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        nodes {
          publicURL
          name
        }
      }
    }
  `)

  const { nodes } = data.allFile

  const result = nodes.filter((node: any) => {
    return node.name === name
  })

  const url = result[0].publicURL
  const alt = `${result[0].name} icon`

  // @ts-ignore
  return (
    <img
      src={url}
      alt={alt}
      loading='lazy'
      className={`image ${env} ${className}`}
    />
  )
}

export default Image
