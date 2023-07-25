import { useRef } from 'react';
import { useLocation } from 'react-router-dom';

import { savePDF } from '@progress/kendo-react-pdf';

import Logo from '../../Images/LogoFinal.jpg';
import '../../Styles/LandingPage.css'
import '../../Styles/Popup.css';
import '../../Styles/Resume.css';

function ResumeBuilder(){

    const Location = useLocation();
    console.log(Location.state)
    const printRef = useRef();

    const downloadPdfDocument = async () => {
        savePDF(printRef.current, { paperSize:  "A4" });
    };

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
                            <button className="LearnMore" name="Learn" id="LearnMore">Learn More</button>
                        </div>
                    </div>
                    <div className="FormSide FormText column">
                        <div className='PopupResumeBg Cen'>
                            <div className="intextfont PopupResumeBg" id='pdf' ref={printRef}>
                                <div className='NameDiv'>
                                    <p className='bolded'>{Location.state.Name}</p>
                                    <p>{Location.state.Gender}</p>
                                    <p>{Location.state.Dob}</p>
                                </div>
                                <p>{Location.state.Mobile}</p>
                                <p>{Location.state.Email}</p>
                                <p>{Location.state.Address}</p>
                                <p className='bolded'>EDUCATION</p>
                                <p className='horline'>{Location.state.Education}</p>
                                <p className='bolded'>SKILLS</p>
                                <p className='horline'>{Location.state.Skills}</p>
                                <p className='bolded'>CERTIFICATIONS</p>
                                <p className='horline'>{Location.state.Certifications}</p>
                            </div>
                            <button className='ButtonBasics Download' onClick={()=>{downloadPdfDocument()}}>Download <i className="fa-solid fa-arrow-down"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResumeBuilder;