import React, { useState } from 'react';

function CountryCodeToFlagEmoji(countryCode) {
  return countryCode
    .toUpperCase()
    .replace(/./g, char => String.fromCodePoint(127397 + char.charCodeAt()));
}

function CountryInformation({ country }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="border-4 border-gray-300 rounded-2xl p-5 hover:drop-shadow-lg hover:scale-105 duration-200 bg-white">
      <div>
        <img
          src={`https://flagcdn.com/w320/${country.code.toLowerCase()}.png`}
          alt={`Flag of ${country.name}`}
          className="w-28 mb-5 border-gray-400 border"
        />
        <h1 className="text-2xl font-semibold">
          {country.name} ({CountryCodeToFlagEmoji(country.code)})
        </h1>
        <h2 className="text-lg">
          Capital: {country.capital != null ? country.capital : "No Capital"}
        </h2>
        <h2 className="text-lg">
          Currency: {country.currency != null ? country.currency : "No Currency"}
        </h2>
        <button
          onClick={() => setShowMore(!showMore)}
          className="hover:text-blue-700 hover:underline font-light mt-3 block"
        >
          {showMore ? 'Show Less...' : 'Show More...'}
        </button>

        {showMore && (
          <div className="mt-4 border-t pt-4">
            <h3 className="text-xl font-semibold">Continent</h3>
            <p>{country.continent.name} ({country.continent.code})</p>

            <h3 className="text-xl font-semibold mt-3">Languages</h3>
            <ul className="list-disc pl-5">
              {country.languages.map((language, index) => (
                <li key={index}>
                  {language.name} {language.native ? `(${language.native})` : ''}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default CountryInformation;
