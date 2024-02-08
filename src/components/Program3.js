import React, { useState } from 'react';
import countries from './Country.json'

export default function Program3() {
  const [codeIndex, setCodeIndex] = useState('');

  return <>
    <h3>Select Country and Get Country codeIndex</h3>

    <label>Select Country: </label>
    <select onChange={(event) => {
      // console.log(event.target.value)
      setCodeIndex(event.target.value)
    }} >
      <option>select here...</option>
      {
        countries.map((countryName, ind) => {
          return <option key={ind} value={ind}>
            {countryName.name}

          </option>
        })
      }
    </select>

    <h4>
      Selected Country : {
        countries[codeIndex] && countries[codeIndex].name
      }

      {/* {countries[codeIndex] && console.log(countries[codeIndex].name)} */}
    </h4>
    <h2>
      Country Code : {
        countries[codeIndex] && countries[codeIndex].code
      }

      {/* { countries[codeIndex] && console.log(countries[codeIndex].codeIndex)} */}
    </h2>

  </>
}
