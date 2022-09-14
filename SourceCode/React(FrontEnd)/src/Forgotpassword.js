import React from 'react'


export default function Forgotpassword() {
  return (
    <div>
      <form>

<h3>Reset Password</h3>

<div className="form-group">
    <label>Email</label>
    <input type="email" className="form-control" placeholder="Enter email" />
</div>

<div className="form-group">
    <label>New Password</label>
    <input type="password" className="form-control" placeholder="Enter password" />
</div>
<div className="form-group">
    <label>Confirm Password</label>
    <input type="password" className="form-control" placeholder="Re-enter password" />
</div>

<button type="submit" className="btn btn-dark btn-lg btn-block"> Confirm </button>
</form>
    </div>
  )
}
