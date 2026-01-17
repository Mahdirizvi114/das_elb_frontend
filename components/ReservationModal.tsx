"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface ReservationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contact: "",
        time: "",
        guests: "2",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        console.log("Reservation Data:", formData);
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSuccess(true);

        // Close after showing success
        setTimeout(() => {
            onClose();
            setIsSuccess(false);
            setFormData({ name: "", email: "", contact: "", time: "", guests: "2" });
        }, 2000);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-md bg-zinc-900 border border-gold-400/30 rounded-2xl shadow-[0_0_50px_rgba(212,175,55,0.2)] p-8 overflow-hidden animate-in fade-in zoom-in-95 duration-200">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-zinc-400 hover:text-gold-400 transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>

                {!isSuccess ? (
                    <>
                        <h2 className="font-serif text-3xl text-gold-100 mb-2 text-center">Book a Table</h2>
                        <p className="text-zinc-400 text-center text-sm mb-8">Reserve your spot at DAS ELB</p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-xs uppercase tracking-wider text-gold-400/70 mb-1">Name</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full bg-zinc-800/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-gold-400 transition-colors placeholder:text-zinc-600"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-xs uppercase tracking-wider text-gold-400/70 mb-1">Email</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full bg-zinc-800/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-gold-400 transition-colors placeholder:text-zinc-600"
                                    placeholder="email@example.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-xs uppercase tracking-wider text-gold-400/70 mb-1">Contact Number</label>
                                <input
                                    type="tel"
                                    required
                                    className="w-full bg-zinc-800/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-gold-400 transition-colors placeholder:text-zinc-600"
                                    placeholder="+49 ..."
                                    value={formData.contact}
                                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs uppercase tracking-wider text-gold-400/70 mb-1">Date & Time</label>
                                    <input
                                        type="datetime-local"
                                        required
                                        className="w-full bg-zinc-800/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-gold-400 transition-colors [color-scheme:dark]"
                                        value={formData.time}
                                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs uppercase tracking-wider text-gold-400/70 mb-1">Guests</label>
                                    <select
                                        className="w-full bg-zinc-800/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-gold-400 transition-colors"
                                        value={formData.guests}
                                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                                    >
                                        {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                                            <option key={num} value={num}>{num} Person{num > 1 ? 's' : ''}</option>
                                        ))}
                                        <option value="9+">9+ Persons</option>
                                    </select>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full mt-6 bg-gold-400 text-black font-semibold py-4 rounded-lg hover:bg-gold-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? "Confirming..." : "Confirm Reservation"}
                            </button>
                        </form>
                    </>
                ) : (
                    <div className="py-12 text-center animate-in fade-in zoom-in duration-300">
                        <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                            <span className="text-2xl">✓</span>
                        </div>
                        <h3 className="font-serif text-2xl text-white mb-2">Reservation Confirmed!</h3>
                        <p className="text-zinc-400">We look forward to welcoming you.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
