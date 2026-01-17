"use client";

import { useState } from "react";
import Image from "next/image";
import { menuItems, Category, MenuItem } from "@/lib/menu-data";

export default function MenuGallery() {
    const [activeCategory, setActiveCategory] = useState<Category | "All">("All");

    const categories: (Category | "All")[] = ["All", "Vorspeisen", "Hauptgerichte", "Bowls", "Desserts", "Indisch"];

    const filteredItems = activeCategory === "All"
        ? menuItems
        : menuItems.filter(item => item.category === activeCategory);

    return (
        <div className="w-full max-w-7xl mx-auto px-4 pb-32">
            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-6 py-2 rounded-full border border-gold-400/30 transition-all duration-300 ${activeCategory === cat
                                ? "bg-gold-400 text-black font-semibold shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                                : "bg-transparent text-gold-100 hover:bg-gold-400/10"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map((item) => (
                    <MenuCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}

function MenuCard({ item }: { item: MenuItem }) {
    return (
        <div className="group bg-zinc-900/50 rounded-2xl overflow-hidden border border-white/5 hover:border-gold-400/30 transition-all duration-300 hover:-translate-y-1">
            {/* Image Area */}
            <div className="relative h-64 w-full bg-zinc-800 overflow-hidden">
                {item.image ? (
                    <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 text-zinc-700">
                        <span className="font-serif italic text-2xl opacity-20">Das Elb</span>
                    </div>
                )}

                {/* Price Tag */}
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full border border-gold-400/50">
                    <span className="text-gold-300 font-semibold">
                        {item.price.toLocaleString("de-DE", { style: "currency", currency: "EUR" })}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-xl text-gray-100 group-hover:text-gold-400 transition-colors">
                        {item.name}
                    </h3>
                </div>
                {item.description && (
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {item.description}
                    </p>
                )}
                <div className="flex gap-2 mt-auto">
                    {item.tags?.map(tag => (
                        <span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-zinc-800 text-zinc-400">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}
