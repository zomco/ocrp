'use client';

import Image from "next/image";
import p8 from "@/public/2024/ps/mp8.png";
import React from "react";


export default function P8({ shown } : { shown: boolean }) {
    return (
        <div className="relative h-screen">
            <Image
                className="absolute z-[-1] transition-all"
                fill
                quality={100}
                src={p8}
                style={{ objectFit: 'cover', opacity: shown ? '1' : '0' }}
                alt="p8"/>
        </div>
    );
}