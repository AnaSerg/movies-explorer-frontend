import { Navigate, Outlet } from 'react-router-dom'
const PrivateRoutes = ({loggedIn}) => {

    return (
        loggedIn ? <Outlet/> : <Navigate to='/signin'/>
    )
}

export default PrivateRoutes;