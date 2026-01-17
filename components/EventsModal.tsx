"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, Calendar } from "lucide-react";
import { events } from "@/lib/events-data";

interface EventsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function EventsModal({ isOpen, onClose }: EventsModalProps) {
    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-4xl h-[80vh] bg-zinc-900 border border-gold-400/30 rounded-2xl shadow-[0_0_50px_rgba(212,175,55,0.2)] flex flex-col animate-in fade-in zoom-in-95 duration-200">

                {/* Header */}
                <div className="p-6 border-b border-white/10 flex items-center justify-between shrink-0">
                    <div>
                        <h2 className="font-serif text-3xl text-gold-100">Events 2026</h2>
                        <p className="text-zinc-400 text-sm">Join us for our exclusive parties and themed nights</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-zinc-400 hover:text-gold-400 transition-colors p-2 hover:bg-white/5 rounded-full"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Scrollable List */}
                <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {events.map((event) => (
                            <div
                                key={event.id}
                                className="group relative bg-zinc-800/30 rounded-xl overflow-hidden border border-white/5 hover:border-gold-400/30 transition-all duration-300"
                            >
                                {/* Image */}
                                <div className="relative h-48 w-full overflow-hidden">
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />

                                    {/* Date Badge */}
                                    <div className="absolute bottom-3 left-3 flex items-center gap-2 text-gold-300">
                                        <Calendar className="w-4 h-4" />
                                        <span className="text-xs font-medium tracking-wider uppercase">{event.date}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    <h3 className="font-serif text-xl text-white mb-4 group-hover:text-gold-200 transition-colors">
                                        {event.title}
                                    </h3>

                                    <a
                                        href={event.ticketLink || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full py-3 text-center bg-white/5 border border-white/10 rounded-lg text-sm uppercase tracking-widest text-zinc-300 hover:bg-gold-400 hover:text-black hover:border-gold-400 transition-all duration-300 font-medium"
                                    >
                                        Book Ticket
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
