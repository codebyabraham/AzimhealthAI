import React, { useState } from 'react';
import './App.css'


function App() {
  // Step 1: State Management
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [country, setCountry] = useState('');

  // Step 2: Event Handlers
  const handleFullNameChange = (e) => setFullName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
  const handleCountryChange = (e) => setCountry(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:3001/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email, phoneNumber, country }),
      });
  
      if (response.ok) {
        console.log('Form submitted successfully');
      } else {
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  
  return (
   <>
   <div class=" d-flex  mx-auto mt-5" >
  
  <div class="card-body">
    <h2 id='h2' class="card-title fs-4 mb-4  text-center text-white fw-bolder ">Discover your new Digital Health Assistant<br /> Join our mission to make healthcare <br /> more accessible and affordable.</h2>
    <h2 id='h2' class="card-title fs-4  text-center text-white">SIGN UP NOW!!!</h2>
    <form onSubmit={handleSubmit}>
   <div className="col-md-5 mx-auto">
   <label id='h2' className='text-white' htmlFor="">Full Name</label>
    <input  className='form-control  mb-4'  type="text" name="Name" placeholder='Full Name' value={fullName} onChange={handleFullNameChange}/>
    
   </div>
   <div className="col-md-5 mx-auto">
    <label id='h2' className='text-white' htmlFor="">Email Address</label>
    <input className='form-control mb-4' type="email" name="" placeholder='Email address'  value={email} onChange={handleEmailChange} />
    </div>
    <div className="col-md-5 mx-auto">
    <label id='h2' className='text-white' htmlFor="">Phone Number</label>
    <input className='form-control mb-4'  type="text" name="Name" placeholder='Phone Number'  value={phoneNumber} onChange={handlePhoneNumberChange} />
    </div>
    <div className="col-md-5 mx-auto">
    <label id='h2' className='text-white' htmlFor="">Country</label>
    <input className='form-control mb-4' type="text" name="" placeholder='Country'  value={country} onChange={handleCountryChange} />
    </div>
    <div class="d-flex justify-content-center col-md-5 mx-auto">
    <button id='h2' class="btn btn-outline-dark">Sign Up ↦ </button>
    </div>
    </form>
  </div>
</div>

   </>
  )
}

export default App