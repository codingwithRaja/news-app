
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  state = {
    progress: 0,
    // country: "in"
  }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }

  // setCountry = (country) => {
  //   this.setState({ country: "us" })
  // }
  render() {
    return (
      <>

        <div>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}

          />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} heading="General" key="health" pageSize={9} country="us" category={"general"} />}> </Route>
            <Route exact path="/Home" element={<News setProgress={this.setProgress} heading="General" key="general" pageSize={9} country="us" category={"general"} />}> </Route>
            <Route exact path="/Sports" element={<News setProgress={this.setProgress} heading="Sports" key="sports" pageSize={9} country="us" category={"sports"} />}> </Route>
            <Route exact path="/Entertainment" element={<News setProgress={this.setProgress} heading="Entertainment" key="entertainment" pageSize={9} country="us" category={"entertainment"} />}> </Route>
            <Route exact path="/Business" element={<News setProgress={this.setProgress} heading="Business" key="business" pageSize={9} country="us" category={"business"} />}> </Route>
            <Route exact path="/Technology" element={<News setProgress={this.setProgress} heading="Technology" key="technology" pageSize={9} country="us" category={"technology"} />}> </Route>

          </Routes>


        </div>

      </>
    )
  }
}


