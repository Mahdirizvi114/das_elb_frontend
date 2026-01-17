"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ReservationModal from "./ReservationModal";

export default function Hero() {
    const [isReservationOpen, setIsReservationOpen] = useState(false);

    return (
        <>
            <section className="relative h-screen w-full overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/hero-bg.png"
                        alt="Chef plating dish"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/90" />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">

                    {/* Top small logo/text */}
                    <div className="mb-8 animate-fade-in-down">
                        <Image
                            src="/images/logo.png"
                            alt="Das Elb Logo"
                            width={60}
                            height={60}
                            className="mx-auto mb-4"
                        />
                        <p className="text-xs tracking-[0.3em] text-gold-300 uppercase font-light">
                            Sushi • Asian Cuisine • Bar
                        </p>
                    </div>

                    {/* Main Headline */}
                    <h1 className="font-serif text-6xl md:text-8xl text-gold-100 italic mb-6 drop-shadow-2xl">
                        The Art <br />
                        <span className="not-italic text-gold-400">of Taste</span>
                    </h1>

                    <div className="w-24 h-[1px] bg-gold-400/50 mb-6" />

                    <p className="text-gray-300 tracking-widest text-sm md:text-base uppercase mb-12 max-w-lg leading-relaxed">
                        Exquisite Asian Fusion Cuisine & <br /> Bar in Rastatt
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex gap-4 flex-col sm:flex-row">
                        <Link href="/menu">
                            <button className="group relative px-8 py-3 bg-transparent border border-gold-400 text-gold-100 uppercase tracking-widest text-xs hover:bg-gold-400/10 transition-all duration-300 min-w-[200px]">
                                <span className="absolute inset-0 w-full h-full border border-gold-400/30 transform scale-105 opacity-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300" />
                                Go to the Menu
                            </button>
                        </Link>

                        <button
                            onClick={() => setIsReservationOpen(true)}
                            className="group relative px-8 py-3 bg-gold-400 border border-gold-400 text-black font-semibold uppercase tracking-widest text-xs hover:bg-gold-300 transition-all duration-300 min-w-[200px]"
                        >
                            Book a Table
                        </button>
                    </div>
                </div>
            </section>

            <ReservationModal isOpen={isReservationOpen} onClose={() => setIsReservationOpen(false)} />
        </>
    );
}
