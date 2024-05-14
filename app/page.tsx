import React from 'react'
import Image from 'next/image';
import bg from '../public/slides/bg.png';
import dc1 from '../public/slides/dc1.png';
import dc2 from '../public/slides/dc2.png';
import dc3 from '../public/slides/dc3.png';
import dc4 from '../public/slides/dc4.png';
import dc5 from '../public/slides/dc5.png';
import dc6 from '../public/slides/dc6.png';
import dc7 from '../public/slides/dc7.png';
import dc8 from '../public/slides/dc8.png';
import dc9 from '../public/slides/dc9.png';
import dc10 from '../public/slides/dc10.png';
import dc11 from '../public/slides/dc11.png';
import dc12 from '../public/slides/dc12.png';
import dc13 from '../public/slides/dc13.png';
import dc14 from '../public/slides/dc14.png';
import dc19 from '../public/slides/dc19.png';
import dc20 from '../public/slides/dc20.png';
import dc21 from '../public/slides/dc20.png';
import { Carousel } from 'antd';

const slides = new Array(8).fill(0);

export default async function Page() {

    return (
        <main className="flex justify-center">
            <Carousel
                className="w-screen h-screen sm:max-w-screen-sm"
                arrows={false}
                autoplay={false}
                dotPosition="left"
                infinite={false}
            >
                {
                    slides.map((slide, i) =>
                        <div className="relative h-screen" key={i}>
                            <Image className="absolute z-[-1]" fill src={bg} alt="bg"/>
                            <Image
                                className="absolute z-[1] h-[15vh] bottom-0"
                                src={dc1} alt="dc1"/>
                            <Image
                                className="absolute z-[2]" fill
                                src={dc2} alt="dc2"/>
                            <Image
                                className="absolute z-[3] scale-y-125" fill
                                src={dc3} alt="dc3"/>
                            <Image
                                className="absolute z-[4] top-[2vh] right-[22vw] w-[10vw]"
                                src={dc4} alt="dc4"/>
                            <Image
                                className="absolute z-[5] top-[8vh] left-1/2 translate-x-[-50%] w-[30vw]"
                                src={dc5} alt="dc5"/>
                            {/*<Image*/}
                            {/*    className="absolute z-[6] top-[10vh] left-1/2 translate-x-[-50%] scale-75"*/}
                            {/*    src={dc6} alt="dc6"/>*/}
                            {/*<Image*/}
                            {/*    className="absolute z-[7] top-[15vh] right-[11vh] scale-75"*/}
                            {/*    src={dc7} alt="dc7"/>*/}
                            {/*<Image*/}
                            {/*    className="absolute z-[8] top-[11vh] left-[10vh] scale-75"*/}
                            {/*    src={dc8} alt="dc8"/>*/}
                            {/*<Image*/}
                            {/*    className="absolute z-[9] top-[4vh] left-[20vw] w-[10vw]"*/}
                            {/*    src={dc9} alt="dc9"/>*/}
                            {/*<Image*/}
                            {/*    className="absolute z-[10] invisible"*/}
                            {/*    src={dc10} alt="dc10"/>*/}
                            {/*<Image*/}
                            {/*    className="absolute z-[11] top-[60vh] right-0 scale-75"*/}
                            {/*    src={dc11} alt="dc11"/>*/}
                            {/*<Image*/}
                            {/*    className="absolute z-[12] top-[50vh] left-0 scale-75"*/}
                            {/*    src={dc12} alt="dc12"/>*/}
                            {/*<Image*/}
                            {/*    className="absolute z-[13] bottom-[-7vh] left-[-5vh] scale-[0.6]"*/}
                            {/*    src={dc13} alt="dc13"/>*/}
                            {/*<Image*/}
                            {/*    className="absolute z-[14] bottom-[-4vh] right-[-3vh] scale-75"*/}
                            {/*    src={dc14} alt="dc14"/>*/}
                            {/*<div*/}
                            {/*    className="absolute z-[15]">{i}</div>*/}
                            {/*<div*/}
                            {/*    className="absolute z-[16]">text*/}
                            {/*    2*/}
                            {/*</div>*/}
                            {/*<div*/}
                            {/*    className="absolute z-[17]">text*/}
                            {/*    3*/}
                            {/*</div>*/}
                            {/*<div*/}
                            {/*    className="absolute z-[18]">text*/}
                            {/*    4*/}
                            {/*</div>*/}
                            {/*<div*/}
                            {/*    className="absolute z-[18]">text*/}
                            {/*    4*/}
                            {/*</div>*/}
                            {/*<Image*/}
                            {/*    className="absolute z-[19] invisible"*/}
                            {/*    src={dc19} alt="dc19"/>*/}
                            {/*<Image*/}
                            {/*    className="absolute z-[20] invisible"*/}
                            {/*    src={dc20} alt="dc20"/>*/}
                            {/*<Image*/}
                            {/*    className="absolute z-[21] invisible"*/}
                            {/*    src={dc21} alt="dc21"/>*/}
                        </div>
                    )
                }
            </Carousel>
        </main>
    );
}