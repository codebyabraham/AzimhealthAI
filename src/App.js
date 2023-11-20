import React, { useState } from 'react';
import './App.css';

function App() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFullNameChange = (e) => setFullName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
  const handleCountryChange = (e) => setCountry(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch('http://localhost:3000/api/person', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email, phoneNumber, country }),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        // Reset form fields after successful submission
        setFullName('');
        setEmail('');
        setPhoneNumber('');
        setCountry('');
        setError(''); // Clear any previous errors
      } else {
        const data = await response.json();
        setError(data.message || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Internal Server Error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="d-flex mx-auto mt-5">
        <div className="card-body">
          <h2 className="card-title fs-4 mb-4 text-center text-white fw-bolder">
            Discover your new Digital Health Assistant<br /> Join our mission to make healthcare <br /> more accessible and affordable.
          </h2>
          <h2 className="card-title fs-4 text-center text-white">SIGN UP NOW!!!</h2>
          <form onSubmit={handleSubmit}>
            <div className="col-md-5 mx-auto">
              <label className='text-white' htmlFor="fullName">Full Name</label>
              <input
                className='form-control mb-4'
                type="text"
                name="fullName"
                id="fullName"
                placeholder='Full Name'
                value={fullName}
                onChange={handleFullNameChange}
                required
              />
            </div>
            <div className="col-md-5 mx-auto">
              <label className='text-white' htmlFor="email">Email Address</label>
              <input
                className='form-control mb-4'
                type="email"
                name="email"
                id="email"
                placeholder='Email address'
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="col-md-5 mx-auto">
              <label className='text-white' htmlFor="phoneNumber">Phone Number</label>
              <input
                className='form-control mb-4'
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                placeholder='Phone Number'
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                required
              />
            </div>
            <div className="col-md-5 mx-auto">
              <label className='text-white' htmlFor="country">Country</label>
              <input
                className='form-control mb-4'
                type="text"
                name="country"
                id="country"
                placeholder='Country'
                value={country}
                onChange={handleCountryChange}
                required
              />
            </div>
            <div className="d-flex justify-content-center col-md-5 mx-auto">
              <button className="btn btn-outline-dark" disabled={loading}>Sign Up ↦ </button>
            </div>
          </form>
          {loading && <p>Loading...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      </div>
    </>
  );
}

export default App;
