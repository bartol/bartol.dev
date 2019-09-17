/* eslint-disable no-undef */
import { useState, useEffect } from 'react'

const getWindowDimensions = () => {
  const dimensions = {
    width: 0,
    height: 0,
  }
  if (typeof window !== 'undefined') {
    const { innerWidth: width, innerHeight: height } = window
    dimensions.width = width
    dimensions.height = height
  }
  return dimensions
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}
