import React, { useEffect, useState } from 'react';

const Order = ({ order, handleDelete, handleUpdate }) => {
    const { service, serviceId, price, _id, status } = order;
    const [services, setServices] = useState({});

    useEffect(() => {
        fetch(`https://ishrafil-car-service-server.vercel.app/service/${serviceId}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [serviceId])

    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-ghost">Delete</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            <img src={services.img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{service}</div>
                    </div>
                </div>
            </td>
            <td>
                {price}
            </td>
            <td>Purple</td>
            <th>
                <button onClick={() => handleUpdate(_id)}
                    className="btn btn-ghost btn-xs">{status ? status : 'Pending'}</button>
            </th>
        </tr>
    );
};

export default Order;