"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';

import innerImage from "@/assets/images/innerImage.webp";
import outerImage from "@/assets/images/outerImage.webp";
import shadowImage from "@/assets/images/shadowImage.webp";
import skyImage from "@/assets/images/skyImage.webp";
import cloudsImage from "@/assets/images/cloudsImage.webp";
import aboveImage from "@/assets/images/aboveImage.webp";
import skyightLogo from "@/assets/images/logo.svg";
import About from './About';
import Navbar from './Navbar'; // Ensure Navbar is imported

gsap.registerPlugin(ScrollTrigger);

const SmoothScrollHero = () => {
    const scopeRef = useRef(null); // New scope for the entire component
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

        // 1. Zoom Content and Window
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

        // 2. Move Logo to Navbar position (Now it stays fixed because parent is fixed)
        tl.to(logoRef.current, {
            y: -window.innerHeight * 0.44, // Adjust this value to align perfectly with your navbar items
            scale: 0.6,
            duration: 8,
            ease: "power2.inOut"
        }, 0.5);

        // 3. Sky interaction
        tl.to(".sky-bg", { scale: 1.2, duration: 10 }, 0);

        // 4. Reveal Second Section Text (The reveal animation you requested)
        tl.fromTo(secondSectionRef.current,
            {
                opacity: 0,
                y: 150,
                scale: 0.85,
                filter: "blur(10px)"
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
                duration: 7,
                ease: "power3.out"
            },
            9
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

    }, { scope: scopeRef }); // Scope changed to scopeRef to include the fixed logo

    return (
        <div ref={scopeRef} className="relative">
            <Navbar />

            {/* FIXED LOGO LAYER - This stays on screen even when mainContainer scrolls away */}
            <div className="fixed inset-0 flex items-center justify-center z-[200] pointer-events-none">
                <Image
                    ref={logoRef}
                    src={skyightLogo}
                    alt="Skyight Logo"
                    width={250}
                    className="object-cover"
                    priority
                />
            </div>

            {/* Fixed Sky Background */}
            <div className="fixed inset-0 -z-50">
                <Image src={skyImage} alt="sky" fill className="object-cover object-bottom" priority />
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

            {/* Hero Section (Pinned Container) */}
            <div ref={mainContainer} className="relative w-full h-screen overflow-hidden">
                <div ref={windowRef} className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                    <div className="relative w-full h-full">
                        <Image src={innerImage} alt="inner" fill className="object-cover scale-[1.3] z-10" />
                        <Image src={shadowImage} alt="shadow" fill className="object-cover scale-[1.3] opacity-50 z-20" />
                        <Image src={outerImage} alt="outer" fill className="object-cover scale-[1.3] z-30" />
                        <div className="absolute top-[10%] left-[50.3%] -translate-x-1/2 w-[24%] h-auto z-10">
                            <Image src={aboveImage} alt="above fixture" width={400} height={200} className="object-contain" />
                        </div>
                    </div>
                </div>

                <div ref={contentRef} className="absolute inset-0 z-20 flex items-center justify-between px-20 text-white pointer-events-none">
                    <div className="hero-text-left max-w-md">
                        <h1 className="text-[66px] leading-14 tracking-tight font-bold pt-10">We are<br />movement</h1>
                        <div className="mt-20 space-y-4">
                            <h2 className="text-lg leading-5 font-medium">Your<br />freedom to<br />enjoy life</h2>
                            <p className="w-10 h-px bg-white" />
                            <p className="text-[11px] font-semibold leading-4 max-w-[300px]">Every flight is designed around your comfort, time, and ambitions.</p>
                        </div>
                    </div>
                    <div className="hero-text-right max-w-md flex flex-col items-end">
                        <h1 className="text-[60px] font-bold leading-14 text-right pt-20">We are<br />distinction</h1>
                    </div>
                </div>

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
                    </div>
                </div>

                {/* Second Section Animated Text */}
                <div ref={secondSectionRef} className="absolute inset-0 z-30 flex flex-col items-center justify-center text-left text-white px-10 pointer-events-none opacity-0">
                    <h2 className="text-[44px] md:text-[45px] max-w-6xl leading-14">
                        <span className="font-bold tracking-tight">Jesko Jets®</span> is a private aviation operator with over 5,000 missions completed across 150+ countries. From international executives to global industries, our clients trust us to deliver on time, every time.
                    </h2>
                </div>
            </div>

            <About />
        </div>
    );
};

export default SmoothScrollHero;