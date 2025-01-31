import React from 'react';
import { useQuery, gql } from '@apollo/client';
import CountryInformation from './CountryInformation';

// GraphQL Query to fetch country data
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
`;

function CountryList() {
  // Fetching data using Apollo useQuery hook
  const { error, loading, data } = useQuery(GET_COUNTRIES);

  // Debug: log the data fetched from the query
  console.log(data);

  // Handle loading state
  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  // Handle error state
  if (error) {
    return (
      <div>
        <p>Oops, Something went wrong!</p>
      </div>
    );
  }

  // Handle main state
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 m-8 md:mx-32 md:my-20 lg:mx-52 lg:my-28'>
      {data.countries.map((country) => (
        <CountryInformation key={country.code} countryData={country} />
      ))}
    </div>
  );
}

export default CountryList;