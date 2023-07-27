import { useRef , useEffect , useState } from 'react';
import { useNavigate , useLocation } from 'react-router-dom';

import { savePDF } from '@progress/kendo-react-pdf';

import Logo from '../../Images/LogoFinal.jpg';
import '../../Styles/LandingPage.css'
import '../../Styles/Designed_Resume.css'

import { FaPhoneAlt } from 'react-icons/fa';
import { FaLocationPin } from 'react-icons/fa6'
import { GrMail } from 'react-icons/gr'

function ResumeBuilder(){

    const Location = useLocation();
    const Navigate = useNavigate();
    const printRef = useRef();

    const [ Display , setDisplay ] = useState({display:"block"})
    const [ Print , setPrint ] = useState(false);

    const Adw = () =>{
        console.log(Display)
        savePDF(printRef.current, { paperSize:  "A4" , fileName:`${Location.state.Name} Encored Resume`});
    }

    const downloadPdfDocument = async () => {
        if(Display.display === "none"){
            setDisplay({display:"block",width:"600px"});
            setPrint(true);
        }
        else{
            savePDF(printRef.current, { paperSize:  "A4" , fileName:`${Location.state.Name} Encored Resume`});
        }
    };

    useEffect(()=>{
        if(Display.display === "block" && Print){
            console.log(Display)
            savePDF(printRef.current, { paperSize:  "A4" , fileName:`${Location.state.Name} Encored Resume`});
            setDisplay({display:"none"})
        }
    },[Display])

    const getBase64 = (file) => {
        return new Promise((resolve,reject) => {
           const reader = new FileReader();
           reader.onload = () => resolve(reader.result);
           reader.onerror = error => reject(error);
           reader.readAsDataURL(file);
        });
      }

    useEffect(()=>{
        if(window.innerWidth < 540){
            setDisplay({display:"none"})
        }
        else{
            setDisplay({display:"block"})
        }
        getBase64(Location.state.File).then(base64 => {
            Location.state.FileUrl = base64;
          });
    },[])

    return(
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
                    <div className="FormSide-Rp FormText column-Rp">
                        <div className="container" style={Display} ref={printRef}>
                            <div className="top">
                                <div className="ImgCol">
                                    <img className='img1' alt="enco" src={Location.state.FileUrl}/>
                                </div>
                                <div className="EmpCol">
                                    <div className="profilealign linehg NameDiv" id="profilename">
                                        <p id="name" className="MainName">{Location.state.Name}</p>
                                        <p id="profiles" className="MainProf">{Location.state.Profession}</p>
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
                                                    <p id="profiles" className="profilesize" key={key.Major}><b>{key.Major}</b></p>
                                                    <p id="profiles" className="profilesize" key={key.Ins}>{key.Ins}</p>
                                                    <p id="profiles" className="profilesize" key={key.Loc}>{key.Loc}</p>
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
                                                    <p id="profiles" className="profilesize" key={key.Pos}><b>{key.Pos}</b></p>
                                                    <p id="profiles" className="profilesize" key={key.Cmp}>{key.Cmp}</p>
                                                    <p id="profiles" className="profilesize" key={key.Loc}>{key.Loc}</p>
                                                    </>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div >
                            <p className='fontBasics m245'>*This is just a preview. Download to see results.</p>
                            <p className='fontBasics War centerer mv'>Your Resume is Ready</p>
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
            </div>
        </>
    )
}

export default ResumeBuilder;