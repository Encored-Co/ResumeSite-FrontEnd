import {BrowserRouter as Router , Route , Routes} from 'react-router-dom';

import Lander from './Lander';
import ResumeBuilder from './ResumeBuilder';
import ResumeReview from './Reviewer';

function Main(){

    return(
        <Router>
          <Routes>
            <Route path='/' element={<Lander />} />
            <Route path='/ResumeDownload' element={<ResumeBuilder />} />
            <Route path='/ResumeReview' element={<ResumeReview />} />
          </Routes>
        </Router>
    )

}

export default Main;