
import './App.css';

import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



const App = () => {
  const [progress, setProgress] = useState(0);




  return (
    <>

      <div>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={progress}

        />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} heading="General" key="health" pageSize={9} country="in" category={"general"} />}> </Route>
          <Route exact path="/Home" element={<News setProgress={setProgress} heading="General" key="general" pageSize={9} country="in" category={"general"} />}> </Route>
          <Route exact path="/Sports" element={<News setProgress={setProgress} heading="Sports" key="sports" pageSize={9} country="in" category={"sports"} />}> </Route>
          <Route exact path="/Entertainment" element={<News setProgress={setProgress} heading="Entertainment" key="entertainment" pageSize={9} country="in" category={"entertainment"} />}> </Route>
          <Route exact path="/Business" element={<News setProgress={setProgress} heading="Business" key="business" pageSize={9} country="in" category={"business"} />}> </Route>
          <Route exact path="/Technology" element={<News setProgress={setProgress} heading="Technology" key="technology" pageSize={9} country="in" category={"technology"} />}> </Route>

        </Routes>


      </div>

    </>
  )

}

export default App
