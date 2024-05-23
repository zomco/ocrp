'use client';

import React, {useState} from 'react'
import Slide1 from './ui/slides/slide1';
import Slide2 from './ui/slides/slide2';
import Slide3 from './ui/slides/slide3';
import Slide4 from './ui/slides/slide4';
import Slide5 from './ui/slides/slide5';
import Slide6 from './ui/slides/slide6';
import Slide7 from './ui/slides/slide7';
import Slide8 from './ui/slides/slide8';
import Slide9 from './ui/slides/slide9';
import Slide10 from './ui/slides/slide10';
import Slide11 from './ui/slides/slide11';
import Slide12 from './ui/slides/slide12';
import Slide13 from './ui/slides/slide13';
import Slide14 from './ui/slides/slide14';
import Slide15 from './ui/slides/slide15';
import { Carousel } from 'antd';


export default function Page() {
    const [current, setCurrent] = useState(1);
    return (
        <main className="flex justify-center">
            <div className="w-screen h-screen portrait:hidden flex justify-center items-center">
                请在竖屏浏览
            </div>
            <div className="landscape:hidden">
                <Carousel
                    className="w-screen h-screen min-[430px]:w-[430px] min-[932px]:h-[932px]"
                    arrows={false}
                    autoplay={false}
                    dotPosition="left"
                    infinite={false}
                    fade
                    afterChange={(curr) => {
                        console.log(current, curr);
                        setCurrent(curr);
                    }}
                >
                    <Slide1 shown={ current === 0 }/>
                    <Slide2 shown={ current === 1 }/>
                    <Slide3 shown={ current === 2 }/>
                    <Slide4 shown={ current === 3 }/>
                    <Slide5 shown={ current === 4 }/>
                    <Slide6 shown={ current === 5 }/>
                    <Slide7 shown={ current === 6 }/>
                    <Slide8 shown={ current === 7 }/>
                    <Slide9 shown={ current === 8 }/>
                    <Slide10 shown={ current === 9 }/>
                    <Slide11 shown={ current === 10 }/>
                    <Slide12 shown={ current === 11 }/>
                    <Slide13 shown={ current === 12 }/>
                    <Slide14 shown={ current === 13 }/>
                    <Slide15 shown={ current === 14 }/>
                </Carousel>
            </div>
        </main>
    );
}