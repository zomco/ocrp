'use client';

import Image from "next/image";
import p9 from "@/public/ps/p9.png";
import React from "react";


export default function P9({ shown } : { shown: boolean }) {
    return (
        <div className="relative h-screen">
            <Image
                className="absolute z-[-1] transition-all"
                fill
                src={p9}
                style={{ objectFit: 'cover', opacity: shown ? '1' : '0' }}
                alt="p9"/>
        </div>
    );
}