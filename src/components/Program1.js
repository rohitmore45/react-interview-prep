import React, { useState } from 'react'

export default function Program1() {
  let countries = [
    {
      name: "India",
      code: "IN",
      cities: [
        "Mumbai",
        "Pune"
      ],
    },
    {
      name: "USA",
      code: "US",
      cities: [
        "Newyork",
        "California"
      ],

    },
    {
      name: "UAE",
      code: "UAE",
      cities: [
        "Dubai",
        "AbuDhabi"
      ]
    },
    {
      name: "Pakistan",
      code: "PK",
      cities: [
        "Karachi",
        "Lahore"
      ]
    },
    {
      name: "Bangladesh",
      code: "BG",
      cities: [
        "Dhaka",
        "Chithong"
      ]
    }
  ]

  let [country, setCountry] = useState()
  return <>
    <select value={country}
      onChange={(event) => {
        // console.log(event.target.value);
        setCountry(event.target.value);
      }}
    >
      <option >Select Country & City</option>
      {countries.map((item, ind) => {
        return <option key={ind} value={ind}>{item.name}</option>
      })}
    </select>

    <select >
      {
        countries[country] && countries[country].cities.map((cityName, ind) => {
          return <option key={ind} value={ind}>{cityName}</option>
        })
      }
    </select>

  </>
}

