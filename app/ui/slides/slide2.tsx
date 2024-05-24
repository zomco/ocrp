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
import React from "react";
import {zcoolKuaiLe, notoSans} from '@/app/ui/fonts';
import dc29 from "@/public/slides/dc29.png";
import dc23 from "@/public/slides/dc23.png";
import dc24 from "@/public/slides/dc24.png";
import dc31 from "@/public/slides/dc31.png";

export default function Slide2({ shown } : { shown: boolean }) {
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
                >报名须知
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
                    className={`absolute w-full pt-10 px-6 text-[0.8rem] transition-all ${notoSans.className}`}
                    style={{fontWeight: 600, transform: shown ? 'translateY(0em)' : 'translateY(6rem)', opacity: shown ? '1' : '0' }}
                >
                    <p>1、本赛会课程为秋色赛会公益类暑假班；</p>
                    <p>2、课程接受社会报名，限7~16周岁的学生报名，且每人仅限参与一项，优秀作品参与赛会评比；每门课程为30个名额，额满为止；报名者须按要求认真填写真实信息，选择参与课程(“佛山剪纸”、“佛山木雕”、“岭南书法”、“大良鱼灯”
                        、“小龙舟制作”)；填写信息与本人不符者均视为自动放弃；成功报名后，请学生家长联系工作人员，加入相应的“课程通知群”；</p>
                    <p>3、由于课程的连贯性，凡报名者需确保出勤率，并积极交作品参加比赛，不得无故缺席和迟到早退，如违反上述规定将列入黑名单，影响再次参与相关活动。请家长留意上课的时间和地点，尊重小朋友的意愿和爱好，谨慎报名，坚持上课；</p>
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