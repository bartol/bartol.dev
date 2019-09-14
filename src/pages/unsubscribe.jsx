import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import axios from 'axios'
import { navigate } from '@reach/router'
import Layout from '../components/layout'

const unsubscribe = ({ location }) => {
  const [toast, setToast] = useState('Sending...')

  useEffect(() => {
    const data = queryString.parse(location.search.slice(1))

    navigate(location.pathname, {
      replace: true
    })

    axios({
      method: 'post',
      url: 'https://api.bartol.dev/newsletter/unsubscribe',
      data
    })
      .then(() => setToast('Successfully unsubscribed.'))
      .catch(() => setToast('There was a problem.'))
  }, [])

  return (
    <Layout
      title='Unsubscribe • Bartol Deak'
      url='/unsubscribe/'
      isArticle={false}
    >
      <h1>Unsubscribe</h1>
      {toast}
    </Layout>
  )
}

export default unsubscribe
