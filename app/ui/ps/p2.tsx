'use client';

import Image from "next/image";
import p2 from "@/public/ps/p2.png";
import React from "react";


export default function P2({ shown } : { shown: boolean }) {
    return (
        <div className="relative h-screen">
            <Image
                className="absolute z-[-1] transition-all"
                fill
                src={p2}
                style={{ objectFit: 'cover', opacity: shown ? '1' : '0' }}
                alt="p1"/>
        </div>
    );
}