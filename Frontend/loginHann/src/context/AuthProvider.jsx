import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState({});
    const [loading, setLoading] = useState(true);

    const navigate  = useNavigate();

    useEffect(() => {
        const authenticateUser = () => {
            //localStorage.clear();
            const token = localStorage.getItem('token');
            const userName = localStorage.getItem('userName');
            if(!token){
                setLoading(false);
                return
            }      
            try {
                setAuth({userName,token});
                navigate('/admin')
            } catch (error) {
                setAuth({})
            }            
            setLoading(false);
        }
        authenticateUser();
    },[])

    return (
        <AuthContext.Provider
            value={{
                setAuth,
                auth,
                loading
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthProvider
}

export default AuthContext;