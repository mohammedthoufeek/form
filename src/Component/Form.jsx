import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Country from './Country/Country';
import './Form.css'; // Import the CSS file


const countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda",
"Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados",
"Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil",
"British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands",
"Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba",
"Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea",
"Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon",
"Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau",
"Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy",
"Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya",
"Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius",
"Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles",
"New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru",
"Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite",
"Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis",
"St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este",
"Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay",
"Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
const Form = () => {



  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    gender: '',
    country: '',
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  


  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
  
    // Validate form fields
    if (!formData.username) {
        newErrors.username = 'Please enter a username';
      }
      if (!formData.email) {
        newErrors.email = 'Please enter an email address';
      }
      if (!formData.password) {
        newErrors.password = 'Please enter a password';
      }
      if (!formData.gender) {
        newErrors.gender = 'Please select a gender';
      }
      if (!formData.country) {
        newErrors.country = 'Please select a country';
      }
      else if (!countries.includes(formData.country)) {
        newErrors.country = 'Country not present in the list';
      }
  
    // If there are errors, update state and prevent form submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // If no errors, navigate to DisplayData component with the form data
      navigate('/output', { state: { formData } });
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
        />
        {errors.username && <div className="error">{errors.username}</div>}
        </label>

        <label>
        Email:
        <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
        />
        {errors.email && <div className="error">{errors.email}</div>}
        </label>

        <label>
        Password:
        <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
        />
        {errors.password && <div className="error">{errors.password}</div>}
        </label>

        <label>
        Gender:
        <select name="gender" value={formData.gender} onChange={handleInputChange}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
        </select>
        {errors.gender && <div className="error">{errors.gender}</div>}
        </label>

        <label>
        Country:
        <Country
            value={formData.country}
            onChange={(value) => handleInputChange('country', value)}
            countries={countries} // Pass the countries array as a prop
          />
        {errors.country && <div className="error">{errors.country}</div>}
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;




