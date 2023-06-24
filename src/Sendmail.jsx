import React from "react";
import {res} from './UploadCsv'
import Navbar2 from "./Navbar2";
import { useState } from "react";

const Sendmail = () => {
  const [mailerState, setMailerState] = useState({
    mailto:res[0],
    subject: "",
    description: "",
  });

  function handleStateChange(e) {
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const submitEmail = async (e) => {
    e.preventDefault();
    console.log({ mailerState });
    await fetch("http://localhost:5000/send", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      
      body: JSON.stringify({ mailerState }),
    })
    
      .then((res) => res.json())

      .then( async (res) => {
        const resData = await res;
        console.log(resData);
        if (resData.status === "success") {
          alert("Message Sent");
        } else if (resData.status === "fail") {
          alert("Message failed to send");
        }
      })
      .then(() => {
        setMailerState({
          subject: "",
          description: "",
        });
      });
  };
 
  return (
    <>
    <div className='main_div'>
    <Navbar2/>
    <div className='center_div'>
      <div className="typewriter">
        <h3 className="heading">STEP : 3/3 Send mails</h3>
      </div>
      <hr/>
            <form method="POST" onSubmit={submitEmail}>

            <div className="sendmail_div">
              <h4 style={{ marginTop: "30px" ,fontSize : "30px" }}>Send multiple mails in one click</h4>


              <p> Subject :</p>
              <input
                 style={{ fontSize: "15px", padding: "5px" }}
                type="text"
                placeholder="Enter Your Subject "
                onChange={handleStateChange}
                name="subject"
                value={mailerState.subject}
                required
              />
              <p>Message :</p>
              <textarea 
                rows={4}
                onChange={handleStateChange}
                placeholder="Enter Your Message"
                name="description"
                value={mailerState.description}
                required

              ></textarea>
             

              <input type="Submit" value="send mail" className="submit_btn"/>
              </div>
              </form>
        </div>
      </div>
   
    </>
  );
}; 
export default Sendmail;
