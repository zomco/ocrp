'use client';

import React, {useRef, useState} from 'react'
import P1 from './ui/ps/p1';
import P2 from './ui/ps/p2';
import P3 from './ui/ps/p3';
import P4 from './ui/ps/p4';
import P5 from './ui/ps/p5';
import P6 from './ui/ps/p6';
import P7 from './ui/ps/p7';
import P8 from './ui/ps/p8';
import P0 from './ui/ps/p0';
import P9 from './ui/ps/p9';

import { Carousel, Result } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import {CustomArrowProps} from "@ant-design/react-slick";
import './page.css';

const SlickArrowPrev = ({ className, style, onClick }: CustomArrowProps) => (
    <div className={className} style={{ ...style, width: '100px', height: '100px'}} onClick={onClick} />
);
const SlickArrowNext = ({ className, style, onClick }: CustomArrowProps) => (
    <div className={className} style={{ ...style, width: '100px', height: '100px'}} onClick={onClick} />
);


export default function Page() {
    const [current, setCurrent] = useState(0);
    const carouselInput = useRef(null);
    const [touchStart, setTouchStart] = useState(null)
    const [touchEnd, setTouchEnd] = useState(null)

    const minSwipeDistance = 50
    const onTouchStart = (e: any) => {
        setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
        setTouchStart(e.targetTouches[0].clientY)
    }
    const onTouchMove = (e: any) => setTouchEnd(e.targetTouches[0].clientY)
    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return
        const distance = touchStart - touchEnd
        const isDownSwipe = distance > minSwipeDistance
        const isUpSwipe = distance < -minSwipeDistance
        if (isDownSwipe) {
            // @ts-ignore
            carouselInput.current.next();
        }
        if (isUpSwipe) {
            // @ts-ignore
            carouselInput.current.prev();
        }
    }
    return (
        <main className="flex justify-center">
            {/*<div className="w-screen h-dvh portrait:hidden flex justify-center items-center">*/}
            {/*    <Result*/}
            {/*        icon={<SmileOutlined />}*/}
            {/*        title="请在竖屏浏览"*/}
            {/*    />*/}
            {/*</div>*/}
            <div
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
                <Carousel
                    ref={carouselInput}
                    className="w-screen h-dvh min-[430px]:w-[430px] min-[932px]:h-[932px]"
                    arrows
                    prevArrow={<SlickArrowPrev className="w-24 h-24" />}
                    nextArrow={<SlickArrowNext />}
                    autoplay={false}
                    infinite={false}
                    fade
                    afterChange={(curr) => {
                        setCurrent(curr);
                    }}
                >
                    <P1 shown={ current === 0 }/>
                    <P2 shown={ current === 1 }/>
                    <P3 shown={ current === 2 }/>
                    <P4 shown={ current === 3 }/>
                    <P5 shown={ current === 4 }/>
                    <P6 shown={ current === 5 }/>
                    <P7 shown={ current === 6 }/>
                    <P8 shown={ current === 7 }/>
                    <P0 shown={ current === 8 }/>
                    <P9 shown={ current === 9} />
                </Carousel>
            </div>
        </main>
    );
}