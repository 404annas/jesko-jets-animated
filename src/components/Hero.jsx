import React from 'react';
import Image from 'next/image';
import innerImage from "@/assets/images/innerImage.webp";
import outerImage from "@/assets/images/outerImage.webp";
import shadowImage from "@/assets/images/shadowImage.webp";
import aboveImage from "@/assets/images/aboveImage.webp";
import skyImage from "@/assets/images/skyImage.webp";
import cloudsImage from "@/assets/images/cloudsImage.webp";

const Hero = () => {
    return (
        <div className="fixed inset-0 w-full h-full -z-10">

            {/* Inner Image - peeche */}
            <div className="absolute inset-0 -z-40">
                <Image
                    src={innerImage}
                    alt="Inner Background"
                    fill
                    className="object-cover scale-128"
                    priority
                    quality={100}
                    style={{ objectFit: "cover" }}
                />
            </div>

            {/* Outer Image - upar */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src={outerImage}
                    alt="Outer Background"
                    fill
                    className="object-cover scale-128"
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
                    className="object-cover scale-150"
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
            <div className="absolute inset-0 -z-50">
                <Image
                    src={cloudsImage}
                    alt="Clouds Background"
                    fill
                    className="object-cover"
                    priority
                    quality={100}
                    style={{ objectFit: "cover" }}
                />
            </div>

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
