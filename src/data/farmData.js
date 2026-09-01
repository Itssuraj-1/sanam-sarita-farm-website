// Central content source for Sanam Sarita Krishi tatha Pashupanchhi Farm.
// Real farm photographs live in src/assets/farm — HD photographs taken on site.
// Botanical/product photography is sourced from Wikimedia Commons (CC licensed)
// via Special:FilePath, which serves the current file at a given width.

import boundary1 from "../assets/farm/boundary-1.jpg";
import boundary2 from "../assets/farm/boundary-2.jpg";
import cattleSpace from "../assets/farm/cattle-space.jpg";
import farmField from "../assets/farm/farm-field.jpg";
import structure2 from "../assets/farm/structure-2.jpg";
import structureDay from "../assets/farm/structure-day.jpg";
import structureNight from "../assets/farm/structure-night.jpg";
import structureUltraWide from "../assets/farm/structure-ultra-wide.jpg";
import goatSpace from "../assets/farm/goat-space.jpg";
import goats from "../assets/farm/goats.jpg";
import nalaGumbaView from "../assets/farm/nala-gumba-view.jpg";
import treeInFarm from "../assets/farm/tree-in-farm.jpg";
import viewFromFarm from "../assets/farm/view-from-farm.jpg";

const wm = (file, width = 1200) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/File:${file}?width=${width}`;

// ---------------------------------------------------------------------------
// Farm photographs (authentic, HD, taken on site)
// ---------------------------------------------------------------------------
export const farmPhotos = {
  boundary1,
  boundary2,
  cattleSpace,
  farmField,
  structure2,
  structureDay,
  structureNight,
  structureUltraWide,
  goatSpace,
  goats,
  nalaGumbaView,
  treeInFarm,
  viewFromFarm,
};

// ---------------------------------------------------------------------------
// Crops — the primary content of the site
// ---------------------------------------------------------------------------
export const categories = ["All", "Fruits", "Nuts", "Spices & Crops", "Flowers", "Specialty"];

export const crops = [
  {
    slug: "macadamia",
    name: "Macadamia",
    latin: "Macadamia integrifolia",
    category: "Nuts",
    image: wm("Macadamia_nuts_on_tree.JPG"),
    description:
      "A slow-growing evergreen prized for its rich, buttery kernel — one of the more demanding nuts in the orchard, rewarding patience over many seasons.",
  },
  {
    slug: "pecan",
    name: "Pecan",
    latin: "Carya illinoinensis",
    category: "Nuts",
    image: wm("Pecan-nuts-on-tree.jpg"),
    description:
      "A tall, statuesque tree that clusters its thin-shelled nuts in loose bunches, ripening slowly through the autumn months.",
  },
  {
    slug: "mango",
    name: "Mango",
    latin: "Mangifera indica",
    category: "Fruits",
    image: wm("Mango_fruits.JPG"),
    description:
      "Broad, glossy-leaved trees that fill the warmer months with fragrant blossom before setting fruit.",
  },
  {
    slug: "orange",
    name: "Orange",
    latin: "Citrus sinensis",
    category: "Fruits",
    image: wm("Washington_Navel_Orange_Tree_progress_24_May_2008.jpg"),
    description:
      "Citrus trees that thrive in the hill air of Nala, holding their fruit through the cooler months of the year.",
  },
  {
    slug: "guava",
    name: "Guava",
    latin: "Psidium guajava",
    category: "Fruits",
    image: wm("Guava_bangalore.jpg"),
    description:
      "A hardy, generous tree, producing fragrant fruit through much of the year with very little fuss.",
  },
  {
    slug: "lemon",
    name: "Lemon",
    latin: "Citrus limon",
    category: "Fruits",
    image: wm("Lemon,_Lemon_tree,_Florence,_Italy.jpg"),
    description:
      "Bright, thorny, and dependable — a kitchen staple grown in the sunnier pockets of the land.",
  },
  {
    slug: "kiwi",
    name: "Kiwi",
    latin: "Actinidia deliciosa",
    category: "Fruits",
    image: wm("Kiwifruit-Actinidia_deliciosa-plantation.jpg"),
    description:
      "A climbing vine trained along the hillside, still finding its footing among the farm's newer plantings.",
  },
  {
    slug: "avocado",
    name: "Avocado",
    latin: "Persea americana",
    category: "Fruits",
    image: wm("Avocado_6.JPG"),
    description:
      "A fruit cultivated for its creamy texture and distinctive flavor, grown among the farm's newer plantings.",
  },
  {
    slug: "lapsi",
    name: "Nepalese Hog Plum",
    localName: "Lapsi",
    latin: "Choerospondias axillaris",
    category: "Fruits",
    image: wm("Choerospondias_axillaris_seeds,_by_Omar_Hoftun.jpg"),
    description:
      "A distinctive Nepali fruit commonly known as Lapsi, valued for its tart flavor and traditional culinary uses.",
  },
  {
    slug: "cardamom",
    name: "Cardamom",
    latin: "Elettaria cardamomum",
    category: "Spices & Crops",
    image: wm("Cardamom_plant.jpg"),
    description:
      "Grown in the shaded, moisture-holding pockets of the land, its pods among the most fragrant of all the farm's crops.",
  },
  {
    slug: "ginger",
    name: "Ginger",
    latin: "Zingiber officinale",
    category: "Spices & Crops",
    image: wm("Ginger_Root.jpg"),
    description:
      "A low, leafy crop grown for its aromatic rhizome, tucked into the loose, well-drained soil of the terraces.",
  },
  {
    slug: "turmeric",
    name: "Turmeric",
    latin: "Curcuma longa",
    category: "Spices & Crops",
    image: wm("Curcuma_longa_roots.jpg"),
    description:
      "An aromatic rhizome widely used as a spice and valued for its distinctive color and flavor.",
  },
  {
    slug: "coffee",
    name: "Coffee",
    latin: "Coffea arabica",
    category: "Spices & Crops",
    image: wm("Arabica_Coffee_Bean_on_the_tree.jpg"),
    description:
      "Shade-loving shrubs whose cherries ripen slowly from green to deep red across the hill terraces.",
  },
  {
    slug: "flowers",
    name: "Flowers",
    latin: "Various species",
    category: "Flowers",
    image: wm("Godawari_Botanical_Garden_(171).jpg"),
    description:
      "Seasonal blooms planted throughout the farm, softening the working land with colour through the year.",
  },
  {
    slug: "buddha-chitta",
    name: "Buddha Chitta",
    latin: "Ziziphus budhensis",
    category: "Specialty",
    image: wm("Bodhi_seed_mala.jpg"),
    description:
      "A specialty plant native to this part of Kavrepalanchok, whose seeds are traditionally strung into prayer malas.",
  },
];

export const featuredCrops = ["macadamia", "coffee", "lapsi", "mango", "buddha-chitta"];

export const featuredStories = {
  macadamia: {
    heading: "Macadamia",
    text:
      "Among the slowest of the farm's trees to mature, the macadamia is grown here for the long view — a crop planted with the next generation in mind rather than the next season.",
  },
  coffee: {
    heading: "Coffee",
    text:
      "Coffee is grown on the terraced slopes of the farm, its cherries turning from green to red across the hill air of Nala before they are hand-picked.",
  },
  lapsi: {
    heading: "Lapsi",
    text:
      "Known botanically as Choerospondias axillaris, Lapsi is a fruit tree long cultivated across the hills of Kavrepalanchok — the very district Sanam Sarita calls home — valued here for its distinctive tart flavour.",
  },
  mango: {
    heading: "Mango",
    text:
      "The mango trees are among the most established on the farm, their canopies offering shade to the land beneath them as much as fruit above.",
  },
  "buddha-chitta": {
    heading: "Buddha Chitta",
    text:
      "Native to the Kavrepalanchok hills that surround Nala, Buddha Chitta seeds have long been strung into malas used in Tibetan Buddhist practice — a quiet specialty of this particular part of Nepal, and a plant the farm is proud to grow.",
  },
};

export const seasons = [
  {
    name: "Spring",
    text: "New growth across the orchard, as blossom opens on the fruit trees and the land turns green after winter.",
  },
  {
    name: "Summer",
    text: "The fullest and busiest stretch of the year, with warmth pushing steady growth across the farm.",
  },
  {
    name: "Monsoon",
    text: "Heavy rains settle over the hills of Nala, feeding the terraces and softening the ground for planting.",
  },
  {
    name: "Autumn",
    text: "A season of gathering, as nuts, coffee cherries and citrus begin to ripen across the land.",
  },
  {
    name: "Winter",
    text: "A quieter time on the farm, when the land rests before the cycle begins again.",
  },
];

// ---------------------------------------------------------------------------
// Gallery — authentic farm photographs only
// ---------------------------------------------------------------------------
export const galleryImages = [
  { src: farmPhotos.structureUltraWide, category: "Structures", alt: "Wide view of the farm's main structure on the hillside, storm clouds above" },
  { src: farmPhotos.nalaGumbaView, category: "Landscape", alt: "View from the farm over the terraced valley of Nala, with the gumba visible on the hillside" },
  { src: farmPhotos.farmField, category: "Farm", alt: "Farm outbuildings surrounded by cornfields beneath a dramatic sky" },
  { src: farmPhotos.cattleSpace, category: "Cattle", alt: "Interior of the farm's cattle shed" },
  { src: farmPhotos.viewFromFarm, category: "Landscape", alt: "Panoramic view over Nala from the farm, greenhouses and terraces below" },
  { src: farmPhotos.structureDay, category: "Structures", alt: "The farm building in daylight, tomatoes and vegetables growing in the foreground" },
  { src: farmPhotos.structureNight, category: "Structures", alt: "The farm building at dusk, lights glowing against a stormy sky" },
  { src: farmPhotos.structure2, category: "Structures", alt: "Farm structure viewed from the hillside above, overlooking Nala village" },
  { src: farmPhotos.boundary1, category: "Farm", alt: "The farm's boundary fence beneath a stormy sky, overlooking the valley" },
  { src: farmPhotos.boundary2, category: "Farm", alt: "Evening light over the farm's boundary fence and fields" },
  { src: farmPhotos.treeInFarm, category: "Landscape", alt: "A mature tree on the farm overlooking the village of Nala" },
  { src: farmPhotos.goatSpace, category: "Livestock", alt: "Interior of the space once used for goats on the farm" },
  { src: farmPhotos.goats, category: "Livestock", alt: "Goats that were once raised on the farm, feeding together" },
];

export const galleryCategories = ["All", "Farm", "Structures", "Cattle", "Landscape", "Livestock"];

export const farmInfo = {
  name: "Sanam Sarita",
  fullName: "Sanam Sarita Krishi tatha Pashupanchhi Farm",
  location: "Nala, Banepa 45210, Nepal",
  mapsUrl: "https://maps.app.goo.gl/eDxc4zr1W8mKDwEQ9",
};
