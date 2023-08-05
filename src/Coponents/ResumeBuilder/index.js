import { useRef , useEffect , useState } from 'react';
import { useNavigate , useLocation } from 'react-router-dom';
import Axios from 'axios';

import { savePDF } from '@progress/kendo-react-pdf';

import Loading from '../Loader'
import '../../Styles/LandingPage.css';
import '../../Styles/Designed_Resume.css';

import { FaPhoneAlt } from 'react-icons/fa';
import { FaLocationPin } from 'react-icons/fa6';
import { GrMail } from 'react-icons/gr';

function ResumeBuilder(){

    const Location = useLocation();
    const Navigate = useNavigate();
    const printRef = useRef();

    const [ Display , setDisplay ] = useState({display:"block"})
    const [ Print , setPrint ] = useState(false);
    const [ GptScore , setGptScore ] = useState();
    const [ Loader , setLoader ] = useState(false);

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
    
    const Explorer = async() =>{
        var i=0;
        var Edu ="";
        var Wrk ="";
        for(i=0;i<Location.state.Education;i++){
            Edu=`${Edu},Major:${Location.state.Education[i].Major},Institution:${Location.state.Education[i].Ins},TimePeriod:${Location.state.Education[i].Loc}`
            console.log("Hi",Edu);
        }

        for(i=0;i<Location.state.Work;i++){
            Wrk=`${Wrk},Position:${Location.state.Work[i].Pos},Organization:${Location.state.Work[i].Org},TimePeriod:${Location.state.Work[i].Loc}`
        }
        return Edu,Wrk;
    }

    const EducationData = Location.state.Education.reduce((result, item) => {
        return `${result}Major:${item.Major},Institution:${item.Ins},Time:${item.Loc}|`
    }, "")
      
    const WorkData = Location.state.Work.reduce((result, item) => {
        return `${result}Position:${item.Pos},Organization:${item.Cmp},Time:${item.Loc}|`
    }, "")

    useEffect(()=>{
        setLoader(true);
        Axios.put("https://kind-pink-duckling-tie.cyclic.app/PutQuerry" , {Question:`
        Photo of ${Location.state.Name}
        name: ${Location.state.Name}
        mobile: ${Location.state.Mobile}
        email: ${Location.state.Email}
        address: ${Location.state.Address}
        
        summary: ${Location.state.Summary}
        
        skills: ${Location.state.Skills}
        
        Education: ${EducationData} 
        
        Work Experience: ${WorkData}
        
        ANALYSE AND RUN A DIFFUCULT RATING OF CANDIDATE RATE OUT OF 10 WITH OVERALL RATING , MAKE THE EVALUVATION STRICT  ON EACH ASPECT BASED ON THIS INFO
        `}).then((response)=>{
            setGptScore(response.data);
            setLoader(false)
        })
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
        {
            (Loader)?
                <Loading/>
            :
            <>
                <div className='header'>
                    <p id='headiing' className='mainheader'>Craft Your Perfect Career @ Encored to Professional Success!</p>
                </div>
                <div className="AIresume">
                    <div className='Chatgptcol'>
                        <p id='suggestion' className='chatgptborder'>
                            <p className='aireport'>AI REPORT</p>
                            {GptScore}</p>
                    </div>
                    <div className='resumecol'>
                        <div className="container" style={Display} ref={printRef}>
                    <div className="top">
                        <div className="ImgCol">
                            <img className='img1' alt="enco" src={Location.state.FileUrl}/>
                        </div>
                        <div className="EmpCol">
                            <div className="profilealign" id="profilename">
                                <p id="name" className="MainName">{Location.state.Name}</p>
                                <p id="profiles" className="MainProf">{Location.state.Profession}</p>
                            </div>

                            <div className="summary">
                                <p className="linespace" id="profile"><b>PROFILE</b></p>
                                <p id="profiles" className="profilesz">{Location.state.Summary}</p>
                            </div>
                            <div className='Clear'></div>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="bottomleft">
                            <div>
                                <p id="name" className="linespace"><b>CONTACT</b></p>
                                <p id="profiles" className="profilesize"> <FaPhoneAlt className='SplSpace'/>{Location.state.Mobile}</p>
                                <p id="profiles" className="profilesize"> <GrMail className='SplSpace'/>{Location.state.Email}</p>
                                <p id="profiles" className="profilesize"> <FaLocationPin className="SplSpace"/>{Location.state.Address}</p>
                            </div>
                            <div>
                                <p id="name" className="linespace"><b>SKILLS</b></p>
                                <ul id="profiles" className="profilesize">
                                    {
                                        Location.state.Skills.trim().split(' ').map((key)=>{
                                            return(
                                            <li key={key}>{key}</li>)
                                        })
                                    }
                                </ul>
                            </div>
                            <div>
                                <p id="name" className="linespace"><b>EDUCATION</b></p>
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
                        <div className="bottomright">
                            <div>
                                <p id="name" className="linespace"><b>WORK EXPERIENCE</b></p>
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
                    </div>
                </div>
                <div className='navigationcol'>
                    <div className='navigation_col1'>
                        <button className="Navigator-R" name="Generate" onClick={()=>{
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
                    <div className='navigation_col2'>
                        <button className="Navigator-R" onClick={()=>{downloadPdfDocument()}}>Download <i className="fa-solid fa-arrow-down NaviIcon"></i></button>
                    </div>
                    <div className='Clear'></div>                        
                </div>
            </>
        }
        </>
    )
}
export default ResumeBuilder;