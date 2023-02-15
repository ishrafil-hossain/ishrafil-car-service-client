import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center mt-32'>
                <h1 className='font-bold text-xl text-red-600 mb-4'>Service</h1>
                <h3 className='text-5xl font-bold'>Our Service Area</h3>
                <p className='w-[717px] mx-auto my-5'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}>
                    </ServicesCard>)
                }
            </div>

            <button className="btn btn-outline btn-error my-12 w-60 text-[18px] font-bold">More Services</button>
        </div>
    );
};

export default Services;