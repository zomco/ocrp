import Image from "next/image";
import bg from "@/public/slides/bg.png";
import dc1 from "@/public/slides/dc1.png";
import dc2 from "@/public/slides/dc2.png";
import dc3 from "@/public/slides/dc3.png";
import dc4 from "@/public/slides/dc4.png";
import dc5 from "@/public/slides/dc5.png";
import dc6 from "@/public/slides/dc6.png";
import dc7 from "@/public/slides/dc7.png";
import dc8 from "@/public/slides/dc8.png";
import dc9 from "@/public/slides/dc9.png";
import dc11 from "@/public/slides/dc11.png";
import dc12 from "@/public/slides/dc12.png";
import dc13 from "@/public/slides/dc13.png";
import dc14 from "@/public/slides/dc14.png";
import dc30 from "@/public/slides/dc30.png";
import React from "react";
import {notoSans, zcoolKuaiLe} from '@/app/ui/fonts';
import dc31 from "@/public/slides/dc31.png";


export default function Slide7({ shown } : { shown: boolean }) {
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
            <div className="absolute z-[5] top-[10%] left-[50%] translate-x-[-50%] w-[50vw] h-[8vh]">
                <Image
                    className="transition-all"
                    style={{transform: shown ? 'translateY(0em)' : 'translateY(-2rem)', opacity: shown ? '1' : '0' }}
                    fill src={dc5} alt="dc5"/>
                <Image
                    className="absolute top-[-50%] right-[2%] w-[30%] transition-all"
                    style={{transform: shown ? 'translateY(0em)' : 'translateY(2rem)', opacity: shown ? '1' : '0' }}
                    src={dc4} alt="dc4"/>
                <Image
                    className="absolute top-[11%] left-[-30%] w-[30%] transition-all"
                    style={{transform: shown ? 'rotate(0)' : 'rotate(-30deg)', opacity: shown ? '1' : '0' }}
                    src={dc8} alt="dc8"/>
                <Image
                    className="absolute top-[-50%] left-[15%] w-[30%] transition-all"
                    style={{transform: shown ? 'scale(1)' : 'scale(0)', opacity: shown ? '1' : '0' }}
                    src={dc9} alt="dc9"/>
                <div
                    className={`absolute w-full h-full px-6 text-[1.5rem] text-white text-center content-center ${zcoolKuaiLe.className} transition-all`}
                    style={{transform: shown ? 'translateY(0em)' : 'translateY(-2rem)', opacity: shown ? '1' : '0' }}
                >授课地点
                </div>
            </div>
            <div className="absolute z-[6] top-[20%] left-[50%] translate-x-[-50%] w-[80vw] h-[60vh]">
                <Image
                    className="transition-all"
                    style={{transform: shown ? 'translateY(0em)' : 'translateY(6rem)', opacity: shown ? '1' : '0' }}
                    fill src={dc6} alt="dc6"/>
                <Image
                    className="absolute top-[40%] left-[-12%] w-[20%] transition-all"
                    style={{transform: shown ? 'translateX(0em)' : 'translateX(2rem)', opacity: shown ? '1' : '0' }}
                    src={dc12} alt="dc12"/>
                <Image
                    className="absolute top-[50%] right-[-12%] w-[20%] transition-all"
                    style={{transform: shown ? 'translateX(0em)' : 'translateX(-2rem)', opacity: shown ? '1' : '0' }}
                    src={dc11} alt="dc11"/>
                <Image
                    className="absolute top-[-6%] right-[10%] w-[15%] transition-all"
                    style={{transform: shown ? 'translateX(0em)' : 'translateX(-2rem)', opacity: shown ? '1' : '0' }}
                    src={dc7} alt="dc7"/>
                <div
                    className="absolute w-full pt-10 px-6 text-[0.8rem] transition-all"
                    style={{transform: shown ? 'translateY(0em)' : 'translateY(6rem)', opacity: shown ? '1' : '0' }}
                >
                    <Image
                        className="w-full"
                        src={dc30} alt="dc15"/>
                    <div
                        className={`mt-4 text-center content-center ${notoSans.className}`}
                        style={{ fontWeight: 600 }}
                    >
                        <p>授课地点：顺联公园里三楼中庭</p>
                        <p>（佛山市南海区季华东路27号）</p>
                        <p>活动咨询：廖老师 0757-28338073</p>
                    </div>
                </div>
            </div>
            <div className="absolute z-[7] bottom-[0%] left-[50%] translate-x-[-50%] w-[100vw] h-[10vh]">
                <Image
                    className="transition-all"
                    style={{transform: shown ? 'translateY(0em)' : 'translateY(2rem)', opacity: shown ? '1' : '0' }}
                    fill src={dc1} alt="dc1"/>
                <Image
                    className="absolute top-[-100%] left-0 w-[35%] transition-all"
                    style={{transform: shown ? 'translateX(0em)' : 'translateX(-2rem)', opacity: shown ? '1' : '0' }}
                    src={dc13} alt="dc13"/>
                <Image
                    className="absolute top-[-75%] right-0 w-[50%] transition-all"
                    style={{transform: shown ? 'translateX(0em)' : 'translateX(2rem)', opacity: shown ? '1' : '0' }}
                    src={dc14} alt="dc14"/>
            </div>
        </div>
    );
}