import React from 'react'
import * as styles from './style'

const TextQuestion = (props) => {
    const { question, nDot, answer, index} = props

    var dot = () => {
      var text = '';
      for (var i = 0; i < nDot; i++) {
        text = text + '.'
      }
      return text
    }

    var indexNumber = () => {
      if (index !== undefined) {
        return (
          <span>{index + '. '}</span>
        )
      } else {
        return <div/>
      }
    }

    return (
      <div style={styles.textQuestion}>
        {indexNumber()}
        <span>{question}</span>
        <span>{answer}</span>
      </div>
    )
}

export default TextQuestion
