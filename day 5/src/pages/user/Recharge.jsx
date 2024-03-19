import React, { useState } from 'react';

// Sample list of all states in India
const allIndiaStates = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
  'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
  'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana',
  'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands',
  'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Delhi', 'Ladakh',
  'Lakshadweep', 'Puducherry'
];

// Sample list of mobile operators
const mobileOperators = [
  { value: 'operator1', label: 'Jio' },
  { value: 'operator2', label: 'Airtel' },
  { value: 'operator3', label: 'Vodafone' },
  { value: 'operator3', label: 'Idea' },
];

function Recharge() {
  // State to store the mobile number, selected operator, and selected state
  const [mobileNumber, setMobileNumber] = useState('');
  const [operator, setOperator] = useState('');
  const [selectedState, setSelectedState] = useState('');

  // Function to handle input change for mobile number
  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };

  // Function to handle input change for operator
  const handleOperatorChange = (event) => {
    setOperator(event.target.value);
  };

  // Function to handle input change for state
  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can perform any action with the mobile number, operator, and state
    console.log('Mobile Number:', mobileNumber);
    console.log('Selected Operator:', operator);
    console.log('Selected State:', selectedState);
    // You can redirect the user or show a confirmation message here
  };

  return (
    <div className="container mx-auto  flex">
      {/* Image container */}
      <div className="flex-shrink-0 w-2/3">
        <img src="https://images.pexels.com/photos/859265/pexels-photo-859265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image" className="w-full h-auto" />
      </div>
      {/* Form container */}
      <div className=" w-1/3">
        <div className="bg-teal-200 p-6 h-screen rounded-lg flex flex-col justify-start">
          <h1 className="text-3xl font-semibold mb-4 pl-8" style={{ fontFamily: 'Roboto, sans-serif' }}>Enter Number To Recharge</h1>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="mb-4">
              <label htmlFor="mobileNumber" className="block text-gray-700">Mobile Number:</label>
              <input 
                type="text" 
                id="mobileNumber" 
                value={mobileNumber} 
                onChange={handleMobileNumberChange} 
                pattern="[0-9]*"
                className="border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 w-full"
                placeholder="Mobile"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="operator" className="block text-gray-700">Operator:</label>
              <select 
                id="operator" 
                value={operator} 
                onChange={handleOperatorChange} 
                className="border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 w-full"
                required
              >
                <option value="">Select Operator</option>
                {mobileOperators.map((option, index) => (
                  <option key={index} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="state" className="block text-gray-700">State:</label>
              <select 
                id="state" 
                value={selectedState} 
                onChange={handleStateChange} 
                className="border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 w-full"
                required
              >
                <option value="">Select State</option>
                {allIndiaStates.map((state, index) => (
                  <option key={index} value={state}>{state}</option>
                ))}
              </select>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
              Recharge
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Recharge;
