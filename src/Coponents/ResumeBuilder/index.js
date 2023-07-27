import { useRef , useEffect } from 'react';
import { useNavigate , useLocation } from 'react-router-dom';

import { savePDF } from '@progress/kendo-react-pdf';

import Logo from '../../Images/LogoFinal.jpg';
import '../../Styles/LandingPage.css'
import '../../Styles/Popup.css';
import '../../Styles/Resume.css';
import '../../Styles/Designed_Resume.css'

import { FaPhoneAlt } from 'react-icons/fa';
import { FaLocationPin } from 'react-icons/fa6'
import { GrMail } from 'react-icons/gr'

function ResumeBuilder(){

    const Location = useLocation();
    const Navigate = useNavigate();
    const printRef = useRef();

    const downloadPdfDocument = async () => {
        savePDF(printRef.current, { paperSize:  "A4" , fileName:`${Location.state.Name} Encored Resume`});
    };

    const getBase64 = (file) => {
        return new Promise((resolve,reject) => {
           const reader = new FileReader();
           reader.onload = () => resolve(reader.result);
           reader.onerror = error => reject(error);
           reader.readAsDataURL(file);
        });
      }

    useEffect(()=>{
        getBase64(Location.state.File).then(base64 => {
            Location.state.FileUrl = base64;
            console.debug("file stored",base64);
          });
    },[])

    return(
        <>
            <div className="LandingPage_MainDiv">
                <div className="row">
                    <div className="FormSide-RP FormText column-Rp">
                        <div className="FitWidth enco">
                            <img src={Logo} className='Logo-Rp' alt="Encored Logo"/>
                        </div>
                        <div className="TextAlignments FitWidth">
                            <p className="fontBasics Title1">Encored</p>
                        </div>
                        <div className="container" ref={printRef}>
                            <div className="top">
                                <div className="ImgCol">
                                    <img className='img1' alt="enco" src={Location.state.FileUrl}/>
                                </div>
                                <div className="EmpCol">
                                    <div className="profilealign linehg" id="profilename">
                                        <p id="name" className="linespacename linespace">{Location.state.Name}</p>
                                        <p id="profiles" className="profilesize">{Location.state.Profession}</p>
                                    </div>

                                    <div className="boxes">
                                        <p className="linespace linespace" id="profile"><b>PROFILE</b></p>
                                        <p id="profiles" className="profilesz PadProf">{Location.state.Summary}</p>
                                    </div>
                                    <div className='Clear'></div>
                                </div>
                            </div>
                            <div className="bottom">
                                <div className="div21">
                                    <div>
                                        <p id="name" className="linespace spacepad"><b>CONTACT</b></p>
                                        <p id="profiles" className="profilesize"> <FaPhoneAlt className='SplSpace'/>{Location.state.Mobile}</p>
                                        <p id="profiles" className="profilesize"> <GrMail className='SplSpace'/>{Location.state.Email}</p>
                                        <p id="profiles" className="profilesize"> <FaLocationPin className="SplSpace"/>{Location.state.Address}</p>
                                    </div>
                                    <div>
                                        <p id="name" className="linespace spacepad"><b>SKILLS</b></p>
                                        <ul id="profiles" className="profilesize reducer">
                                            {
                                                Location.state.Skills.trim().split(' ').map((key)=>{
                                                    return(
                                                    <li key={key}>{key}</li>)
                                                })
                                            }
                                        </ul>
                                    </div>
                                    <div>
                                        <p id="name" className="linespace spacepad"><b>EDUCATION</b></p>
                                        {
                                            Location.state.Education.map((key)=>{
                                                return(
                                                    <>
                                                    <p id="profiles" className="profilesize" key={key.Major}>{key.Major}</p>
                                                    <p id="profiles" className="profilesize" key={key.Ins}>{key.Ins}</p>
                                                    <p id="profiles" className="profilesize" key={key.Loc}>{key.Loc}</p>
                                                    <br/>
                                                    </>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="div22">
                                    <div>
                                        <p id="name" className="linespace spacepad"><b>WORK EXPERIENCE</b></p>
                                        {
                                            Location.state.Work.map((key)=>{
                                                return(
                                                    <>
                                                    <p id="profiles" className="profilesize" key={key.Pos}>{key.Pos}</p>
                                                    <p id="profiles" className="profilesize" key={key.Cmp}>{key.Cmp}</p>
                                                    <p id="profiles" className="profilesize" key={key.Loc}>{key.Loc}</p>
                                                    <br/>
                                                    </>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className='fontBasics'>* This is just a preview. Download to see exact results.</p>
                        <div>
                            <button className="Navigator FloatL" name="Generate" onClick={()=>{
                                Navigate("/",{
                                    state:{
                                        Name:Location.state.Name,
                                        Email:Location.state.Email,
                                        Mobile:Location.state.Mobile,
                                        Summary:Location.state.Summary,
                                        Address:Location.state.Address,
                                        Profession:Location.state.Profession,
                                        Education:Location.state.Education,
                                        Work:Location.state.Work,
                                        Skills:Location.state.Skills,
                                        File:Location.state.File,
                                        FileUrl:Location.state.FileUrl
                                    }
                                })
                            }} id="Generate"><i className="fa-solid fa-circle-chevron-left NaviIcon"></i>Back</button>
                        </div>
                        <div>
                            <button className="Navigator FloatR" onClick={()=>{downloadPdfDocument()}}>Download <i className="fa-solid fa-arrow-down NaviIcon"></i></button>
                        </div>
                        <div className='Clear'></div>                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResumeBuilder;