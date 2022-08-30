import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel'
import Image from 'next/image';
export default function Carousal() {
    return (
        <>
            <Carousel>
                <div style={{height:"80vh",width:"80vw"}}>
                    <Image layout='fill' src="/assets/stories.jpg" alt='sad'/>
                    <h1  className='text-white text-xl bg-black'>askhjhjasiokjd</h1>
                    <p className="legend">Legend 1</p>
                </div>
                <div style={{height:"80vh",width:"90vw"}}>
                    <Image layout='fill' src="/assets/story.jpg" alt='asdasd'/>
                    <p className="legend">Legend 2</p>
                </div>
                <div style={{height:"80vh",width:"90vw"}}>
                    <Image layout='fill' src="/assets/storyleague.jpg" alt='asdasdasda'/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel >
        </>
    )
}
