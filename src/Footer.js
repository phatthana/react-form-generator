import React from 'react'
import { footer, divide1, f5, f6, f7, f10, f12, divide2 } from './style/style'

const Footer = (props) => {
  const {footer} = props
  return(
    <div>
      <div style={footer}>
        <span>{footer.footer1}</span>
        <span>{footer.footer2}</span>
        <span>{footer.footer3}</span>
      </div>

      <div style={divide1}>
        <div>
          <p>{footer.footer4}</p>
        </div>
        <div>
          <p style={f5}>{footer.footer5}</p>
          <pre style={f6} >{footer.footer6}</pre>
          <p style={f7} >{footer.footer7}</p>
        </div>
        <div>
          <p style={f5} >{footer.footer8}</p>
          <pre style={f6} >{footer.footer9}</pre>
          <p style={f10} >{footer.footer10}</p>
        </div>
      </div>

      <div style={divide2} >
        <div>
          <p>{footer.footer11}</p>
        </div>
        <div>
          <p style={f12} >{footer.footer12}</p>
          <span>{footer.footer13}</span>
          <span>{footer.footer14}</span>
        </div>
        <div>
          <span>{footer.footer15}</span>
          <span>{footer.footer16}</span>
          <span>{footer.footer17}</span>
        </div>
      </div>
    </div>
  )
}

export default Footer;
