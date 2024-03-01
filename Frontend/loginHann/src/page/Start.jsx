import {useState, useEffect} from 'react'
import clientAxios from '../config/clientAxios';

const Start = () => {

    const [start, setStart] = useState({});

    useEffect(() => {
        const start = async () => {
            const token = localStorage.getItem('token');
            
            if(!token){
                return
            }
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
            try {
                const {data} = await clientAxios.post('Sim/Start',config);
                console.log(data)
                setStart(data);
            } catch (error) {
                console.log(error.message)
                setStart({})
            }
        }
        start();
    },[])
  return (
    <>
        {start.length ? (
                <div>Start</div>
            ) : (
                <div>No Start</div>
            )            
        }
        
    </>
  )
}

export default Start