"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, Globe } from 'lucide-react';

import innerImage from "@/assets/images/innerImage.webp";
import outerImage from "@/assets/images/outerImage.webp";
import shadowImage from "@/assets/images/shadowImage.webp";
import skyImage from "@/assets/images/skyImage.webp";
import cloudsImage from "@/assets/images/cloudsImage.webp";
import aboveImage from "@/assets/images/aboveImage.webp";
import skyightLogo from "@/assets/images/logo.svg";

gsap.registerPlugin(ScrollTrigger);

const SmoothScrollHero = () => {
    const mainContainer = useRef(null);
    const windowRef = useRef(null);
    const contentRef = useRef(null);
    const logoRef = useRef(null);
    const secondSectionRef = useRef(null);
    const cloudsRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: mainContainer.current,
                start: "top top",
                end: "+=400%",
                scrub: 1,
                pin: true,
                anticipatePin: 1,
            }
        });

        // 1. Zoom Content and Window towards the screen together
        tl.to(windowRef.current, {
            scale: 5,
            duration: 10,
            ease: "power2.in"
        }, 0)
            .to(contentRef.current, {
                scale: 5,
                opacity: 0,
                duration: 8,
                ease: "power2.in"
            }, 0)
            .to(".scroll-indicator", { opacity: 0, duration: 2 }, 0);

        // 2. Move Logo to Navbar (Centered top) - STOP at navbar position
        tl.to(logoRef.current, {
            y: -window.innerHeight * 0.44,
            scale: 0.6,
            duration: 8,
            ease: "power2.inOut"
        }, 0.5);

        // 3. Sky interaction (Slight zoom into the sky)
        tl.to(".sky-bg", { scale: 1.2, duration: 10 }, 0);

        // 4. Reveal Second Section Text
        tl.fromTo(secondSectionRef.current,
            { opacity: 0, y: 100, scale: 0.9 },
            { opacity: 1, y: 0, scale: 1, duration: 5 },
            7
        );

        // Constant Cloud Movement
        gsap.fromTo(
            cloudsRef.current,
            { xPercent: 0 },
            {
                xPercent: -50,
                duration: 30,
                repeat: -1,
                ease: "none",
            }
        );

    }, { scope: mainContainer });

    return (
        <div className="relative">
            {/* Fixed Sky Background - Continuous across all sections */}
            <div className="fixed inset-0 -z-50">
                <Image src={skyImage} alt="sky" fill className="object-cover object-top" priority />
            </div>

            {/* Fixed Clouds Layer */}
            <div className="fixed inset-0 -z-40 overflow-hidden">
                <div ref={cloudsRef} className="clouds-drift absolute inset-0 flex w-[500%] h-full">
                    <div className="relative w-1/2 h-full">
                        <Image src={cloudsImage} alt="clouds" fill className="object-cover opacity-60" />
                    </div>
                    <div className="relative w-1/2 h-full">
                        <Image src={cloudsImage} alt="clouds" fill className="object-cover opacity-60" />
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <div ref={mainContainer} className="relative w-full h-screen overflow-hidden">
                {/* The Zooming Portal Container (Window + Above Image) */}
                <div ref={windowRef} className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                    <div className="relative w-full h-full">
                        {/* The Plane Interior Frame */}
                        <Image src={innerImage} alt="inner" fill className="object-cover scale-[1.3] z-10" />
                        <Image src={shadowImage} alt="shadow" fill className="object-cover scale-[1.3] opacity-50 z-20" />
                        <Image src={outerImage} alt="outer" fill className="object-cover scale-[1.3] z-30" />

                        {/* The Above Image (Light fixture) */}
                        <div className="absolute top-[10%] left-[50.3%] -translate-x-1/2 w-[24%] h-auto z-10">
                            <Image
                                src={aboveImage}
                                alt="above fixture"
                                width={400}
                                height={200}
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* Text Content Container */}
                <div ref={contentRef} className="absolute inset-0 z-20 flex items-center justify-between px-20 text-white pointer-events-none">
                    {/* Left Section */}
                    <div className="hero-text-left max-w-md">
                        <h1 className="text-[66px] leading-14 tracking-tight font-bold pt-10">
                            We are<br />movement
                        </h1>
                        <div className="mt-20 space-y-4">
                            <h2 className="text-lg leading-5 font-medium">Your<br />freedom to<br />enjoy life</h2>
                            <p className="w-10 h-px bg-white" />
                            <p className="text-[11px] font-semibold leading-4 max-w-[300px]">
                                Every flight is designed around your comfort, time, and ambitions — so you can focus on what truly matters.
                            </p>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="hero-text-right max-w-md flex flex-col items-end">
                        <h1 className="text-[60px] font-bold leading-14 text-right pt-20">
                            We are<br />distinction
                        </h1>
                    </div>
                </div>

                {/* CENTRAL LOGO - Will stay fixed at navbar position */}
                <div className="absolute inset-0 flex items-center justify-center z-[200] pointer-events-none">
                    <Image ref={logoRef} src={skyightLogo}
                        alt="Skyight Logo"
                        width={250}
                        className="object-cover"
                        priority />
                </div>

                {/* Scroll Indicator */}
                <div className="scroll-indicator absolute bottom-20 right-20 z-20 text-white w-[25%]">
                    <div className="mb-4 h-[1px] w-full bg-white" />
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-[9px] font-bold tracking-tight">
                            <div className="flex flex-col -space-y-2">
                                <ChevronDown size={15} />
                                <ChevronDown size={15} className='-mt-[11px]' />
                                <ChevronDown size={15} className='-mt-[11px]' />
                            </div>
                            <span>SCROLL DOWN</span>
                        </div>
                        <button className="text-[9px] font-bold tracking-tight">
                            TO START THE JOURNEY
                        </button>
                    </div>
                </div>

                {/* Second Section Animated Text */}
                <div ref={secondSectionRef} className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center text-white px-10 pointer-events-none opacity-0">
                    <h2 className="text-[44px] md:text-[54px] font-light max-w-5xl leading-tight">
                        <span className="font-bold">Jesko Jets®</span> is a private aviation operator with over 5,000 missions completed across 150+ countries.
                    </h2>
                </div>
            </div>

            {/* About Section - Shares the same background */}
            <div className="relative w-full min-h-screen">
                {/* Content Container */}
                <div className="relative px-20 py-16">
                    {/* Top Left - Logo and EST */}
                    <div className="flex items-center gap-4 mb-32">
                        <div className="flex items-center gap-2">
                            <Globe className="w-8 h-8 text-white" strokeWidth={1} />
                            <span className="text-[32px] font-light text-white tracking-wide">JR</span>
                        </div>
                        <div className="flex items-start gap-6">
                            <div className="text-white text-[9px] leading-tight tracking-wide">
                                <div className="font-bold">EST.</div>
                                <div className="font-normal">2018</div>
                            </div>
                            <div className="text-white text-[9px] leading-tight tracking-wide pt-[1px]">
                                <div className="font-normal">BY EVGENY DEMIDENKO</div>
                            </div>
                        </div>
                    </div>

                    {/* Content Grid - 2 rows, 2 columns */}
                    <div className="grid grid-cols-2 gap-x-32 gap-y-28">
                        {/* Row 1 - Card 1 */}
                        <div className="space-y-5">
                            <h2 className="text-[42px] font-light text-white leading-[1.15]">
                                Direct Access to<br />Private Travel
                            </h2>
                            <div className="w-12 h-[1px] bg-white/50" />
                            <p className="text-white text-[13px] leading-relaxed max-w-md font-normal">
                                Fly beyond boundaries with Jesko Jets. Our global operations ensure seamless, personalized travel experiences — from the first call to landing. Every journey is tailored to your comfort, privacy, and schedule.
                            </p>
                        </div>

                        {/* Row 1 - Card 2 */}
                        <div className="space-y-5">
                            <h2 className="text-[42px] font-light text-white leading-[1.15]">
                                Your Freedom to<br />Enjoy Life
                            </h2>
                            <div className="w-12 h-[1px] bg-white/50" />
                            <p className="text-white text-[13px] leading-relaxed max-w-md font-normal">
                                We value your time above all. Jesko Jets gives you the freedom to live, work, and relax wherever life takes you — without compromise.
                            </p>
                        </div>

                        {/* Row 2 - Card 3 */}
                        <div className="space-y-5">
                            <h2 className="text-[42px] font-light text-white leading-[1.15]">
                                Precision and<br />Excellence
                            </h2>
                            <div className="w-12 h-[1px] bg-white/50" />
                            <p className="text-white text-[13px] leading-relaxed max-w-md font-normal">
                                Each detail of your flight — from route planning to in-flight service — reflects our dedication to perfection. Our crew and fleet meet the highest global standards, ensuring reliability in every mission.
                            </p>
                        </div>

                        {/* Row 2 - Card 4 */}
                        <div className="space-y-5">
                            <h2 className="text-[42px] font-light text-white leading-[1.15]">
                                Global Reach,<br />Personal Touch
                            </h2>
                            <div className="w-12 h-[1px] bg-white/50" />
                            <p className="text-white text-[13px] leading-relaxed max-w-md font-normal">
                                With access to destinations in over 150 countries, Jesko Jets brings the world closer to you. Our experts manage every aspect of your flight, guaranteeing a smooth and effortless journey.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SmoothScrollHero;