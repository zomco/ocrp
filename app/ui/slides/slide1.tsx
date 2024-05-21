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

export default function Slide1() {
    return (
        <div className="relative h-screen">
            <Image className="absolute z-[-1]" fill src={bg} alt="bg"/>
            <Image
                className="absolute z-[1] bottom-0"
                src={dc29} alt="dc29"/>
            <Image
                className="absolute z-[2]" fill
                src={dc2} alt="dc2"/>
            <Image
                className="absolute z-[3]" fill
                src={dc3} alt="dc3"/>
            <Image
                className="absolute z-[4] top-[3%] right-[28%] w-[15%]"
                src={dc4} alt="dc4"/>
            <Image
                className="absolute z-[5] top-[8%] left-[15%] w-[14%]"
                src={dc8} alt="dc8"/>
            <Image
                className="absolute z-[6] top-[35%] right-[10%] w-[15%]"
                src={dc9} alt="dc9"/>
            <Image
                className="absolute z-[7] top-[20%] right-0 w-[20%]"
                src={dc11} alt="dc11"/>
            <Image
                className="absolute z-[8] top-[40%] left-0 w-[20%]"
                src={dc12} alt="dc12"/>
            <Image
                className="absolute z-[9] top-[52%] left-[50%] w-[40%] translate-x-[-50%]"
                src={dc22} alt="dc22"/>
            <Image
                className="absolute z-[10] bottom-[10%] left-[5%] w-[30%]"
                src={dc23} alt="dc23"/>
            <Image
                className="absolute z-[11] bottom-[10%] right-0 w-[35%]"
                src={dc24} alt="dc24"/>
            <Image
                className="absolute z-[12] top-[2%] right-[10%] w-[10%]"
                src={dc28} alt="dc28"/>
            <Image
                className="absolute z-[13] top-[40%] left-[50%] translate-x-[-50%] w-[70%]"
                src={dc27} alt="dc27"/>
            <Image
                className="absolute z-[14] top-[22%] left-[70%] translate-x-[-50%] w-[13%]"
                src={dc25} alt="dc25"/>
            <div
                className="absolute z-[22] top-[10%] left-[50%] translate-x-[-50%] w-[70%] text-center text-[23vw] text-[#26a69a] italic">暑假班
            </div>
            <div
                className="absolute z-[23] top-[22%] left-[50%] translate-x-[-50%] w-[70%] text-center text-[20vw] text-[#26a69a] italic">招生啦
            </div>
            <div
                className="absolute z-[24] top-[40%] left-[50%] translate-x-[-50%] w-[70%] text-center text-[5vw] text-white text-nowrap">秋色赛会公益类暑假班
            </div>
            <div
                className="absolute z-[25] top-[44%] left-[50%] translate-x-[-50%] w-[70%] text-center text-[17vw] text-[#26a69a] text-nowrap">邀请函
            </div>
            <div
                className="absolute z-[26] top-[70%] left-[50%] translate-x-[-50%] w-[70%] text-center text-[5vw] text-[#eb4034] text-nowrap">和孩子一起度过一个快乐的暑假
            </div>
            <div
                className="absolute z-[27] bottom-[8%] left-[50%] translate-x-[-50%] w-[70%] text-center text-[4vw] text-white text-nowrap">佛山市非物质文化遗产保护中心
            </div>
        </div>
    );
}