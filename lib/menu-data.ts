export type Category = "Vorspeisen" | "Hauptgerichte" | "Bowls" | "Desserts" | "Indisch";

export interface MenuItem {
    id: string;
    name: string;
    description?: string;
    price: number;
    category: Category;
    image?: string;
    tags?: string[];
}

export const menuItems: MenuItem[] = [
    // Vorspeisen
    {
        id: "v1",
        name: "Caesar Salat",
        description: "mit Hähnchenbrustfiletstreifen und weißen & schwarzen Sesam und Caesar Dressing",
        price: 14.90,
        category: "Vorspeisen",
        image: "/images/dishes/caesar-salad.png"
    },
    {
        id: "v2",
        name: "Kürbissuppe nach thailändischer Art",
        description: "in roter Currysauce und Riesengarnelen Stücke",
        price: 17.90,
        category: "Vorspeisen",
        image: "/images/dishes/pumpkin-soup.png"
    },
    {
        id: "v3",
        name: "Lemon Koriander Suppe",
        description: "mit buntem Gemüse, nach China Art",
        price: 14.90,
        category: "Vorspeisen",
        image: "/images/dishes/lemon-soup.png"
    },
    {
        id: "v4",
        name: "Bruschetta",
        description: "hausgemachtes Brot mit Tomaten-Mozzarella, Zwiebeln und leichter Knoblauch",
        price: 12.90,
        category: "Vorspeisen",
        image: "/images/dishes/bruschetta.png"
    },

    // Hauptgerichte
    {
        id: "h1",
        name: "Entenbrust",
        description: "mit Orangen-Bratensauce auf Weißkohl mit Karotten, bunten Paprika, dazu Kartoffelpüree",
        price: 29.90,
        category: "Hauptgerichte",
        image: "/images/dishes/duck-breast.png"
    },
    {
        id: "h2",
        name: "Mini Lammhaxe",
        description: "mit grüne Prinzbohnen und getrüffeltem Kartoffelpüree",
        price: 27.90,
        category: "Hauptgerichte",
        image: "/images/dishes/mini-lammhaxe.png"
    },
    {
        id: "h3",
        name: "Maispoularde",
        description: "gegrilltes Hähnchenbrustfilet, gefüllt mit Hähnchenhackfleisch, dazu Kartoffelpüree",
        price: 27.90,
        category: "Hauptgerichte",
        image: "/images/dishes/maispoularde.png"
    },
    {
        id: "h4",
        name: "gegrilltes Rinderfilet",
        description: "mit Orangen-Bratensauce, gegrilltem Pak Choi Salat, hausgemachte knusprige Veggies, dazu Sauerrahmsauce",
        price: 45.00,
        category: "Hauptgerichte",
        image: "/images/dishes/beef-filet.png"
    },
    {
        id: "h5",
        name: "Rumpsteak",
        description: "mit Tomaten-Mango-Salsa, knusprige Drillingskartoffeln und Sauerrahmcreme",
        price: 34.90,
        category: "Hauptgerichte",
        image: "/images/dishes/rumpsteak.png"
    },
    {
        id: "h6",
        name: "Wiener Schnitzel",
        description: "dazu warmer Kartoffelsalat & Preiselbeeren",
        price: 24.90,
        category: "Hauptgerichte",
        image: "/images/dishes/wiener-schnitzel.png"
    },
    {
        id: "h7",
        name: "Duroc Schweinefilet",
        description: "mit Wildpilz-Risotto, dazu Wildbrokkoli, Babykarotten und Teriyaki Sauce",
        price: 29.90,
        category: "Hauptgerichte",
        image: "/images/dishes/duroc-filet.png"
    },
    {
        id: "h8",
        name: "Pasta",
        description: "mit Spinat und Waldpilze in leichter Sahnesauce, dazu gegrillter Lachs",
        price: 29.90,
        category: "Hauptgerichte",
        image: "/images/dishes/pasta.png"
    },
    {
        id: "h9",
        name: "Pad Thai Nudeln",
        description: "mit Gemüse, dazu gegrilltes Teriyaki Chicken und weißen Sesam",
        price: 21.90,
        category: "Hauptgerichte",
        image: "/images/dishes/pad-thai.png"
    },
    {
        id: "h10",
        name: "Zanderfilet",
        description: "auf grünen Spargel mit Safran-Risotto",
        price: 35.90,
        category: "Hauptgerichte",
        image: "/images/dishes/zanderfilet.png"
    },
    {
        id: "h11",
        name: "gegrilltes Steinbeißerfilet",
        description: "mit gebratenen Blattspinat und Kartoffelpüree",
        price: 29.90,
        category: "Hauptgerichte",
        image: "/images/dishes/steinbeisser.png"
    },
    {
        id: "h12",
        name: "Thunfischsteak",
        description: "mit schwarzen und weißen Sesam, frischem Thai Gemüse in roter Currysauce, dazu Basmatireis",
        price: 29.90,
        category: "Hauptgerichte",
        image: "/images/dishes/thunfisch.png"
    },

    // Bowls
    {
        id: "b1",
        name: "Veggie Bowl",
        description: "mit Gurken, Kirschtomaten, Kichererbsen, Feta Käse, Oliven, Blattsalat, bunter Paprika und versch. Sprossen, dazu hausgemachte Joghurtsoße",
        price: 15.90,
        category: "Bowls",
        image: "/images/dishes/veggie-bowl.png"
    },
    {
        id: "b2",
        name: "indische Bowl",
        description: "mit Gurken, Kirschtomaten, Mangostücke, Hähnchenbrustfiletstücke mariniert nach indischer Art, bunter Reis, Blattsalat, bunter Paprika und versch. Sprossen, dazu hausgemachte Joghurt-Minz-Soße",
        price: 18.90,
        category: "Bowls",
        image: "/images/dishes/indische-bowl.png"
    },

    // Desserts
    {
        id: "d1",
        name: "Créme Brulee",
        description: "mit Tonkabohne und Walnusseis",
        price: 13.90,
        category: "Desserts",
        image: "/images/dishes/creme-brulee.png"
    },
    {
        id: "d2",
        name: "Cheesecake",
        description: "mit Sahne",
        price: 9.90,
        category: "Desserts",
        image: "/images/dishes/cheesecake.png"
    },
    {
        id: "d3",
        name: "Dubai Pancakes",
        description: "",
        price: 13.90,
        category: "Desserts",
        image: "/images/dishes/pancakes.png"
    },
    {
        id: "d4",
        name: "Dubai Schokolade",
        description: "100g mit Pistaziencréme und Blattgold",
        price: 9.90,
        category: "Desserts",
        image: "/images/dishes/chocolate.png"
    },
    {
        id: "d5",
        name: "hausgemachtes Kaiserschmarrn",
        description: "mit Apfelmus oder roter Grütze",
        price: 13.90,
        category: "Desserts",
        image: "/images/dishes/kaiserschmarrn.png"
    },

    // Indisch
    {
        id: "i1",
        name: "Indische Linsensuppe",
        price: 9.90,
        category: "Indisch",
        image: "/images/dishes/linsensuppe.png"
    },
    {
        id: "i2",
        name: "Sabzi Pachrangi",
        description: "frisches Gemüse und Kartoffeln in leichter Currysauce mit Cashewkernen und Rosinen, dazu Basmatireis",
        price: 19.90,
        category: "Indisch",
        tags: ["vegetarian"],
        image: "/images/dishes/sabzi.png"
    },
    {
        id: "i3",
        name: "Aloo Gobi",
        description: "Blumenkohl, Kartoffeln in leichter Currysauce, dazu Basmatireis",
        price: 19.90,
        category: "Indisch",
        tags: ["vegetarian"],
        image: "/images/dishes/aloo-gobi.png"
    },
    {
        id: "i4",
        name: "Veggie oder Vegan Curry",
        description: "mit buntem frischen Gemüse in Currysauce, dazu Basmatireis",
        price: 19.90,
        category: "Indisch",
        tags: ["vegetarian", "vegan"],
        image: "/images/dishes/vegan-curry.png"
    },
    {
        id: "i5",
        name: "Butter Chicken",
        description: "Hähnchenbrustfilet mit Tomaten-Buttersauce, frischem Gemüse, Rosinen und Cashewkernen, dazu Basmatireis",
        price: 22.90,
        category: "Indisch",
        image: "/images/dishes/butter-chicken.png"
    },
    {
        id: "i6",
        name: "Chicken Spinaci",
        description: "Hähnchenbrustfilet mit Spinat in leichter Tomatensauce, dazu Basmatireis",
        price: 19.90,
        category: "Indisch",
        image: "/images/dishes/chicken-spinaci.png"
    },
    {
        id: "i7",
        name: "Chili Chicken",
        description: "Hähnchenbrustfilet in fruchtiger Chili Sauce dazu Basmatireis",
        price: 19.90,
        category: "Indisch",
        image: "/images/dishes/chili-chicken.png"
    },
    {
        id: "i8",
        name: "Lemon Chicken",
        description: "gebackenes Hähnchenbrustfilet mit Knoblauch-Lemon-Gras-Lemon-Sauce dazu Basmatireis",
        price: 19.90,
        category: "Indisch",
        image: "/images/dishes/lemon-chicken.png"
    },
    {
        id: "i9",
        name: "Kürbis Kokos Curry",
        description: "Kürbis und Garnelen in Kokosmilch mit gelben Curry, dazu Basmatireis",
        price: 24.90,
        category: "Indisch",
        image: "/images/dishes/kurbis-curry.png"
    }
];
