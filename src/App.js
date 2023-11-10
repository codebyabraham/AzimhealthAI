import React from 'react'
import './App.css'


function App() {
  return (
   <>
   <div class=" d-flex  mx-auto mt-5" >
  
  <div class="card-body">
    <h2 id='h2' class="card-title fs-4 mb-4  text-center text-white fw-bolder ">Be among the first to enjoy <br /> seamless shopping and loads of <br /> benefits when we LAUNCH!</h2>
    <h2 id='h2' class="card-title fs-4  text-center text-white">JOIN THE WAITLIST!</h2>

   <div className="col-md-5 mx-auto">
   <label id='h2' className='text-white' htmlFor="">Full Name</label>
    <input  className='form-control  mb-4'  type="text" name="Name" placeholder='Full Name' id="" />
    
   </div>
   <div className="col-md-5 mx-auto">
    <label id='h2' className='text-white' htmlFor="">Email Address</label>
    <input className='form-control mb-4' type="email" name="" placeholder='Email address' id="" />
    </div>
    <div className="col-md-5 mx-auto">
    <label id='h2' className='text-white' htmlFor="">Phone Number</label>
    <input className='form-control mb-4'  type="text" name="Name" placeholder='Phone Number' id="" />
    </div>
    <div className="col-md-5 mx-auto">
    <label id='h2' className='text-white' htmlFor="">Country</label>
    <input className='form-control mb-4' type="text" name="" placeholder='Country' id="" />
    </div>
    <div class="d-flex justify-content-center col-md-5 mx-auto">
    <button id='h2' class="btn btn-outline-dark">Join WaitList ↦ </button>
    </div>
  </div>
</div>

   </>
  )
}

export default App