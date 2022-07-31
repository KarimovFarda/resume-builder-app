import React from 'react'
import './navbarStyle.scss'
export const Navbar = () => {

    return (
<nav class="navbar navbar-expand-lg  navbar-light bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a class="navbar-brand" href="#test">Hidden brand</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#test">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#test">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href='#test'>Disabled</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#test">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#test">About us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href='#test'>Contact Us</a>
        </li>
      </ul>

    </div>
  </div>
</nav>
    )
}

export default Navbar