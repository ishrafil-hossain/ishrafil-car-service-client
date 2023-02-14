import React from 'react';

const BannerItem = ({ item }) => {
    const { img, id, pre, next } = item;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img rounded-xl'>
                <img src={img} alt='' className="w-full" />
            </div>
            <div className="absolute flex  transform -translate-y-1/2  right-5 bottom-0">
                <a href={`#slide${pre}`} className="btn bg-red-700 mr-2 btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn bg-red-700 btn-circle">❯</a>
            </div>
            <div className="absolute flex  transform -translate-y-1/2 lg:left-24 left-5 top-1/4">
                <p className='lg:text-6xl text-xl text-start text-white'>
                    Affordable <br />
                    Price For Car <br />
                    Servicing
                </p>
            </div>
            <div className="absolute flex  transform -translate-y-1/2 lg:left-24 left-5 top-2/4 lg:w-1/2 w-3/4">
                <p className='lg:text-xl text-sm text-start text-white mt-5 lg:mt-0'>
                    There are many variations of passages of  available, but the majority have suffered alteration in some form
                </p>
            </div>
            <div className="absolute flex  transform -translate-y-1/2 lg:left-24 lg:top-3/4 left-5 bottom-0">
                <button className="btn btn-warning mr-5">Warning</button>
                <button className="btn btn-outline btn-warning">Warning</button>
            </div>
        </div>
    );
};

export default BannerItem;