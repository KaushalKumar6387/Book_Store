import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  const modalRef = useRef(null)
  const navigate = useNavigate()

  const handleSignUpClick = (e) => {
    e.preventDefault()          // Prevent default navigation for a moment
    modalRef.current.close()    // Modal close karo
    navigate('/sign-up')        // Phir redirect karo
  }

  return (
    <>
      <dialog id="my_modal_3" className="modal" ref={modalRef}>
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <form>
            <h3 className="font-bold text-lg text-secondary">Login Now!</h3>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input w-full" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input w-full" placeholder="Password" />
              <div><a className="link link-hover">Forgot password?</a></div>
              <button className="btn btn-secondary mt-4">Login</button>
              <p>
                Not Registered?{' '}
                <Link
                  to="/sign-up"
                  className="text-primary text-[15px] link-hover"
                  onClick={handleSignUpClick}
                >
                  Sign Up
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </dialog>
    </>
  )
}
