import React, { useState } from 'react'

import Card from './Card'

import starImg from '../images/icon-star.svg'
import Thankyou from './Thankyou';

const Ratings = () => {

    const [selectedRating,setSelectedRating] = useState();
    const [IsSubmitted,setIsSubmitted] = useState();

    function handleRating(rating){
        setSelectedRating(rating);
    }

    function handleSubmitForm(e){
        e.preventDefault();
        setIsSubmitted(true);
    }

    return IsSubmitted ? 
    <Thankyou/>
    : (
        <Card>
            <form onSubmit={handleSubmitForm} className='flex flex-col gap-4'>
                <div className='bg-neutral-700 p-4 rounded-full flex justify-center items-center w-fit'>
                    <img src={starImg} alt="" />
                </div>
                <h2 className='text-2xl font-bold'>How did we do?</h2>
                <p className='text-md'>
                    Please let us know how we did. All feedback is appreciated to help us improve our offering!
                </p>
                <div className='
                flex
                justify-between
                '>
                    {[1,2,3,4,5].map((rating)=>(
                        <button type='button'
                            onClick={()=>handleRating(rating)} 
                            className='rateBtn'
                            >{rating}
                        </button>
                    ))}
                </div>
                <button disabled={selectedRating === undefined} className='submitBtn' type='submit'>Submit</button>
            </form>
        </Card>
  )
}

export default Ratings
