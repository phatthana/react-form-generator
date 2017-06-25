import React from 'react'
import { h1, h2, h3 } from './style/style'

import TextQuestion from './components/TextQuestion'

const Header = (props) => {
  const {params} = props
  // const {name, insuranceNo} = props
//   const containerStyle = {
//    backgroundColor: 'white',
//}
  return(

    <div>
        {/* <div style={h1}>
        <p>{header.header1}</p>
        </div> */}

        <div style={{backgroundColor: 'red', marginLeft: 50}}>
          <TextQuestion question='ชื่อและนามสกุลของผู้เอาประกันภัย' answer={params.name} nDot={100}/>
          <TextQuestion question='ถือเป็นส่วนหนึ่งของใบคำขอใบประกันภัยเลขที่' answer={params.insuranceNo}/>
        </div>


    </div>
  )
}

export default Header;
