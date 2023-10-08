import { useContext } from "react";
import PropTypes from 'prop-types'
import { AuthContext } from "../../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({children}) => {
    const location = useLocation()
    console.log(location);
    const {user, loader} = useContext(AuthContext);
    if(loader){
        return <div className="container mx-auto h-screen w-full flex justify-center items-center">
            <span className="loading loading-dots loading-lg"></span>
        </div>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

PrivateRouter.propTypes = {
    children: PropTypes.node,
}
export default PrivateRouter;