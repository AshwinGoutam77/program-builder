'use client';  
import React  from "react";
import { RxCross1 } from "react-icons/rx";
import "./pop.css";  

const PopUp = ({handleClick}) => {
  const handleSubmimt = (e) => {
    e.preventDefault(); 
    console.log("Form submitted");
     
  }
  return (
    <section className="popup-container">
      <div className="flex justify-between items-start">
        <div>
          <h2>Download Program Brochure</h2>
          <p>To get this Brochure, kindly help us with your details.</p>
        </div>
        <div className="close-icon flex items-center justify-center" onClick={handleClick}>
          <span>
            <RxCross1 />
          </span>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 items-start gap-4 form-container">
        <div>
          <img className="brochure-image"
            src="https://content.rethinksystems.in/brochure_preview_v2_6c76083ae0.png"
            alt=""
          />
        </div>
        <form onSubmit={(e)=>{handleSubmimt(e)}} className="flex flex-col ">
          <label htmlFor="Name">Full Name <span>*</span></label>
          <input type="text" name="Name" />
          <label htmlFor="Phone Number">Phone Number <span>*</span></label>
         <div className="input-with-country-code flex items-center justify-between">
          <select className="country-code w-fit" name="Country Code">
            <option value="">IND</option>
            <option value="">UK</option>
            <option value="">US</option>
          </select>
           <input type="tel" name="Phone Number" />
         </div>
          <label htmlFor="Email ID">Email ID (Optional)</label>
          <input type="email" name="Email ID" /> 
          <button className=" flex items-center justify-center w-fit self-end">
            <span>Download</span>
            {/* <img src="/images/arrow.png" alt="" /> */}
          </button>
        </form>
      </div>
    </section>
  );
};

export default PopUp;
