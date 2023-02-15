import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

const ServicesCard = ({ service }) => {
    const { title, img, price } = service;
    return (
        <div className="card card-compact w-92 bg-base-100 shadow-xl p-6">
            <figure><img className='h-56' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{title}</h2>
                <div className="flex justify-around ">
                    <p className='text-xl text-red-600 font-semibold text-start'>Price: {price}</p>
                    <button className='text-xl text-red-600 font-semibold text-end'> <AiOutlineArrowRight/></button>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;