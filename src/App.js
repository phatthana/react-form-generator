import React from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import { containerStyle } from './style/style'

const App = (props) => {
    const { header, body, footer} = props
    return (
      <div style={containerStyle}>
        <Header params={props}/>
        <Body body={body}/>
        <Footer footer={footer}/>
      </div>
    )
}

export default App
