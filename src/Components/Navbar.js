import React, { Component } from 'react'


export class Navbar extends Component {


  render() {
    return (
      <>
        <div>
          <nav className="navbar navbar-expand-lg  bg-dark bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand " style={{ color: 'gold', fontWeight: 'bold' }} href="/">Mongo News</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active " style={{ color: "white" }} aria-current="page" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" style={{ color: "white" }} href="/">Link</a>
                  </li>


                </ul>

              </div>
            </div>
          </nav>
        </div>
      </>
    )
  }
}

export default Navbar
