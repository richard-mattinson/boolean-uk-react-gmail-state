import Header from './components/header'
import { useState } from "react";
import initialEmails from './data/emails'
import './styles/app.css'

function App() {
  let [emails, setEmails] = useState(initialEmails)
  console.log("Initial emails", initialEmails)

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
      <main className="emails">{
        emails.map((email) => {
          return (
          <li className="email" key={email.id}>
              <div className="select">
                <input className='select-checkbox' type='checkbox'/>
              </div>
              <div className="star">
                <input className='star-checkbox' type='checkbox'/>
              </div>
              <div className="sender">
                {email.sender}
              </div>
              <div className="title">
                {email.title}
              </div>
          </li>
        )
        })
      /* Render a list of emails here */
      }</main>
    </div>
  )
}

export default App
