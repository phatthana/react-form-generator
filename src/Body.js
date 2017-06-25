import React from 'react'
import { box } from './style/style'

import TextQuestion from './components/TextQuestion'

const Body = (props) => {
  const {body} = props


  var questions = () => {
    // 'knowDate': '10/12/2560',
    // 'cureDate': '12/12/2560',
    // 'doctorName': 'abc',

    var comps = []
    if (body.knowDate !== undefined) {
      comps.push(<TextQuestion key={comps.length + 1} index={comps.length + 1} question='KnowDate' answer={body.knowDate} nDot={100}/>)
      comps.push(<TextQuestion key={comps.length + 1} index={comps.length + 1} question='CureDate' answer={body.cureDate} nDot={100}/>)
    }

    comps.push(<TextQuestion key={comps.length + 1} index={comps.length + 1} question='DoctorName' answer={body.doctorName} nDot={100}/>)
    return comps
  }

  return(
    <div style={box}>
      {questions()}
    </div>
  )
}

export default Body;
