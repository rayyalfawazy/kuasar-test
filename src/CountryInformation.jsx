import React, { useState } from 'react';

/**
 * Converts a country code to a flag emoji.
 * @param {string} countryCode - The country code (e.g., 'US', 'FR').
 * @returns {string} - The corresponding flag emoji.
 */
function CountryCodeToFlagEmoji(countryCode) {
  return countryCode
    .toUpperCase()
    .replace(/./g, char => String.fromCodePoint(127397 + char.charCodeAt()));
}

function CountryInformation({ countryData }) {
  const [showMore, setShowMore] = useState(false);

  /**
   * Generates a detailed description of the country.
   * Handles both single and multiple official languages.
   * @returns {string} - The generated country description.
   */

  const generateDescription = () => {
    const languageCount = countryData.languages.length;
    const languageList = countryData.languages.map(lang => 
      lang.native ? `${lang.name} (${lang.native})` : lang.name
    );

    let languageText;
    if (languageCount === 1) {
      languageText = `The official language spoken is ${languageList[0]}.`;
    } else {
      const lastLanguage = languageList.pop();
      languageText = `The official languages spoken include ${languageList.join(', ')} and ${lastLanguage}.`;
    }

    return `${countryData.name} is located on the continent of ${countryData.continent.name}. 
    ${languageText} It boasts a rich cultural diversity and a unique identity within ${countryData.continent.name}.`;
  };

  return (
    <div className="border-4 border-gray-300 rounded-2xl p-5 hover:drop-shadow-lg hover:scale-105 duration-200 bg-white">
      <div>
        {/* Country Flag */}
        <img
          src={`https://flagcdn.com/w320/${countryData.code.toLowerCase()}.png`}
          alt={`Flag of ${countryData.name}`}
          className="w-28 mb-5 border-gray-400 border"
        />

        {/* Country Information */}
        <h1 className="text-2xl font-semibold">
          {countryData.name} ({CountryCodeToFlagEmoji(countryData.code)})
        </h1>
        <h2 className="text-lg">
          Capital: {countryData.capital != null ? countryData.capital : "No Capital"}
        </h2>
        <h2 className="text-lg">
          Currency: {countryData.currency != null ? countryData.currency : "No Currency"}
        </h2>

        {/* Show More/Less Button */}
        <button
          onClick={() => setShowMore(!showMore)}
          className="hover:text-blue-700 hover:underline font-light mt-3 block"
        >
          {showMore ? 'Show Less...' : 'Show More...'}
        </button>

        {/* Detailed Information */}
        {showMore && (
          <div className="mt-4 border-t">
            <p className="mt-4 text-gray-600">{generateDescription()}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CountryInformation;