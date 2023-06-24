import React from "react";
import About from "./About";
import Sendmail from "./Sendmail";
import { Routes ,Route } from 'react-router-dom';
import Home from "./Home";
import Uploadcsv from "./UploadCsv";
import Validatecsv from "./Validatecsv";
import Invalidemails from "./Invalidemails";

const App = () => {
  return (
    <>
      <Routes>
      <Route exact path="/" element = {<Home/>}/>
      <Route exact path="/about" element = {<About/>}/>
      <Route exact path="/sendmail" element = {<Sendmail/>}/>
      <Route exact path="/uploadcsv" element = {<Uploadcsv/>}/>
      <Route exact path="/validatecsv" element={<Validatecsv/>}/>
      <Route exact path="/invalidemails" element={<Invalidemails/>}/>

    </Routes>
    </>
  );
};

export default App;
