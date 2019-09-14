/* eslint-disable no-nested-ternary */
import React, { useState } from 'react'
import Collapse from '@kunukn/react-collapse'
import Contact from './contact'
import Newsletter from './newsletter'

const Settings: React.FC = () => {
  const [openedItem, setOpenedItem] = useState(-1)

  return (
    <div className='settingsWrapper'>
      <button
        type='button'
        onClick={() => setOpenedItem(openedItem === 0 ? -1 : 0)}
      >
        Open
      </button>
      <Collapse isOpen={openedItem === 0}>
        <h3>What is this site?</h3>
        <h3>Few words about me...</h3>
      </Collapse>
      <button
        type='button'
        onClick={() => setOpenedItem(openedItem === 1 ? -1 : 1)}
      >
        Get in touch with me
      </button>
      <Collapse isOpen={openedItem === 1}>
        <Contact />
      </Collapse>
      <button
        type='button'
        onClick={() => setOpenedItem(openedItem === 2 ? -1 : 2)}
      >
        Subscribe to my weekly newsletter
      </button>
      <Collapse isOpen={openedItem === 2}>
        <Newsletter />
      </Collapse>
      <button
        type='button'
        onClick={() => setOpenedItem(openedItem === 3 ? -1 : 3)}
      >
        Open
      </button>
      <Collapse isOpen={openedItem === 3}>
        <h3>Customize your expirience</h3>
        <h3>Useful links</h3>
        <p>Roadmap for future posts</p>
        <p>What am I doing right now?</p>
      </Collapse>
    </div>
  )
}

export default Settings
