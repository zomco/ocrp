'use client';

import Image from "next/image";
import p5 from "@/public/ps/p5.png";
import React from "react";


export default function P5({ shown } : { shown: boolean }) {
    return (
        <div className="relative h-screen">
            <Image
                className="absolute z-[-1] transition-all"
                fill
                quality={100}
                src={p5}
                style={{ objectFit: 'cover', opacity: shown ? '1' : '0' }}
                alt="p5"/>
        </div>
    );
}