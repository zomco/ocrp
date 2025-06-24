'use client';

import Image from "next/image";
import p10 from "@/public/2024/ps/mp10.png";
import React from "react";


export default function P10({ shown } : { shown: boolean }) {
    return (
        <div className="relative h-screen">
            <Image
                className="absolute z-[-1] transition-all"
                fill
                quality={100}
                src={p10}
                style={{ objectFit: 'cover', opacity: shown ? '1' : '0' }}
                alt="p10"/>
        </div>
    );
}