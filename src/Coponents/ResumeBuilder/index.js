import ReactDom from 'react-dom';

import '../../Styles/Popup.css';
import '../../Styles/Resume.css';

export default function ResumeDownloadPage({ open,Req , onClose , Name , Email , Mobile , Gender , Dob , Address , Education , Skills , Certifications }){

    const downloadPdfDocument = () => {
        let printContents = document.getElementById('pdf').innerHTML;
        let originalContents = document.getElementById('root').innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
        onClose()
    };

    console.log(open)
    if (!open) return null
    return ReactDom.createPortal(
    <>
    {
        (open)?
            <div className='PopupBase'>
                <div className='PopupCenterer'>
                    <button className='ButtonBasics Download' onClick={()=>{downloadPdfDocument()}}>Download <i className="fa-solid fa-arrow-down"></i></button>
                    <button className='ButtonBasics Close' onClick={()=>{onClose()}}><i className="fa-solid fa-xmark"></i></button>
                    <div className="intextfont PopupResumeBg" id='pdf'>
                        <div className='NameDiv'>
                            <p className='bolded'>{Name}</p>
                            <p>{Gender}</p>
                            <p>{Dob}</p>
                        </div>
                        <p>{Mobile}</p>
                        <p>{Email}</p>
                        <p>{Address}</p>
                        <p className='bolded'>EDUCATION</p>
                        <p className='horline'>{Education}</p>
                        <p className='bolded'>SKILLS</p>
                        <p className='horline'>{Skills}</p>
                        <p className='bolded'>CERTIFICATIONS</p>
                        <p className='horline'>{Certifications}</p>
                    </div>
                </div>
            </div>:
            <></>
        }
    </>,
    document.getElementById( 'popup' )
    )
}