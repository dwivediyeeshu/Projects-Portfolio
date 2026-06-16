import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit Google</a>
)

const anotherUser = "The Rock"


const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',
    target: '_blank'
  },
  'click me to visit google',
  anotherUser
)

createRoot(document.getElementById('root')).render(
    reactElement
)
