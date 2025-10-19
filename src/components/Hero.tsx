"use client";

import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useEffect, useRef } from "react";

gsap.registerPlugin(SplitText);

const Hero = () => {
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const hero = heroRef.current;

        if (!hero) return;

        SplitText.create(hero, {
            type: "lines, words",
            mask: "lines",
            autoSplit: true,
            onSplit(self) {
                return gsap.from(self.words, {
                    duration: 1,
                    y: 100,
                    autoAlpha: 0,
                    stagger: 0.05,
                });
            },
        });
    }, []);

    return (
        <div ref={heroRef} className="text-9xl flex min-h-screen items-center justify-center">
            I am Spandan Mishra
        </div>
    );
};

export default Hero;