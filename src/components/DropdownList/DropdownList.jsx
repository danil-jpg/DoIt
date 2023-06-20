import React, { useState } from 'react';
import s from "./DropdownList.module.scss"

const countries = [
  'United States',
  'Canada',
  'Germany',
  'France',
  'Ukraine',
  'Poland',
  'Bulgaria',
  'Bulgaria',
  'Romania',
  'Slovenia',
  
  
];

const DropdownList = () => {
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div className={s.country__dropdown}>
      <select value={selectedCountry} onChange={handleCountryChange}>
        <option value="">Select a country</option>
        {countries.map((country, index) => (
          <option className={s.country__option} key={index} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownList;
