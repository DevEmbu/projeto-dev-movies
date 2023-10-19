{/* index do layout */}

import { Outlet } from "react-router-dom";
import Header from "../components/Header";



function Defaultlayout() {

    return(
        <>
          {/* <Header /> */}
          <Outlet />
      
        </>
    )
}
export default Defaultlayout