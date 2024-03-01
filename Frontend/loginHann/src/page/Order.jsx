import {useState, useEffect} from 'react'
import clientAxios from '../config/clientAxios';


const Order = () => {

    const [order, setOrder] = useState({});

    useEffect(() => {

        const createOrder = async () => {
            const token = localStorage.getItem('token');
            if(!token){
                return
            }
            const config = {
                headers: {
                    "Content-type": "application/json",
                    'Authorization': `Bearer ${token}`
                }
            }
            try {
                const {data} = await clientAxios.post('Order/Create',config);
                console.log(data)
                setOrder(data);
            } catch (error) {
                setOrder({})
            }
        }
        createOrder();
    },[])

  return (
    <>
        <div className="flex justify-start w-full">
            {order.length ? (
                <div>Order create</div>
            ) : (
                <div>No Hay Order</div>
            )}
        </div>
    </>
  )
}

export default Order