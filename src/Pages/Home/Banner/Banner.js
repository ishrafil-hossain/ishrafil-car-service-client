import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import img5 from '../../../assets/images/banner/5.jpg';
import img6 from '../../../assets/images/banner/6.jpg';
import './Banner.css';
import BannerItem from './BannerItem';

const items = [
    {
        id: 1,
        pre: 6,
        next: 2,
        img: img1
    },
    {
        id: 2,
        pre: 1,
        next: 3,
        img: img2
    },
    {
        id: 3,
        pre: 2,
        next: 4,
        img: img3
    },
    {
        id: 4,
        pre: 3,
        next: 5,
        img: img4
    },
    {
        id: 5,
        pre: 4,
        next: 6,
        img: img5
    },
    {
        id: 6,
        pre: 5,
        next: 1,
        img: img6
    }
]

const Banner = () => {
    return (
        <div className="carousel w-full">
            {
                items.map(item => <BannerItem
                    key={item.id}
                    item={item}>
                </BannerItem>)
            }
            {/* <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} alt='' className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} alt='' className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} alt='' className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div> */}
        </div>
    );
};

export default Banner;