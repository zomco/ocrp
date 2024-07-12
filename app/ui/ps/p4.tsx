'use client';

import Image from "next/image";
import p4 from "@/public/ps/hp4.png";
import React from "react";


export default function P4({ shown } : { shown: boolean }) {
    return (
        <div className="relative h-screen">
            <Image
                className="absolute z-[-1] transition-all"
                fill
                quality={100}
                src={p4}
                style={{ objectFit: 'cover', opacity: shown ? '1' : '0' }}
                alt="p4"/>
        </div>
    );
}