{/* index do layout */}

import { Outlet } from 'react-router-dom'
import Header from '../components/Header'



function DefaultLayout() {

    return(
        <>         
         <Outlet />
         <Header />       
        </>
    )
}
export default DefaultLayout