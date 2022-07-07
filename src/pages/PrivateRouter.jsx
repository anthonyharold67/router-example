import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
// import {useNavigate} from "react-router-dom"

const PrivateRouter = () => {
    const isAuthenticated= false;
    // const navigate = useNavigate()
    // React.useEffect(()=>{
    //     if(!isAuthenticated){
    //         navigate("/")
    //     }
    // },[isAuthenticated])

    // return isAuthenticated && <Outlet/>
    return isAuthenticated ? <Outlet/> : <Navigate to="/" />
   
    
}

export default PrivateRouter