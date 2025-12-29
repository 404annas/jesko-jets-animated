import React from 'react';
import { Globe } from 'lucide-react';

const About = () => {
    return (
        <section className="relative w-full min-h-screen bg-transparent z-10 pt-40 pb-24">
            <div className="max-w-[1440px] mx-auto px-20">

                {/* Credits Header */}
                <div className="flex items-center gap-6 mb-40">
                    <div className="flex items-center gap-3">
                        <Globe className="w-10 h-10 text-white" strokeWidth={1} />
                        <span className="text-[42px] font-light text-white tracking-widest uppercase">JR</span>
                    </div>

                    <div className="flex gap-10">
                        <div className="text-white text-[10px] leading-tight tracking-widest uppercase">
                            <div className="font-bold opacity-60">EST.</div>
                            <div className="font-medium">2018</div>
                        </div>
                        <div className="text-white text-[10px] leading-tight tracking-widest uppercase pt-[1px]">
                            <div className="font-medium">BY EVGENY DEMIDENKO</div>
                        </div>
                    </div>
                </div>

                {/* Responsive Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-40 gap-y-32">
                    <AboutCard
                        title="Direct Access to Private Travel"
                        desc="Fly beyond boundaries with Jesko Jets. Our global operations ensure seamless, personalized travel experiences — from the first call to landing. Every journey is tailored to your comfort, privacy, and schedule."
                    />
                    <AboutCard
                        title="Your Freedom to Enjoy Life"
                        desc="We value your time above all. Jesko Jets gives you the freedom to live, work, and relax wherever life takes you — without compromise. We handle the logistics so you can focus on the moments that matter."
                    />
                    <AboutCard
                        title="Precision and Excellence"
                        desc="Each detail of your flight — from route planning to in-flight service — reflects our dedication to perfection. Our crew and fleet meet the highest global standards, ensuring reliability in every mission."
                    />
                    <AboutCard
                        title="Global Reach, Personal Touch"
                        desc="With access to destinations in over 150 countries, Jesko Jets brings the world closer to you. Our experts manage every aspect of your flight, guaranteeing a smooth and effortless journey."
                    />
                </div>
            </div>
        </section>
    );
};

const AboutCard = ({ title, desc }) => (
    <div className="space-y-8 group">
        <h2 className="text-[46px] font-light text-white leading-[1.1] tracking-tight">
            {title.split(' to ')[0]} to<br />{title.split(' to ')[1]}
        </h2>
        <div className="w-14 h-[1px] bg-white/40 transition-all duration-500 group-hover:w-20 group-hover:bg-white" />
        <p className="text-white/80 text-[15px] leading-relaxed max-w-md font-light">
            {desc}
        </p>
    </div>
);

export default About;