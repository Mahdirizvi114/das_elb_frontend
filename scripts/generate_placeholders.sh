#!/bin/bash

# Directory for dishes
OUTPUT_DIR="public/images/dishes"
mkdir -p "$OUTPUT_DIR"

# Function to generate image
generate_image() {
  local filename=$1
  local title=$2
  local color=$3
  
  if [ ! -f "$OUTPUT_DIR/$filename" ]; then
    convert -size 800x600 xc:"$color" \
      -fill white -font DejaVu-Sans-Bold -pointsize 60 -gravity center \
      -annotate 0 "$title" \
      "$OUTPUT_DIR/$filename"
    echo "Generated $filename"
  else
    echo "Skipped $filename (exists)"
  fi
}

# Colors matching the theme
GOLD="#d4af37"
DARK="#1a1a1a"
BROWN="#3e2723"

# List of missing images to generate
# Using simple colors and text
generate_image "lemon-soup.png" "Lemon Koriander Suppe" "$DARK"
generate_image "mini-lammhaxe.png" "Mini Lammhaxe" "$BROWN"
generate_image "maispoularde.png" "Maispoularde" "$GOLD"
generate_image "rumpsteak.png" "Rumpsteak" "$BROWN"
generate_image "wiener-schnitzel.png" "Wiener Schnitzel" "$GOLD" 
generate_image "duroc-filet.png" "Duroc Schweinefilet" "$BROWN"
generate_image "pasta.png" "Pasta" "$DARK"
generate_image "pad-thai.png" "Pad Thai" "$GOLD"
generate_image "zanderfilet.png" "Zanderfilet" "$DARK"
generate_image "steinbeisser.png" "Steinbeisserfilet" "$GOLD"
generate_image "thunfisch.png" "Thunfischsteak" "$BROWN"

generate_image "indische-bowl.png" "Indische Bowl" "$GOLD"

generate_image "cheesecake.png" "Cheesecake" "$DARK"
generate_image "pancakes.png" "Dubai Pancakes" "$GOLD"
generate_image "chocolate.png" "Dubai Schokolade" "$BROWN"
generate_image "kaiserschmarrn.png" "Kaiserschmarrn" "$GOLD"

generate_image "linsensuppe.png" "Indische Linsensuppe" "$BROWN"
generate_image "sabzi.png" "Sabzi Pachrangi" "$DARK"
generate_image "aloo-gobi.png" "Aloo Gobi" "$GOLD"
generate_image "vegan-curry.png" "Vegan Curry" "$BROWN"
generate_image "chicken-spinaci.png" "Chicken Spinaci" "$DARK"
generate_image "chili-chicken.png" "Chili Chicken" "$BROWN"
generate_image "lemon-chicken.png" "Lemon Chicken" "$GOLD"
generate_image "kurbis-curry.png" "Kurbis Kokos Curry" "$DARK"
