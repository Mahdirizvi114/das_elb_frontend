"use client";

import Link from "next/link";
import { useState } from "react";
import { Home, UtensilsCrossed, Calendar, Globe } from "lucide-react";
import EventsModal from "@/components/EventsModal";

export default function Dock() {
    const [isEventsOpen, setIsEventsOpen] = useState(false);

    return (
        <>
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
                <div className="flex items-center gap-2 px-6 py-3 bg-black/60 backdrop-blur-md rounded-full border border-white/10 shadow-2xl">
                    <Link href="/" className="p-3 rounded-full hover:bg-white/10 transition-colors group">
                        <Home className="w-5 h-5 text-gray-400 group-hover:text-gold-400 transition-colors" />
                    </Link>
                    <Link href="/menu" className="p-3 rounded-full hover:bg-white/10 transition-colors group">
                        <UtensilsCrossed className="w-5 h-5 text-gray-400 group-hover:text-gold-400 transition-colors" />
                    </Link>

                    {/* Center Logo/Highlight Button */}
                    <div className="mx-2 p-1 rounded-full border border-gold-400/30 bg-gold-400/10 shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                        <button className="p-3 bg-gradient-to-br from-gold-300 to-gold-500 rounded-full shadow-lg hover:scale-105 transition-transform">
                            <UtensilsCrossed className="w-6 h-6 text-black" />
                        </button>
                    </div>

                    <button
                        onClick={() => setIsEventsOpen(true)}
                        className="p-3 rounded-full hover:bg-white/10 transition-colors group"
                        title="Events 2026"
                    >
                        <Calendar className="w-5 h-5 text-gray-400 group-hover:text-gold-400 transition-colors" />
                    </button>
                    <button className="p-3 rounded-full hover:bg-white/10 transition-colors group">
                        <Globe className="w-5 h-5 text-gray-400 group-hover:text-gold-400 transition-colors" />
                    </button>
                </div>
            </div>

            <EventsModal isOpen={isEventsOpen} onClose={() => setIsEventsOpen(false)} />
        </>
    );
}
