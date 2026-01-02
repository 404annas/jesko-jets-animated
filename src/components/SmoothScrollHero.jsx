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
import Navbar from './Navbar';

gsap.registerPlugin(ScrollTrigger);

const SmoothScrollHero = () => {
    const scopeRef = useRef(null);
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
                end: "+=250%",
                scrub: 1,
                pin: true,
                anticipatePin: 1,
            }
        });

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
            .to(".scroll-indicator", { opacity: 0, duration: 1 }, 0);

        const logoMoveFactor = window.innerWidth < 1024 ? 0.43 : 0.44;

        tl.to(logoRef.current, {
            y: -window.innerHeight * logoMoveFactor,
            scale: 0.6,
            duration: 8,
            ease: "power2.inOut"
        }, 1.5);

        tl.to(".sky-bg", { scale: 1.2, duration: 10 }, 0);

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

    }, { scope: scopeRef });

    return (
        <div ref={scopeRef} className="relative">
            <Navbar />

            <div className="fixed inset-0 flex items-center justify-center z-[200] pointer-events-none">
                <div className="w-[150px] sm:w-[220px] lg:w-[250px]">
                    <Image
                        ref={logoRef}
                        src={skyightLogo}
                        alt="Skyight Logo"
                        className="w-full h-auto object-contain"
                        priority
                    />
                </div>
            </div>

            <div className="fixed inset-0 -z-50">
                <Image src={skyImage} alt="sky" fill className="object-cover object-bottom" priority quality={100} />
            </div>

            <div className="fixed inset-0 -z-40 overflow-hidden">
                <div ref={cloudsRef} className="clouds-drift absolute inset-0 flex w-[500%] h-full">
                    <div className="relative w-1/2 h-full">
                        <Image src={cloudsImage} alt="clouds" fill className="object-cover opacity-60" sizes="100vw" />
                    </div>
                    <div className="relative w-1/2 h-full">
                        <Image src={cloudsImage} alt="clouds" fill className="object-cover opacity-60" sizes="100vw" />
                    </div>
                </div>
            </div>

            <div ref={mainContainer} className="relative w-full h-screen overflow-hidden">
                <div ref={windowRef} className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none will-change-transform">
                    <div className="relative w-full h-full">
                        {/* Added sizes and transform style for clarity */}
                        <Image
                            src={innerImage}
                            alt="inner"
                            fill
                            className="object-cover scale-100 lg:scale-[1.3] z-10"
                            sizes="(max-width: 1024px) 100vw, 150vw"
                            quality={100}
                            style={{ transform: 'translateZ(0)' }}
                        />
                        <Image
                            src={shadowImage}
                            alt="shadow"
                            fill
                            className="object-cover scale-100 lg:scale-[1.3] opacity-50 z-20"
                            sizes="(max-width: 1024px) 100vw, 150vw"
                            quality={100}
                            style={{ transform: 'translateZ(0)' }}
                        />
                        <Image
                            src={outerImage}
                            alt="outer"
                            fill
                            className="object-cover scale-100 lg:scale-[1.3] z-30"
                            sizes="(max-width: 1024px) 100vw, 150vw"
                            quality={100}
                            style={{ transform: 'translateZ(0)' }}
                        />
                        <div className="absolute top-[10%] left-[50.3%] -translate-x-1/2 w-[24%] h-auto z-10">
                            <Image src={aboveImage} alt="above fixture" width={400} height={200} className="object-contain" quality={100} />
                        </div>
                    </div>
                </div>

                {/* Rest of the component remains the same... */}
                <div ref={contentRef} className="absolute inset-0 z-20 flex items-center justify-between px-20 text-white pointer-events-none">
                    <div className="hero-text-left max-w-md">
                        <h1 className="text-3xl md:text-5xl lg:text-[66px] leading-6 sm:leading-10 md:leading-12 lg:leading-14 tracking-tight font-bold -mt-32 lg:-mt-0 -mr-10 sm:-mt-40 lg:pt-10">We are<br />movement</h1>
                        <div className="mt-20 space-y-4 lg:block hidden">
                            <h2 className="text-base sm:text-lg leading-5 font-medium">Your<br />freedom to<br />enjoy life</h2>
                            <p className="w-10 h-px bg-white" />
                            <p className="md:text-[10px] lg:text-[11px] font-semibold leading-4 max-w-[300px]">Every flight is designed around your comfort, time, and ambitions.</p>
                        </div>
                    </div>
                    <div className="hero-text-right max-w-md flex flex-col items-end">
                        <h1 className="text-3xl md:text-5xl lg:text-[60px] font-bold leading-6 sm:leading-10 md:leading-12 lg:leading-14 text-right mt-56 sm:mt-0 mr-80 sm:mr-0 md:pt-60 lg:pt-20">We are<br />distinction</h1>
                    </div>
                </div>

                <div className="scroll-indicator absolute bottom-20 right-20 z-20 text-white md:w-[30%] lg:w-[25%]">
                    <div className="mb-4 h-[1px] w-full bg-white" />
                    <div className="hidden sm:flex items-center justify-between">
                        <div className="flex items-center gap-2 text-[8px] lg:text-[9px] font-bold tracking-tight">
                            <div className="flex flex-col -space-y-2">
                                <ChevronDown size={15} />
                                <ChevronDown size={15} className='-mt-[11px]' />
                                <ChevronDown size={15} className='-mt-[11px]' />
                            </div>
                            <span>SCROLL DOWN</span>
                        </div>
                        <p className='text-[8px] lg:text-[9px] tracking-tight'>TO START THE JOURNEY</p>
                    </div>
                </div>

                <div ref={secondSectionRef} className="absolute inset-0 z-30 flex flex-col items-center justify-center text-left text-white px-4 sm:px-8 md:px-10 pointer-events-none opacity-0">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] w-full sm:max-w-6xl leading-8 sm:leading-10 md:leading-12 lg:leading-14">
                        <span className="font-bold tracking-tight">Jesko Jets®</span> is a private aviation operator with over 5,000 missions completed across 150+ countries. From international executives to global industries, our clients trust us to deliver on time, every time.
                    </h2>
                </div>
            </div>

            <About />
        </div>
    );
};

export default SmoothScrollHero;