import React from 'react'

export default function CountryCard() {
  return (
   <a className="country-card" href="./country.html?name=Guyana">
                        <img src="https://flagcdn.com/gy.svg" alt="Guyana Flag"/>
                        <div className="card-text">
                            <h3 className="card-title">Guyana</h3>
                            <p><b>Population: </b>7,86,559</p>
                            <p><b>Region: </b>Americas</p>
                            <p><b>Capital: </b>Georgetown</p>
                        </div>
                       
                    </a>
  )
}
