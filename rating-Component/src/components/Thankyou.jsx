import React from 'react'

import Card from './Card'

import thankyou from '../images/illustration-thank-you.svg'

const Thankyou = () => {
  return (
      <Card>
        <div className='flex flex-col py-4 rounded-3xl text-center gap-4 justify-center items-center'>
            <div className="flex justify-center">
                <img src={thankyou} alt="Thankyou Image" />
            </div>
            <h2 className='text-xl px-6 py-4 bg-neutral-700 rounded-full w-fit text-btn'>You selected 5 out of 5</h2>
            <p className='text-2xl'>Thankyou</p>
            <p className='text-gray-300'>
                We appreciate you taking time to give a rating.If you ever need more support, don't hesistate to get in touch!
            </p>
        </div>
      </Card>
  )
}

export default Thankyou
