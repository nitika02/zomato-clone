import React from "react";
import Slider from "react-slick";
import NextArrow from "../../common/carousel/nextArrow";
import PrevArrow from "../../common/carousel/prevArrow";
import "./topBrands.css"


const topBrandList = [
    {
        id: 1,
        time: "33 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/0e6f4a6a6d54c88d548abaa04a0227bc_1625164827.png?output-format=webp",
        name: "McDonald's"
    },
    {
        id: 2,
        time: "32 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252779.png?output-format=webp",
        name: "Dominos's Pizza"
    },
    {
        id: 3,
        time: "35 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188211.png?output-format=webp",
        name: "Burger King"
    },
    {
        id: 4,
        time: "29 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/d919948baa416a7dc8f85ab7d5db05c3_1611383508.png?output-format=webp",
        name: "Subway"
    },
    {
        id: 5,
        time: "32 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617874818.png?output-format=webp",
        name: "KFC"
    },
    {
        id: 6,
        time: "47 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png?output-format=webp",
        name: "Pizza Hut"
    },
    {
        id: 7,
        time: "37 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/9c390005a3b36e2f209b5868d536973f_1639679267.png?output-format=webp",
        name: "Meraki"
    },
    {
        id: 8,
        time: "37 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/144bce4c7101359f0c0b54b8fc761a6f_1648017911.png?output-format=webp",
        name: "La Pinoz"
    },
    {
        id: 9,
        time: "36 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/47c22bbd5043ef52b80a4e3d3409a368_1626810451.png?output-format=webp",
        name: "Behrouz Biryani"
    },
    {
        id: 10,
        time: "32 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/f38a3c7db2e3a79f97de3336de685e11_1583993741.png?output-format=webp",
        name: "NIC- Natural Ice Creams"
    },
];

const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
};


const TopBrands = () => {
    return (
        <div className="top-brands max-width">
            <div className="collection-title">
                Top brands for you
            </div>
            <Slider {...settings}>
                {topBrandList.map((brand) => {
                    return <div>
                        <div className="top-brands-cover">
                            <img 
                            src={brand.cover}
                            className="top-brands-image"
                            alt={brand.name} />
                        </div>
                        <div className="top-brands-text">{brand.name}</div>
                        <div className="top-brands-time">{brand.time}</div>
                    </div>
                })}
            </Slider>
        </div>
    )
}

export default TopBrands;