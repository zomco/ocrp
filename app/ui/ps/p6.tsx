'use client';

import Image from "next/image";
import p6 from "@/public/ps/hp6.png";
import React from "react";


export default function P6({ shown } : { shown: boolean }) {
    return (
        <div className="relative h-screen">
            <Image
                className="absolute z-[-1] transition-all"
                fill
                quality={100}
                src={p6}
                style={{ objectFit: 'cover', opacity: shown ? '1' : '0' }}
                alt="p6"/>
        </div>
    );
}