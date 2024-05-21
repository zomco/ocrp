import React from 'react'
import Slide1 from './ui/slides/slide1';
import Slide2 from './ui/slides/slide2';
import Slide3 from './ui/slides/slide3';
import Slide4 from './ui/slides/slide4';
import Slide5 from './ui/slides/slide5';
import Slide6 from './ui/slides/slide6';
import Slide7 from './ui/slides/slide7';
import Slide8 from './ui/slides/slide8';
import Slide9 from './ui/slides/slide9';
import { Carousel } from 'antd';


export default async function Page() {

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
                >
                    <Slide1 />
                    <Slide2 />
                    <Slide3 />
                    <Slide4 />
                    <Slide5 />
                    <Slide6 />
                    <Slide7 />
                    <Slide8 />
                    <Slide9 />
                </Carousel>
            </div>

        </main>
    );
}