
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { Route, Routes } from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <>

        <div>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News heading="General News" key="health" pageSize={9} country={"in"} category={"general"} />}> </Route>
            <Route exact path="/Home" element={<News heading="General News" key="general" pageSize={9} country={"in"} category={"general"} />}> </Route>
            <Route exact path="/Sports" element={<News heading="Sports News" key="sports" pageSize={9} country={"in"} category={"sports"} />}> </Route>
            <Route exact path="/Entertainment" element={<News heading="Entertainment News" key="entertainment" pageSize={9} country={"in"} category={"entertainment"} />}> </Route>
            <Route exact path="/Business" element={<News heading="Business News" key="business" pageSize={9} country={"in"} category={"business"} />}> </Route>
            <Route exact path="/Technology" element={<News heading="Technology News" key="technology" pageSize={9} country={"in"} category={"technology"} />}> </Route>
          </Routes>


        </div>

      </>
    )
  }
}


