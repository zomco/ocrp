'use client';

import Image from "next/image";
import bg from "@/public/slides/bg.png";
import dc29 from "@/public/slides/dc29.png";
import dc2 from "@/public/slides/dc2.png";
import dc3 from "@/public/slides/dc3.png";
import dc4 from "@/public/slides/dc4.png";
import dc8 from "@/public/slides/dc8.png";
import dc9 from "@/public/slides/dc9.png";
import dc11 from "@/public/slides/dc11.png";
import dc12 from "@/public/slides/dc12.png";
import dc27 from "@/public/slides/dc27.png";
import dc28 from "@/public/slides/dc28.png";
import dc22 from "@/public/slides/dc22.png";
import dc23 from "@/public/slides/dc23.png";
import dc24 from "@/public/slides/dc24.png";
import dc25 from '@/public/slides/dc25.png';
import dc31 from '@/public/slides/dc31.png';
import React from "react";
import {mashanzheng, zcoolKuaiLe, zcoolQingKeHuangYou} from '@/app/ui/fonts';
import clsx from 'clsx';


export default function Slide1({ shown } : { shown: boolean }) {
    return (
        <div className="relative h-screen">
            <Image className="absolute z-[-1]" fill src={bg} alt="bg"/>
            <Image
                className="absolute z-[2]" fill
                src={dc2} alt="dc2"/>
            <Image
                className="absolute z-[3] transition-all" fill
                style={{transform: shown ? 'translateY(0em)' : 'translateY(8rem)', opacity: shown ? '1' : '0' }}
                src={dc3} alt="dc3"/>
            <Image className="absolute z-[10] top-3 right-6 animate-spin bg-black rounded-[50%] w-[2em] h-[2em] object-contain p-1" src={dc31} alt="dc31"/>
            <div
                className="absolute z-[4] top-[2%] left-[50%] translate-x-[-50%] w-[80%] h-[17vh]">
                <div className="absolute w-full text-center text-[#26a69a]">
                    <div className="relative">
                        <Image
                            className="absolute z-[41] top-[2%] right-[10%] w-[10%] transition-all"
                            style={{transform: shown ? 'translateY(0em)' : 'translateY(2rem)', opacity: shown ? '1' : '0' }}
                            src={dc28} alt="dc28"/>
                        <Image
                            className="absolute z-[41] top-[3%] right-[28%] w-[15%] transition-all"
                            style={{transform: shown ? 'translateY(0em)' : 'translateY(2rem)', opacity: shown ? '1' : '0' }}
                            src={dc4} alt="dc4"/>
                        <Image
                            className="absolute z-[41] top-[8%] left-[0%] w-[14%] transition-all"
                            style={{transform: shown ? 'translateY(0em)' : 'translateY(2rem)', opacity: shown ? '1' : '0' }}
                            src={dc8} alt="dc8"/>
                        <p className={`text-[7rem] italic -skew-y-6 ${zcoolQingKeHuangYou.className} transition-all`}
                           style={{fontWeight: 500, lineHeight: '10rem', opacity: shown ? '1' : '0'}}>暑假班</p>
                    </div>
                    <div className="relative">
                        <Image
                            className="absolute z-[41] top-[-25%] right-[10%] translate-x-[-50%] w-[13%] transition-all"
                            style={{transform: shown ? 'translateX(0em)' : 'translateX(2rem)', opacity: shown ? '1' : '0' }}
                            src={dc25} alt="dc25"/>
                        <Image
                            className="absolute z-[41] top-[-5%] right-0 w-[20%] transition-all"
                            style={{transform: shown ? 'translateX(0em)' : 'translateX(2rem)', opacity: shown ? '1' : '0' }}
                            src={dc11} alt="dc11"/>
                        <p
                            className={`text-[6rem] italic -skew-y-6 translate-x-[-1rem] translate-y-[-3rem] ${zcoolQingKeHuangYou.className} transition-all`}
                           style={{fontWeight: 500, lineHeight: '9rem', opacity: shown ? '1' : '0' }}>招生啦</p>
                    </div>
                    <div
                        className="relative translate-y-[-80%] left-[50%] translate-x-[-50%] w-[80%] h-[7vh]">
                        <Image
                            className="transition-all"
                            style={{transform: shown ? 'scale(1)' : 'scale(0)', opacity: shown ? '1' : '0' }}
                            fill src={dc27} alt="dc27"/>
                        <Image
                            className="absolute top-[-40%] right-[-10%] w-[15%] transition-all"
                            style={{transform: shown ? 'translateX(0em)' : 'translateX(2rem)', opacity: shown ? '1' : '0' }}
                            src={dc9} alt="dc9"/>
                        <p
                            className="absolute w-full h-full text-center content-center flex justify-center items-center text-[1.2rem] text-white text-nowrap transition-all"
                            style={{transform: shown ? 'scale(1)' : 'scale(0)', opacity: shown ? '1' : '0' }}
                        >秋色赛会公益类暑假班</p>
                    </div>
                    <div
                        className="relative translate-y-[-50%] left-[50%] translate-x-[-50%] h-[15vh]">
                        <Image
                            className="absolute top-[-10%] left-[-10%] w-[20%] transition-all"
                            style={{transform: shown ? 'translateY(0em)' : 'translateY(2rem)', opacity: shown ? '1' : '0' }}
                            src={dc12} alt="dc12"/>
                        <p
                            className={`absolute w-full h-full text-center content-center flex justify-center items-center text-[5rem] text-[#26a69a] text-nowrap ${mashanzheng.className} transition-all`}
                            style={{ opacity: shown ? '1' : '0' }}
                        >邀请函</p>
                    </div>
                    <div
                        className="relative left-[50%] translate-x-[-50%] w-[70vh] h-[17vh]">
                        <Image
                            className="absolute top-[-70%] left-[50%] translate-x-[-50%] w-[30%] transition-all"
                            style={{ opacity: shown ? '1' : '0' }}
                            src={dc22} alt="dc22"/>
                        <p
                            className={`absolute w-full h-full text-center content-center flex justify-center items-center text-[1.5rem] text-[#eb4034] text-nowrap ${zcoolKuaiLe.className} transition-all`}
                            style={{transform: shown ? 'translateY(0em)' : 'translateY(2rem)', opacity: shown ? '1' : '0' }}
                        >和孩子一起度过一个快乐的暑假</p>
                    </div>
                </div>
            </div>
            <div
                className="absolute z-[5] bottom-[0%] left-[50%] translate-x-[-50%] w-[100%] h-[10vh]">
                <Image
                    className="transition-all"
                    style={{transform: shown ? 'translateY(0em)' : 'translateY(2rem)', opacity: shown ? '1' : '0' }}
                    fill src={dc29} alt="dc29"/>
                <Image
                    className="absolute bottom-[10%] left-[5%] w-[30%] transition-all"
                    style={{transform: shown ? 'translateX(0em)' : 'translateX(-2rem)', opacity: shown ? '1' : '0' }}
                    src={dc23} alt="dc23"/>
                <Image
                    className={clsx("absolute bottom-[10%] right-[0] w-[35%] transition-all")}
                    style={{transform: shown ? 'translateX(0em)' : 'translateX(2rem)', opacity: shown ? '1' : '0' }}
                    src={dc24} alt="dc24"/>
                <p className="absolute w-full h-full text-center content-center flex justify-center items-center text-[1rem] text-white text-nowrap translate-y-5">佛山市非物质文化遗产保护中心</p>
            </div>
        </div>
    );
}