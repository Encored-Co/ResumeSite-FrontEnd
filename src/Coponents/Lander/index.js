import { useState , useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Logo from '../../Images/LogoFinal.jpg';
import '../../Styles/LandingPage.css'

function LandingPage() {

  const Navigate = useNavigate();
  const Location = useLocation();

  const [ Stage , setStage ] = useState(0);

  const [ Name , setName ] = useState();
  const [ Email , setEmail ] = useState();
  const [ Mobile , setMobile ] = useState();
  const [ Address , setAddress ] = useState();
  const [ Profession , setProfession ] = useState();
  const [ Skills , setSkills ] = useState();
  const [ Summary , setSummary ] = useState();
  const [ File , setFile ] = useState();
  const [ FileUrl , setFileUrl ] = useState();

  const [ EduCount , setEduCount ] = useState(1);
  const [ Education , setEducation ] = useState([]);

  const [ WorkCount , setWorkCount ] = useState(1);
  const [ Work , setWork ] = useState([]);

  const [ Text1 , setText1 ] = useState();
  const [ Text2 , setText2 ] = useState();
  const [ Text3 , setText3 ] = useState();
  const [ Text4 , setText4 ] = useState();
  const [ Text5 , setText5 ] = useState();
  const [ Text6 , setText6 ] = useState();

  const DeleteEdu = (Maj) =>{
    setEducation((current) =>
      current.filter((Education) => Education.Major !== Maj)
    );
    setEduCount(EduCount-1)
  }

  const DeleteWrk = (Maj) =>{
    setWork((current) =>
      current.filter((Work) => Work.Pos !== Maj)
    );
    setWorkCount(WorkCount-1)
  }

  const Required1 = () =>{
    if( Name === undefined || Email === undefined || Mobile === undefined ||
      File === undefined || Address === undefined || Profession === undefined ||
      Summary === undefined){
        alert("Incomplete Form");
      }
    else{
      if(Mobile.length !== 10){
        alert("Enter Valid 10 digit Mobile Number")
      }
      else{
        if(!Email.includes("@")){
          alert("Enter Valid Email")
        }
        else{
          setStage(Stage+1);
        }
      }
    }
  }

  const Required2 = () =>{
    if( Education.length === 0 || Education === undefined){
        alert("Save to Proceed");
      }
    else{
      setStage(Stage+1);
    }
  }

  const Required3 = () =>{
    if( Work.length === 0 || Work === undefined){
        alert("Save to Proceed");
      }
    else{
      Required4()
    }
  }

  const Required4 = () =>{
    if( Skills === undefined){
        alert("Incomplete Form");
      }
    else{
      Navigate('/ResumeDownload' ,
        {
          state:{
          Name:Name,
          Email:Email,
          Mobile:Mobile,
          Address:Address,
          Summary:Summary,
          Profession:Profession,
          Education:Education,
          Work:Work,
          Skills:Skills,
          File:File,
          FileUrl:FileUrl
          }
        }
      )
    }
  }

  const Required5 = () =>{
    if( Text1 === undefined || Text2 === undefined || Text3 === undefined){
        alert("Incomplete Form");
      }
    else{
      setEducation([...Education,{Major:Text1,Ins:Text2,Loc:Text3}]);
      setEduCount(EduCount+1);
      setText1();
      setText2();
      setText3();
    }
  }

  const Required6 = () =>{
    if( Text4 === undefined || Text5 === undefined || Text6 === undefined){
        alert("Incomplete Form");
      }
    else{
      setWork([...Work,{Pos:Text4,Cmp:Text5,Loc:Text6}])
      setWorkCount(WorkCount+1);
      setText4();
      setText5();
      setText6();
    }
  }

  useEffect(()=>{
    if(Location.state !== null){
      setName(Location.state.Name);
      setEmail(Location.state.Email);
      setMobile(Location.state.Mobile);
      setAddress(Location.state.Address);
      setProfession(Location.state.Profession);
      setSummary(Location.state.Summary);
      setEducation(Location.state.Education);
      setEduCount(Location.state.Education.length+1);
      setWork(Location.state.Work);
      setWorkCount(Location.state.Work.length+1);
      setFile(Location.state.File);
      setFileUrl(Location.state.FileUrl);
      setSkills(Location.state.Skills);
    }
  },[])

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
                    <a href='https://www.encored.in' target='blank' className="LearnMore" name="Learn" id="LearnMore">Learn More</a>
                </div>
            </div>
            <div className="FormSide FormText column">
              {
                (Stage === 0)?
                <div className="main">
                  <div className="InputField">
                      <label ><i className="fa-solid fa-user IconBasics"></i></label>
                      <input type="text" defaultValue={Name} className="InputBasics" name="Name" id="name" placeholder="Name" onChange={(e)=>{setName(e.target.value)}} required />
                  </div>
                  <br/>
                  <div className="InputField">
                      <label><i className="fa-solid fa-at IconBasics"></i></label>
                      <input type="email" defaultValue={Email} className="InputBasics" name="email" id="email" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}} required />
                  </div>
                  <br/>
                  <div className="InputField">
                      <label><i className="fa-solid fa-phone IconBasics"></i></label>
                      <input type="tel" defaultValue={Mobile} className="InputBasics" name="Mobile" id="Mobile" placeholder="Mobile No" onChange={(e)=>{setMobile(e.target.value)}} required />
                  </div>
                  <br/>
                  <div className="InputField">
                      <label><i className="fa-solid fa-location-dot IconBasics"></i></label>
                      <input type="text" defaultValue={Address} className="InputBasics" name="Address" id="Address" placeholder="Address" onChange={(e)=>{setAddress(e.target.value)}} required />
                  </div>
                  <br/>
                  <div className="InputField">
                      <label><i className="fa-solid fa-user-tie IconBasics"></i></label>
                      <input type="text" defaultValue={Profession} className="InputBasics" name="Profession" id="Profession" placeholder="Profession" onChange={(e)=>{setProfession(e.target.value)}} required />
                  </div>
                  <br/>
                  <div className="InputField">
                      <label><i className="fa-solid fa-circle-info IconBasics"></i></label>
                      <textarea rows="2" defaultValue={Summary} className='InputBasics' onChange={(e)=>{setSummary(e.target.value)}} placeholder='Summary'></textarea>
                  </div>
                  <br/>
                  <div className="InputField">
                      <label><i className="fa-solid fa-lightbulb IconBasics"></i></label>
                      <textarea rows="2" defaultValue={Skills} className='InputBasics' onChange={(e)=>{setSkills(e.target.value)}} placeholder='Skills'></textarea>
                  </div>
                  <br/>
                  <div className="InputField">
                    <label><i className="fa-solid fa-image IconBasics"></i></label>
                    <label className='BaseInputLable'>
                      <div className='BaseInputName'>
                        {
                          (File)?
                            <p className='Photo_File_Name'>
                              {File.name}
                            </p>
                          :<div className='BaseInputIcon'>
                              Choose
                            </div>
                        }
                      </div>
                      <input id='InputTag' type='file' accept="image/png" onChange={(e)=>{setFile(e.target.files[0]);setFileUrl(URL.createObjectURL(e.target.files[0]))}} required ></input>
                    </label>
                  </div>
                  <br/>
                  <div>
                      <button className="Navigator FloatR" name="Generate" onClick={()=>{Required1()}} id="Generate">Next<i className="fa-solid fa-circle-chevron-right NaviIcon"></i></button>
                  </div>
                </div>
                :
                (Stage === 1)?
                <div className="main">
                  <h2>EDUCATION:</h2>
                  {
                    (Education.length !== 0)?
                      Education.map((key)=>{
                        return(
                          <div key={key.Major}>
                            <div className="InputField ButtonField">
                                <label><i className="fa-solid fa-book IconBasics"></i></label>
                                <input type="text" defaultValue={key.Major} disabled className="InputBasics" placeholder="Major" onChange={(e)=>{setText1(e.target.value)}} required />
                            </div>
                            <br/>
                            <div className="InputField ButtonField">
                                <label><i className="fa-solid fa-building IconBasics"></i></label>
                                <input type="text"  defaultValue={key.Ins} disabled className="InputBasics" placeholder="Institution" onChange={(e)=>{setText2(e.target.value)}} required />
                            </div>
                            <br/>
                            <div className="InputField ButtonField">
                                <label><i class="fa-solid fa-clock IconBasics"></i></label>
                                <input type="text"  defaultValue={key.Loc} disabled className="InputBasics" placeholder="Time Period" onChange={(e)=>{setText3(e.target.value)}} required />
                            </div>
                            <br/>
                            <button className='Others' onClick={()=>{DeleteEdu(key.Major)}}><i className="fa-solid fa-square-minus NaviIcon"></i>Remove</button>
                          </div>
                        )
                      }):<></>
                  }
                  {
                    [...Array(EduCount-Education.length)].map((key)=>{
                      return(
                      <div key={EduCount}>
                        <div className="InputField ButtonField">
                            <label><i className="fa-solid fa-book IconBasics"></i></label>
                            <input type="text" defaultValue={Text1} className="InputBasics" placeholder="Major" onChange={(e)=>{setText1(e.target.value)}} required />
                        </div>
                        <br/>
                        <div className="InputField ButtonField">
                            <label><i className="fa-solid fa-building IconBasics"></i></label>
                            <input type="text" defaultValue={Text2} className="InputBasics" placeholder="Institution" onChange={(e)=>{setText2(e.target.value)}} required />
                        </div>
                        <br/>
                        <div className="InputField ButtonField">
                            <label><i class="fa-solid fa-clock IconBasics"></i></label>
                            <input type="text" defaultValue={Text3} className="InputBasics" placeholder="Time Period" onChange={(e)=>{setText3(e.target.value)}} required />
                        </div>
                        <br/>
                      </div>)
                    })
                  }
                  <button className='Others' onClick={()=>{Required5()}}><i className="fa-solid fa-circle-check NaviIcon"></i>Save</button>
                  <br/>
                  <div>
                      <button className="Navigator FloatL" name="Generate" onClick={()=>{setStage(Stage-1)}} id="Generate"><i className="fa-solid fa-circle-chevron-left NaviIcon"></i>Back</button>
                  </div>
                  <div>
                      <button className="Navigator FloatR" name="Generate" onClick={()=>{Required2()}} id="Generate">Next<i className="fa-solid fa-circle-chevron-right NaviIcon"></i></button>
                  </div>
                </div>
                :
                (Stage === 2)?
                <div className="main">
                  <h2>WORK:</h2>
                  {
                    (Work.length !== 0)?
                      Work.map((key)=>{
                        return(
                          <div key={key.Pos}>
                            <div className="InputField ButtonField">
                                <label><i className="fa-solid fa-book IconBasics"></i></label>
                                <input type="text" defaultValue={key.Pos} disabled className="InputBasics" placeholder="Major" onChange={(e)=>{setText4(e.target.value)}} required />
                            </div>
                            <br/>
                            <div className="InputField ButtonField">
                                <label><i className="fa-solid fa-building IconBasics"></i></label>
                                <input type="text"  defaultValue={key.Cmp} disabled className="InputBasics" placeholder="Institution" onChange={(e)=>{setText5(e.target.value)}} required />
                            </div>
                            <br/>
                            <div className="InputField ButtonField">
                                <label><i class="fa-solid fa-clock IconBasics"></i></label>
                                <input type="text"  defaultValue={key.Loc} disabled className="InputBasics" placeholder="Time Period" onChange={(e)=>{setText6(e.target.value)}} required />
                            </div>
                            <br/>
                            <button className='Others' onClick={()=>{DeleteWrk(key.Pos)}}><i className="fa-solid fa-square-minus NaviIcon"></i>Remove</button>
                          </div>
                        )
                      }):<></>
                  }
                  {
                    [...Array(WorkCount-Work.length)].map((key)=>{
                      return(
                      <div key={WorkCount}>
                      <div className="InputField ButtonField">
                          <label><i className="fa-solid fa-user-tie IconBasics"></i></label>
                          <input type="text" className="InputBasics" placeholder="Position" onChange={(e)=>{setText4(e.target.value)}} required />
                      </div>
                      <br/>
                      <div className="InputField ButtonField">
                          <label><i className="fa-solid fa-building IconBasics"></i></label>
                          <input type="text" className="InputBasics" placeholder="Organisation" onChange={(e)=>{setText5(e.target.value)}} required />
                      </div>
                      <br/>
                      <div className="InputField ButtonField">
                          <label><i class="fa-solid fa-clock IconBasics"></i></label>
                          <input type="text" className="InputBasics" placeholder="Time Period" onChange={(e)=>{setText6(e.target.value)}} required />
                      </div>
                      <br/>
                      </div>)
                    })
                  }
                  <button className='Others' onClick={()=>{Required6()}}><i className="fa-solid fa-circle-check NaviIcon"></i>Save</button>
                  <br/>
                  <div>
                      <button className="Navigator FloatL" name="Generate" onClick={()=>{setStage(Stage-1)}} id="Generate"><i className="fa-solid fa-circle-chevron-left NaviIcon"></i>Back</button>
                  </div>
                  <div>
                      <button className="Navigator FloatR" name="Generate" onClick={()=>{Required3()}} id="Generate">Generate</button>
                  </div>
                </div>
                :
                <></>
              }
            </div>
        </div>
    </div>
  </>
  );
}

export default LandingPage;