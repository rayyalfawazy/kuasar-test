import React from 'react'

import { useQuery, gql } from '@apollo/client'
import CountryInformation from './CountryInformation'

const GET_COUNTRIES = gql`
query {
    countries {
      name
      code
      currency
      capital
      continent {
        name
        code
      }
      languages {
        name
        native
        rtl
      }
	}
}
`

function CountryList() {
  const {error, loading, data} = useQuery(GET_COUNTRIES)

  console.log(data)

  if (loading) return (
    <div>
      <p>Loading...</p>
    </div>
  )

  if (error) return (
    <div>
      <p>Oops, Something went wrong!</p>
    </div>
  )

  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 m-8 md:mx-32 md:my-20 lg:mx-52 lg:my-28'>
      {data.countries.map(country => {
        return (
          <CountryInformation country={country} />
        )
      })}
    </div>
  )
}

export default CountryList