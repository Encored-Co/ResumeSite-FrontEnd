import React from "react";

import '../../Styles/Loader.css'

function Loader() {
    return(
        <div className="center">
            <div className="ring"></div>
            <span>loading...</span>
        </div>
    )
}

export default Loader;