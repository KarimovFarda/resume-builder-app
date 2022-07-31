import React from 'react'
import './navbarStyle.scss'
export const Navbar = () => {

    return (
<nav className="navbar navbar-expand-lg  navbar-light bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a className="navbar-brand" href="#test">Hidden brand</a>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#test">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#test">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='#test'>Disabled</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#test">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#test">About us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='#test'>Contact Us</a>
        </li>
      </ul>

    </div>
  </div>
</nav>
    )
}

export default Navbar