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
            <div className='header'>
                <p id='headiing' className='mainheader'>Craft Your Perfect Career @ Encored to Professional Success!</p>
            </div>
            <div className="AIresume">
                <div className='Chatgptcol'>
                    <p id='suggestion' className='chatgptborder'>
                        <p className='aireport'>AI REPORT</p>
                        The computer is one of modern science’s marvels. Its origins can be traced back to the mechanical calculating machine invented in 1834 by Charles Babbage, an English mathematician.
                        Because of the lack of engineering skill at the time, the machine was unable to fully realise Babbage’s vision.
                        Computers today are electronic. A computer can operate at high speeds because it is powered by a small current of electricity.
                        It can perform calculations on very large numbers in a very short period of time using stored information and data.
                        It can perform calculations on very large numbers in a very short period of time using stored information and data.
                        It can perform calculations on very large numbers in a very short period of time using stored information and data.
                        It can perform calculations on very large numbers in a very short period of time using stored information and data.
                        It can perform calculations on very large numbers in a very short period of time using stored information and data.
                        It can perform calculations on very large numbers in a very short period of time using stored information and data.
                        It can perform calculations on very large numbers in a very short period of time using stored information and data.
                        It can perform calculations on very large numbers in a very short period of time using stored information and data.
                        It can perform calculations on very large numbers in a very short period of time using stored information and data.
                        It can perform calculations on very large numbers in a very short period of time using stored information and data.
                        It can perform calculations on very large numbers in a very short period of time using stored information and data.
                        A computer can add, subtract, multiply, and divide large numbers in seconds. Even an expert mathematician would take much longer to complete such calculations.
                        Computers are now widely used in all advanced countries for data processing, which includes fact compilation, correlation, and selection. The use of computers is increasing in all fields of research, industry, and business.
                        Computers have numerous advantages. They save time, speed up work, save labour, and reduce costs in the long run. They are used in educational institutions, industries, research laboratories, government departments, and so on in all advanced countries.</p>
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
                    <button className="Navigator" name="Generate" onClick={()=>{
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
                    <button className="Navigator" onClick={()=>{downloadPdfDocument()}}>Download <i className="fa-solid fa-arrow-down NaviIcon"></i></button>
                </div>
                <div className='Clear'></div>                        
            </div>
        </>
    )
}
export default ResumeBuilder;