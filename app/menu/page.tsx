import MenuGallery from "@/components/menu/MenuGallery";
import Dock from "@/components/Dock";

export default function MenuPage() {
    return (
        <main className="min-h-screen bg-black pt-24">
            <div className="text-center mb-16">
                <h1 className="font-serif text-5xl md:text-7xl text-gold-100 mb-4">
                    Our Menu
                </h1>
                <p className="text-gold-400/60 uppercase tracking-widest text-sm">
                    Culinary Excellence
                </p>
            </div>

            <MenuGallery />

            <Dock />
        </main>
    );
}
