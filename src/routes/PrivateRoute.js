
import { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';
import { Navigate, useLocation } from 'react-router-dom';


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
 
    if(loading){
        console.log('yes login found');
        return <div className="">Loading....</div>
    }
    
    if(user && user?.uid){  
        return children;
    }
   return <Navigate to='/login' state ={{from: location}}replace></Navigate>
};

export default PrivateRoute;