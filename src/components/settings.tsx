/* eslint-disable no-nested-ternary */
import React, { useState } from 'react'
import { Link } from 'gatsby'
import Collapse from '@kunukn/react-collapse'
import Contact from './contact'
import Newsletter from './newsletter'

const Settings: React.FC = () => {
  const [openedItem, setOpenedItem] = useState(-1)

  const MAIN_COLOR = 'hsla(190, 80%, 50%, 1)'
  const PARAMETERS_COLOR = '#8c8c8c'

  return (
    <div className='settingsWrapper'>
      <button
        type='button'
        onClick={() => setOpenedItem(openedItem === 0 ? -1 : 0)}
        className='settingsSection'
        style={{
          borderColor: openedItem === 0 ? MAIN_COLOR : PARAMETERS_COLOR,
        }}
      >
        Interested in me or this site?
      </button>
      <Collapse isOpen={openedItem === 0}>
        <div className='settingsSectionWrapper'>
          <Link to='/what/' className='link'>
            What is this site?
          </Link>
          <br />
          <Link to='/about/' className='link'>
            Few words about me...
          </Link>
          <br />
          <Link to='/now/' className='link'>
            What am I doing right now?
          </Link>
          <br />
          <Link to='/roadmap/' className='link'>
            Roadmap for future posts
          </Link>
        </div>
      </Collapse>

      <button
        type='button'
        onClick={() => setOpenedItem(openedItem === 1 ? -1 : 1)}
        className='settingsSection'
        style={{
          borderColor: openedItem === 1 ? MAIN_COLOR : PARAMETERS_COLOR,
        }}
      >
        Get in touch with me
      </button>
      <Collapse isOpen={openedItem === 1}>
        <div className='settingsSectionWrapper'>
          <Contact />
        </div>
      </Collapse>

      <button
        type='button'
        onClick={() => setOpenedItem(openedItem === 2 ? -1 : 2)}
        className='settingsSection'
        style={{
          borderColor: openedItem === 2 ? MAIN_COLOR : PARAMETERS_COLOR,
        }}
      >
        Subscribe to my weekly newsletter
      </button>
      <Collapse isOpen={openedItem === 2}>
        <div className='settingsSectionWrapper'>
          <Newsletter />
        </div>
      </Collapse>

      {/* <button
        type='button'
        onClick={() => setOpenedItem(openedItem === 3 ? -1 : 3)}
      >
        Customize your expirience
      </button>
      <Collapse isOpen={openedItem === 3}>
        // dark mode toggle, google analytics and sentry opt out...
      </Collapse> */}
    </div>
  )
}

export default Settings
