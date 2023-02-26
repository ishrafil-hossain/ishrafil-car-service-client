import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import Order from './Order';

const Orders = () => {
    const { user } = useContext(AuthContext)
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const url = `https://ishrafil-car-service-server.vercel.app/orders?email=${user?.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel order?')
        if (proceed) {
            fetch(`https://ishrafil-car-service-server.vercel.app/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = orders.filter(ord => ord._id !== id)
                        setOrders(remaining)
                        alert('You have successfully deleted your order');
                    }
                })
        }
    }

    const handleUpdate = id => {
        fetch(`https://ishrafil-car-service-server.vercel.app/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const remaining = orders.filter(ord => ord._id !== id)
                    const approved = orders.find(ord => ord._id === id)
                    approved.status = 'Approved';
                    const updatedOrders = [approved, ...remaining];
                    setOrders(updatedOrders)
                }
                console.log(data)
            })
    }

    return (

        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Action</th>
                            <th>Service</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row  */}
                        {
                            orders?.map(order => <Order
                                key={order.serviceId}
                                handleDelete={handleDelete}
                                handleUpdate={handleUpdate}
                                order={order}>

                            </Order>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;