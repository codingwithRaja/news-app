// import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {



  return (
    <>
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark  bg-dark">
          <Link className="navbar-brand" to="/">
            <img src="https://media.istockphoto.com/id/1351440359/vector/megaphone-with-breaking-news-speech-bubble-banner-loudspeaker-label-for-business-marketing.jpg?s=612x612&w=0&k=20&c=o2Q3N327CD_YdTjXqQ5cP2MW7rNHWDRD33ZO7iFA9QE=" width="30" height="30" alt="" />
          </Link>
          <div className="container-fluid">
            <Link className="navbar-brand " style={{ color: 'white', fontWeight: 'bold', fontSize: '25px' }} to="/">MongoNews</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ color: 'white', fontWeight: 'bold', fontStyle: 'italic' }}>
                <li className="nav-item">
                  <Link className="nav-link active " style={{ color: "white" }} aria-current="page" to="/Home">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" style={{ color: "white" }} to="/Sports">Sports</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" style={{ color: "white" }} to="/Entertainment">Entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" style={{ color: "white" }} to="/Business">Business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" style={{ color: "white" }} to="/Technology">Technology</Link>
                </li>


              </ul>

            </div>
          </div>
        </nav>
      </div>
    </>
  )

}

export default Navbar
