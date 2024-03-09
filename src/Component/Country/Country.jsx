import React, { useState } from 'react';
import './Country.css'


const Country = ({ value, onChange ,countries}) => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const newInputValue = e.target.value;
    setInputValue(newInputValue);

    const filteredSuggestions = countries.filter(
      (country) => country.toLowerCase().includes(newInputValue.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (selectedCountry) => {
    setInputValue(selectedCountry);
    setSuggestions([]);
    onChange(selectedCountry);
  };

  return (
    <div className="country-input-container">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type to search or select from the list"
        className="country-input"
      />
      {inputValue && (
        <ul className="suggestions-list">
          {suggestions.map((country) => (
            <li key={country} onClick={() => handleSuggestionClick(country)} className="suggestion-item">
              {country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Country;