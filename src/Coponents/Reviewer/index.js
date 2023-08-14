import { useNavigate , useLocation } from 'react-router-dom';

import '../../Styles/LandingPage.css';
import '../../Styles/Designed_Resume.css';

function ResumeBuilder(){

    const Location = useLocation();
    const Navigate = useNavigate();


    return(
        <>
        {
            <>
                <div className='header'>
                    <p id='headiing' className='mainheader'>Craft Your Perfect Career @ Encored to Professional Success!</p>
                </div>
                <div className="AIresume">
                    <div className='Chatgptcol-F'>
                        <p id='suggestion' className='chatgptborder-F'>
                            <p className='aireport'>AI REPORT</p>
                            {Location.state.Report}
                        </p>
                    </div>
                </div>
                <div className='navigationcol-F'>
                    <button className="Navigator-F" name="Generate" onClick={()=>{
                        Navigate("/")
                    }} id="Generate"><i className="fa-solid fa-circle-chevron-left NaviIcon"></i>Back</button>                        
                </div>
            </>
        }
        </>
    )
}
export default ResumeBuilder;