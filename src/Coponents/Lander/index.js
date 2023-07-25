import { useState } from 'react';
import {useNavigate } from 'react-router-dom';

import Logo from '../../Images/LogoFinal.jpg';
import '../../Styles/LandingPage.css'

function LandingPage() {

  const Navigate = useNavigate();

  const [ Name , setName ] = useState();
  const [ Email , setEmail ] = useState();
  const [ Mobile , setMobile ] = useState();
  const [ Dob , setDob ] = useState();
  const [ Gender , setGender ] = useState();
  const [ Address , setAddress ] = useState();
  const [ Education , setEducation ] = useState();
  const [ Skills , setSkills ] = useState();
  const [ Certifications , setCertifications ] = useState();

  const Required = () =>{
    if( Name === undefined || Email === undefined || Mobile === undefined ||
      Dob === undefined || Gender === undefined || Address === undefined || Education === undefined ||
      Skills === undefined || Certifications === undefined){
        alert("Incomplete Form");
      }
    else{
      Navigate('/ResumeDownload' ,
        {
          state:{
          Name:Name,
          Email:Email,
          Mobile:Mobile,
          Dob:Dob,
          Gender:Gender,
          Address:Address,
          Education:Education,
          Skills:Skills,
          Certifications:Certifications
        }}
      )
    }
  }

  return (
    <>
      <div className="LandingPage_MainDiv">
        <div className="TextAlignments">
            <p className="fontBasics Title2">Craft your perfect career @ Encored to professional success!</p>
        </div>
        <div className="row">
            <div className="column InfoSide">
                <div className="TextAlignments FitWidth">
                    <p className="fontBasics Title3">Welcome to</p>
                    <p className="fontBasics Title1">Encored</p>
                </div>
                <div className="FitWidth enco">
                    <img src={Logo} alt="Encored Logo"/>
                </div>
                <div className="InfoButtonDiv">
                    <button className="LearnMore" name="Learn" id="LearnMore">Learn More</button>
                </div>
            </div>
            <div className="FormSide FormText column">
              <div className="main">
                  <div className="InputField">
                      <label ><i className="fa-solid fa-user IconBasics"></i></label>
                      <input type="text" className="InputBasics" name="Name" id="name" placeholder="Name" onChange={(e)=>{setName(e.target.value)}} required />
                  </div>
                  <br/>
                  <div className="InputField">
                      <label><i className="fa-solid fa-calendar-days IconBasics"></i></label>
                      <input type="date" className="InputBasics" name="DOB" id="DOB" placeholder="Date Of Birth" onChange={(e)=>{setDob(e.target.value)}} required />
                  </div>
                  <br/>
                  <div className="InputField">
                      <label><i className="fa-solid fa-person-half-dress IconBasics"></i></label>
                      <select name="Gender" id="Gender" className="InputBasics" onChange={(e)=>{setGender(e.target.value)}} required>
                          <option value="select">Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Others">Others</option>
                      </select>
                  </div>
                  <br/>
                  <div className="InputField">
                      <label><i className="fa-solid fa-at IconBasics"></i></label>
                      <input type="email" className="InputBasics" name="email" id="email" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}} required />
                  </div>
                  <br/>
                  <div className="InputField">
                      <label><i className="fa-solid fa-phone IconBasics"></i></label>
                      <input type="tel" className="InputBasics" name="Mobile" id="Mobile" placeholder="Mobile No" onChange={(e)=>{setMobile(e.target.value)}} required />
                  </div>
                  <br/>
                  <div className="InputField">
                      <label><i className="fa-solid fa-location-dot IconBasics"></i></label>
                      <input type="text" className="InputBasics" name="Address" id="Address" placeholder="Address" onChange={(e)=>{setAddress(e.target.value)}} required />
                  </div>
                  <br/>
                  <div className="InputField">
                      <label><i className="fa-solid fa-user-graduate IconBasics"></i></label>
                      <input type="text" className="InputBasics" name="Education" id="Education" placeholder="Education" onChange={(e)=>{setEducation(e.target.value)}} required />
                  </div>
                  <br/>
                  <div className="InputField">
                      <label><i className="fa-solid fa-bolt IconBasics"></i></label>
                      <input type="text" className="InputBasics" name="Skills" id="Skills" placeholder="Skills" onChange={(e)=>{setSkills(e.target.value)}} required />
                  </div>
                  <br/>
                  <div className="InputField">
                      <label><i className="fa-solid fa-award IconBasics"></i></label>
                      <input type="text" className="InputBasics" name="Certifications" id="Certifications" placeholder="Certifications" onChange={(e)=>{setCertifications(e.target.value)}} required />
                  </div>
                  <br/>
                  <div>
                      <button className="Generate" name="Generate" onClick={()=>{Required()}} id="Generate">Generate</button>
                  </div>
              </div>
            </div>
        </div>
    </div>
  </>
  );
}

export default LandingPage;