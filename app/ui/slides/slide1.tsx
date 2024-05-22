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
import React from "react";
import {mashanzheng, zcoolKuaiLe, zcoolQingKeHuangYou} from '@/app/ui/fonts';


export default function Slide1() {
    return (
        <div className="relative h-screen">
            <Image className="absolute z-[-1]" fill src={bg} alt="bg"/>
            <Image
                className="absolute z-[2]" fill
                src={dc2} alt="dc2"/>
            <Image
                className="absolute z-[3]" fill
                src={dc3} alt="dc3"/>
            <div
                className="absolute z-[4] top-[2%] left-[50%] translate-x-[-50%] w-[80vw] h-[17vh]">
                <div className="absolute w-full text-center text-[#26a69a]">
                    <div className="relative">
                        <Image
                            className="absolute z-[41] top-[2%] right-[10%] w-[10%]"
                            src={dc28} alt="dc28"/>
                        <Image
                            className="absolute z-[41] top-[3%] right-[28%] w-[15%]"
                            src={dc4} alt="dc4"/>
                        <Image
                            className="absolute z-[41] top-[8%] left-[0%] w-[14%]"
                            src={dc8} alt="dc8"/>
                        <p className={`text-[7rem] italic -skew-y-6 ${zcoolQingKeHuangYou.className}`}
                           style={{fontWeight: 500, lineHeight: '10rem'}}>暑假班</p>
                    </div>
                    <div className="relative">
                        <Image
                            className="absolute z-[41] top-[-25%] right-[10%] translate-x-[-50%] w-[13%]"
                            src={dc25} alt="dc25"/>
                        <Image
                            className="absolute z-[41] top-[-5%] right-0 w-[20%]"
                            src={dc11} alt="dc11"/>
                        <p className={`text-[6rem] italic -skew-y-6 translate-x-[-1rem] translate-y-[-3rem] ${zcoolQingKeHuangYou.className}`}
                           style={{fontWeight: 500, lineHeight: '9rem'}}>招生啦</p>
                    </div>
                    <div
                        className="relative translate-y-[-80%] left-[50%] translate-x-[-50%] w-[80vw] h-[7vh]">
                        <Image fill src={dc27} alt="dc27"/>
                        <Image
                            className="absolute top-[-40%] right-[-10%] w-[15%]"
                            src={dc9} alt="dc9"/>
                        <p className="absolute w-full h-full text-center content-center text-[1.2rem] text-white text-nowrap">秋色赛会公益类暑假班</p>
                    </div>
                    <div
                        className="relative translate-y-[-50%] left-[50%] translate-x-[-50%] w-[70vw] h-[15vh]">
                        <Image
                            className="absolute top-[-10%] left-[-15%] w-[30%]"
                            src={dc12} alt="dc12"/>
                        <p className={`absolute w-full h-full text-center content-center text-[5rem] text-[#26a69a] text-nowrap ${mashanzheng.className}`}>邀请函</p>
                    </div>
                    <div
                        className="relative left-[50%] translate-x-[-50%] w-[70vh] h-[17vh]">
                        <Image
                            className="absolute top-[-70%] left-[50%] translate-x-[-50%] w-[30%]"
                            src={dc22} alt="dc22"/>
                        <p className={`absolute w-full h-full text-center content-center text-[1.5rem] text-[#eb4034] text-nowrap ${zcoolKuaiLe.className}`}>和孩子一起度过一个快乐的暑假</p>
                    </div>
                </div>
            </div>
            <div
                className="absolute z-[5] bottom-[0%] left-[50%] translate-x-[-50%] w-[100vw] h-[10vh]">
                <Image fill src={dc29} alt="dc29"/>
                <Image
                    className="absolute bottom-[10%] left-[5%] w-[30%]"
                    src={dc23} alt="dc23"/>
                <Image
                    className="absolute bottom-[10%] right-0 w-[35%]"
                    src={dc24} alt="dc24"/>
                <p className="absolute w-full h-full text-center content-center text-[1rem] text-white text-nowrap translate-y-5">佛山市非物质文化遗产保护中心</p>
            </div>
        </div>
    );
}