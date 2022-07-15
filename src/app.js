import Header from './components/header'

import initialEmails from './data/emails'

import React, {useState} from 'react';

import './styles/app.css'

function App() {
  // Use initialEmails for state
  console.log(initialEmails)

  const [emails, setEmails] = useState(initialEmails)

  const createEmailList = () => {
    return (
      <ul className="email-list">
        {emails.map(email => 
          <li className={`email ${email.read ? 'read' : 'unread'}`} key={email.id}>
              <div className="select">
                <input
                  className="select-checkbox"
                  type="checkbox"
                  value={email.read}
                />
              </div>
              <div className="star">
                <input
                  className="star-checkbox"
                  type="checkbox"
                />
              </div>
              <div className="sender">{email.sender}</div>
              <div className="title">{email.title}</div>
          </li>)}
      </ul>
    )
  }

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
              // onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        <ul>
          {/* remove this ul as the function returns a ul */}
          {createEmailList()}
        </ul>
      </main>
    </div>
  )
}

export default App
