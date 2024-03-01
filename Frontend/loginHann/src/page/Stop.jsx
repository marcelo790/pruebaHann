import {useState, useEffect} from 'react'
import clientAxios from '../config/clientAxios';

const Stop = () => {
    const [stop, setStop] = useState({});

    useEffect(() => {
        const stop = async () => {
            const token = localStorage.getItem('token');
            if(!token){
                return
            }
            const config = {
                headers: {
                    "Content-type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            try {
                const {data} = await clientAxios.post('Sim/Stop', config);
                console.log(data)
                setStop(data);
            } catch (error) {
                setStop({})
            }
        }
        stop();
    },[])
  return (
    <>
        {stop.length ? (
                <div>Stop</div>
            ) : (
                <div>No stop</div>
            )   
        }
    </>
  )
}

export default Stop