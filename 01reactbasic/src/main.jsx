import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>Custom App!</h1>
        </div>
    )
}

const anotherElement = (
    <a href="http://google.com" target='_blank'>
        Visit google
    </a>
)
const _anotherUser = "chai aur react"
const reactElement = React.createElement(
    'a',
    {href: 'http://google.com',target: '_blank'},
    'click me to visit google',
    _anotherUser//seedha seedha aa jana//evaluated expression
)
ReactDOM.createRoot(document.getElementById('root')).render(
    // anotherElement
    // <MyApp />
    // reactElement
    <App />
  
)
