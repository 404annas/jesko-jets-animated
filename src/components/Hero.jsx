"use client"

import React, { useRef } from 'react';
import Image from 'next/image';
import innerImage from "@/assets/images/innerImage.webp";
import outerImage from "@/assets/images/outerImage.webp";
import shadowImage from "@/assets/images/shadowImage.webp";
import aboveImage from "@/assets/images/aboveImage.webp";
import skyImage from "@/assets/images/skyImage.webp";
import cloudsImage from "@/assets/images/cloudsImage.webp";

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Hero = () => {
    const container = useRef(null);
    const cloudRef = useRef(null);

    useGSAP(() => {
        gsap.to(cloudRef.current, {
            xPercent: -50, // Move left by half the width of the container
            duration: 20,  // Adjust speed
            ease: "none",
            repeat: -1
        })
    }, { scope: container });

    return (
        <div ref={container} className="fixed inset-0 w-full h-full -z-10">

            {/* Inner Image - peeche */}
            <div className="absolute inset-0 -z-40">
                <Image
                    src={innerImage}
                    alt="Inner Background"
                    fill
                    className="object-cover -scale-128 sm:scale-128"
                    priority
                    quality={100}
                    style={{ objectFit: "cover" }}
                />
            </div>

            <div className="absolute inset-0 -z-45 overflow-hidden">
                <div
                    ref={cloudRef}
                    className="flex w-[200%] h-full"
                >
                    <div className="relative w-full h-full">
                        <Image
                            src={cloudsImage}
                            alt="Clouds"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="relative w-full h-full">
                        <Image
                            src={cloudsImage}
                            alt="Clouds"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Outer Image - upar */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src={outerImage}
                    alt="Outer Background"
                    fill
                    className="object-cover -scale-128 sm:scale-128"
                    priority
                    quality={100}
                    style={{ objectFit: "cover" }}
                />
            </div>

            {/* Shadow Image */}
            <div className="absolute inset-0 -z-20">
                <Image
                    src={shadowImage}
                    alt="Shadow Background"
                    fill
                    className="object-cover -scale-150 sm:scale-150"
                    priority
                    quality={100}
                    style={{ objectFit: "cover" }}
                />
            </div>

            {/* Sky Image */}
            <div className="absolute inset-0 -z-50">
                <Image
                    src={skyImage}
                    alt="Sky Background"
                    fill
                    className="object-cover object-top"
                    priority
                    quality={100}
                    style={{ objectFit: "cover" }}
                />
            </div>

            {/* Clouds Image */}
            {/* <div className="absolute inset-0 -z-50">
                <Image
                    src={cloudsImage}
                    alt="Clouds Background"
                    fill
                    className="object-cover"
                    priority
                    quality={100}
                    style={{ objectFit: "cover" }}
                />
            </div> */}

            {/* Upper Image */}
            <div className="absolute top-14.5 left-[38%] -z-40 w-[80%] h-auto">
                <Image
                    src={aboveImage}
                    alt="Above Background"
                    width={330}        // desired width
                    height={200}        // maintain aspect ratio
                    className="object-contain"
                    priority
                    quality={100}
                />
            </div>

        </div>
    );
};

export default Hero;
