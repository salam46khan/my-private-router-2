import { useContext } from "react";
import PropTypes from 'prop-types'
import { AuthContext } from "../../provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({children}) => {
    const {user, loader} = useContext(AuthContext);
    if(loader){
        return <div className="container mx-auto h-screen w-full flex justify-center items-center">
            <span className="loading loading-dots loading-lg"></span>
        </div>
    }
    if(user){
        return children
    }
    return <Navigate to='/login'></Navigate>
};

PrivateRouter.propTypes = {
    children: PropTypes.node,
}
export default PrivateRouter;