import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Checkout = () => {
    const { user } = useContext(AuthContext);
    const data = useLoaderData();
    const { title, price, _id } = data;

    const placeOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value}${form.lastName.value}`;
        const phone = form.phone.value;
        const email = form.email.value;
        const message = form.message.value;

        const order = {
            serviceId: _id,
            service: title,
            price,
            customer: name,
            email,
            phone,
            message
        }
        fetch('https://ishrafil-car-service-server.vercel.app/orders', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert(`Hi, ${name}. We got your order! We'll let you know when it ships and is headed your way`)
                }
            })

    }

    return (
        <div>
            <div className='ml-12'>
                <h3>Service Name: {title}</h3>
                <h3>Price of service: {price}</h3>
            </div>
            <form onSubmit={placeOrder} className='px-12 py-5'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                    <input name='firstName' type="text" placeholder="First Name" className="input input-bordered w-full" />

                    <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered w-full" />

                    <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered w-full" />

                    <input name='email' type="text" defaultValue={user?.email} placeholder="Your E-mail" className="input input-bordered w-full" readOnly />
                </div>
                <textarea name='message' className="textarea textarea-bordered w-full mt-3" placeholder="Write your message..."></textarea>
                <input className="btn btn-accent w-full mt-2" type="submit" value="Order" />
            </form>
        </div>
    );
};

export default Checkout;