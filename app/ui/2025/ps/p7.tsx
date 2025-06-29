'use client';

import Image from "next/image";
import p7 from "@/public/2025/ps/mp7.png";
import React from "react";


export default function P7({ shown } : { shown: boolean }) {
    return (
        <div className="relative h-screen">
            <Image
                className="absolute z-[-1] transition-all"
                fill
                quality={100}
                src={p7}
                style={{ objectFit: 'cover', opacity: shown ? '1' : '0' }}
                alt="p7"/>
        </div>
    );
}