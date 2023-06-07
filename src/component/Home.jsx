import React from 'react'

export default function Form() {
  return (
    <div class="container">
    <h1>Form with Validation</h1>
    <form id="myForm" method="post" novalidate>
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" class="form-control" id="name" name="name" required />
        <div class="invalid-feedback">
          Please enter your name.
        </div>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" class="form-control" id="email" name="email" required />
        <div class="invalid-feedback">
          Please enter a valid email address.
        </div>
      </div>
      <div class="form-group">
        <label for="contactno">Contact Number:</label>
        <input type="text" class="form-control" id="contactno" name="contactno" required />
        <div class="invalid-feedback">
          Please enter a valid contact number.
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div> 
   )
}
