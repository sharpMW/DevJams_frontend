import React from 'react'
import Card from './TrendsCard'
import Data from './TrendsCardData'

const ComparisonSection = () => {
  return (
    <div className='min-h-screen grid grid-cols-3 gap-4 mt-14'><Card details={Data}/></div>
  )
}

export default ComparisonSection