import React from 'react'
import CountriesData from '../CountriesData'
import CountryCard from './CountryCard'
export default function CountriesList() {
  
  
  const array = CountriesData.map((country) => {
    return <CountryCard name = {country.name.common} />
  })

  return (
   <div className="countries-container">
    {array}
   </div>
  )
}
