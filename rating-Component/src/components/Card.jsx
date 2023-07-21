import React from 'react'

import Ratings from './Ratings'

const Card = (props) => {
  return (
    <div className='
    p-6 bg-card text-white rounded-3xl font-Rubik
    '>
      {props.children}
    </div>
  )
}

export default Card
