import React, { useState } from 'react'
import Collapse from '@kunukn/react-collapse'
import Layout from '../components/layout'
import BackToHome from '../components/backToHome'

export default () => {
  const [fullLicense, setFullLicense] = useState(false)
  return (
    <Layout title='Legal stuff • Bartol Deak' url='/legal/' isArticle={false}>
      <div className='infoWrapper'>
        <h1 className='legalTitle'>Let's talk legal stuff.</h1>
        <p>
          TL;DR: Everything is under MIT license so you are welcome to use
          website source code and articles freely, without restrictions.
        </p>
        <p>
          <strong>Just be sure to attribute the author (Bartol Deak).</strong>
        </p>
        <button
          type='button'
          onClick={() => setFullLicense(!fullLicense)}
          className='expandMit'
        >
          View full MIT license
        </button>
        <Collapse isOpen={fullLicense}>
          <div className='fullLicense'>
            <h2>MIT License </h2>
            <h3>Copyright (c) 2019 Bartol Deak</h3>
            <p>
              Permission is hereby granted, free of charge, to any person
              obtaining a copy of this software and associated documentation
              files (the "Software"), to deal in the Software without
              restriction, including without limitation the rights to use, copy,
              modify, merge, publish, distribute, sublicense, and/or sell copies
              of the Software, and to permit persons to whom the Software is
              furnished to do so, subject to the following conditions:
            </p>
            <p>
              The above copyright notice and this permission notice shall be
              included in all copies or substantial portions of the Software.
            </p>
            <p>
              THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
              EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
              NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
              HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
              WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
              DEALINGS IN THE SOFTWARE.
            </p>
          </div>
        </Collapse>
        <BackToHome />
      </div>
    </Layout>
  )
}
