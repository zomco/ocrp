'use client';

import Image from "next/image";
import p3 from "@/public/ps/hp3.png";
import React from "react";


export default function P3({ shown } : { shown: boolean }) {
    return (
        <div className="relative h-screen">
            <Image
                className="absolute z-[-1] transition-all"
                fill
                quality={100}
                src={p3}
                style={{ objectFit: 'cover', opacity: shown ? '1' : '0' }}
                alt="p3"/>
        </div>
    );
}