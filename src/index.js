import React from 'react'
import ReactDom from 'react-dom'

const render = () => {
  ReactDom.render(
    <div>test</div>,
    document.getElementById('root')
  )
}

render()
