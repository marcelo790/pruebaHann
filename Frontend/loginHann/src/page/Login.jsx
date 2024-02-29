import {useState} from 'react';
import Alert from '../components/Alert';
import clientAxios from '../config/clientAxios';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState({});

    const navigate = useNavigate();

  const {setAuth} = useAuth();

  const handleSubmit = async e => {
    e.preventDefault();
    if([username, password].includes('')){
      setAlert({
        msg: 'Required fields',
        error: true
      });
      return
    }
    try {
      
      const {data} = await clientAxios.post('User/Login',{
        username, password
      });
      setAlert({})
      localStorage.setItem('token', data.token);
      localStorage.setItem('userName', data.userName);
      setAuth(data);
      navigate('/admin');
    } catch (error) {
      setAlert({
        msg: error.response.data.msg,
        error: true
      })
    }
  }

  const {msg} = alert;

    return (
        <>
            <div className="flex justify-center items-center ">
                <h1 className="text-gray-600 font-black text-4xl">Welcome to the Test</h1>         
            </div>
            {msg && <Alert alert={alert}/>}
            <form className="bg-white shadow rounded-lg p-5 mt-5"
                onSubmit={handleSubmit}
            >
            <div className="my-2">
                <label 
                className="uppercase text-gray-600 block text-sm font-bold"
                htmlFor="username"  
                >Username</label>
                <input
                id="username" 
                type="text"
                placeholder="Username"
                className="w-full mt-3 p-2 border rounded-xl bg-gray-50"
                value={username}
                onChange={e => setUsername(e.target.value)}

                />
            </div>
            <div className="my-2">
                <label 
                className="uppercase text-gray-600 block text-sm font-bold"
                htmlFor="password"  
                >Password </label>
                <input
                id="password" 
                type="password"
                placeholder="Password"
                className="w-full mt-3 p-2 border rounded-xl bg-gray-50"
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
            </div>
            <input 
                type="submit"
                value="Log In"
                className="bg-gray-600 w-full mb-5 mt-5 py-2 text-white text-sm uppercase font-bold rounded-xl
                hover:cursor-pointer hover:bg-gray-800 transition-colors"
            />
            </form>
        </>
    )
}

export default Login;
