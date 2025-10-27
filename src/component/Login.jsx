import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
   <>
   <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
     
      <button  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <form action="">
    <h3 className="font-bold text-lg text-secondary">Login Now!</h3>
      <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input w-full" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input w-full" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-secondary mt-4">Login</button>
          <p >Not Registered ? <Link className='text-primary  text-[15px] link-hover'>Sign Up</Link></p>
        </fieldset>
    </form>
   
  </div>
</dialog>
   </>
  )
}
