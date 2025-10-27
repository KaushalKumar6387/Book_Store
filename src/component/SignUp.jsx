import React from 'react'

export default function SignUp() {
  return (
  <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4  my-25 bg-white">
       <div className='w-1/2 border-1 mx-auto rounded md:flex shadow-2xl'>
       <div className='w-1/2 min-h-100  bg-secondary rounded-r-[30%] p-10 flex justify-center flex-col align-middle'>
       <h3 className='text-white font-semibold text-2xl text-center mt-4'>Sign Up!</h3>
       <p className='text-center mt-5 text-white'>Join our community of book lovers and get access to exclusive deals, recommendations, and new releases.</p>
       </div>
       <div className='w-1/2 '>
        <div className="card bg-base-100 w-full max-w-sm shrink-0">
      <div className="card-body">
        <fieldset className="fieldset">
              <label className="label">Name</label>
          <input type="text" className="input" placeholder="Full Name" />
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
            <label className="label">Mobile</label>
          <input type="number" className="input" placeholder="Mobile Number" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Sign Up</button>
        </fieldset>
      </div>
    </div>
       </div>
       </div>
      </div>
  </>
  )
}
