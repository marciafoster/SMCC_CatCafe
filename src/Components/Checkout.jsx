import React, { useState } from 'react';
import './Checkout.css';

const Checkout = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        Email: '',
        phoneNumber: '', 
        cardInformation: '',
    

    });

    const handleInputChange = (e) => { 
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here (e.g., sending data to a server).
  };

  return (
    <div>
      <h1>Finalize Your Furry Friend's Adoption</h1>
      <form onSubmit={handleSubmit}> 
     
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="Email">Email Address</label>
          <input
            type="text"
            id="Email"
            name="Email"
            value={formData.Email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="cardInformation">Card Information</label>
          <input
            type="text"
            id="cardInformation"
            name="cardInformation"
            value={formData.cardInformation}
            onChange={handleInputChange}
            required
          />
        </div>
      
       
        <button type="submit">Adopt</button>
      </form>
    </div>
  );
};





  



export default Checkout;