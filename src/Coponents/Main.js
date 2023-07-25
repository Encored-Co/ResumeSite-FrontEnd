import {BrowserRouter as Router , Route , Routes} from 'react-router-dom';

import Lander from './Lander';
import ResumeBuilder from './ResumeBuilder';

function Main(){

    return(
        <Router>
          <Routes>
            <Route path='/' element={<Lander />} />
            <Route path='/ResumeDownload' element={<ResumeBuilder />} />
          </Routes>
        </Router>
    )

}

export default Main;