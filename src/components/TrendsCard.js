import React from 'react'

const TrendsCard = (props) => {
  return (
    <>
        {props.details.map((value, index)=>(
            <div className='outline outline-gray-100 p-8' key={index}>
                <div className='grid grid-cols-2'>
                    <img src={value.img1} className='mx-auto object-cover max-h-96' alt=''/>
                    <img src={value.img2} className='mx-auto object-cover max-h-96' alt=''/>
                </div>
            </div>
        ))}
    </>
  )
}

export default TrendsCard