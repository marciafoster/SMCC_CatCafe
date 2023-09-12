import React, { useState } from 'react';

const Checkout = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        Email: '',
        phoneNumber: '', 
        cardNumber: '',
        billingAddress: '',

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
      <h1>Checkout</h1>
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
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="billingAddress">Billing Address</label>
          <input
            type="text"
            id="billingAddress"
            name="billingAddress"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* Add more form fields for card details, address, etc. */}
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};





  



export default Checkout;