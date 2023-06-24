import React from "react";
import Nav_Buttons from './Buttons';


const Center = () => {
  return (
    <>
      <div className="center_div">
        <div className="typewriter_div">
          <div className="typewriter">
            <h1 className="heading">step:1/3 upload csv file</h1>
          </div>
          <div className="typewriter_para">
            <p>
              A project to upload a csv file containing data such as name,emails etc.
              Validation and purification can be done before sending emails at once to all the reciptents
              mentioned in the csv file.
            </p>
          </div>
        </div>

        <hr />
        <div className="center_div2">
          <h2>Click Here to proceed Step by Step:</h2>
          <Nav_Buttons/>
        </div>
      </div>
    </>
  );
};

export default Center;
