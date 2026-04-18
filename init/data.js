const sampleListings = [
{
title: "Cozy Beachfront Cottage",
description: "Escape to this charming beachfront cottage for a relaxing getaway.",
image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b" },
price: 1500,
location: "Malibu",
country: "United States",
geometry: { type: "Point", coordinates: [-118.7798, 34.0259] }
},
{
title: "Modern Loft in Downtown",
description: "Stay in the heart of the city in this stylish loft apartment.",
image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470" },
price: 1200,
location: "New York City",
country: "United States",
geometry: { type: "Point", coordinates: [-74.0060, 40.7128] }
},
{
title: "Mountain Retreat",
description: "Peaceful mountain cabin surrounded by nature.",
image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d" },
price: 1000,
location: "Aspen",
country: "United States",
geometry: { type: "Point", coordinates: [-106.8370, 39.1911] }
},
{
title: "Historic Villa in Tuscany",
description: "Experience the charm of Tuscany.",
image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1566073771259-6a8506099945" },
price: 2500,
location: "Florence",
country: "Italy",
geometry: { type: "Point", coordinates: [11.2558, 43.7696] }
},
{
title: "Secluded Treehouse Getaway",
description: "Live among the treetops in this unique retreat.",
image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4" },
price: 800,
location: "Portland",
country: "United States",
geometry: { type: "Point", coordinates: [-122.6765, 45.5231] }
},
{
title: "Beachfront Paradise",
description: "Step directly onto the beach from your condo.",
image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9" },
price: 2000,
location: "Cancun",
country: "Mexico",
geometry: { type: "Point", coordinates: [-86.8515, 21.1619] }
},
{
title: "Rustic Cabin by the Lake",
description: "Perfect for fishing and kayaking.",
image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b" },
price: 900,
location: "Lake Tahoe",
country: "United States",
geometry: { type: "Point", coordinates: [-120.0324, 39.0968] }
},
{
title: "Luxury Penthouse with City Views",
description: "Luxury living with panoramic city views.",
image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd" },
price: 3500,
location: "Los Angeles",
country: "United States",
geometry: { type: "Point", coordinates: [-118.2437, 34.0522] }
},
{
title: "Ski-In/Ski-Out Chalet",
description: "Hit the slopes right from your doorstep.",
image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb" },
price: 3000,
location: "Verbier",
country: "Switzerland",
geometry: { type: "Point", coordinates: [7.2266, 46.0964] }
},
{
title: "Safari Lodge in the Serengeti",
description: "Experience the thrill of the wild.",
image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e" },
price: 4000,
location: "Serengeti",
country: "Tanzania",
geometry: { type: "Point", coordinates: [34.6857, -2.3333] }
},
{
title: "Historic Canal House",
description: "Stay in a beautiful historic canal house.",
image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4" },
price: 1800,
location: "Amsterdam",
country: "Netherlands",
geometry: { type: "Point", coordinates: [4.9041, 52.3676] }
},
{
title: "Private Island Retreat",
description: "Have an entire island to yourself.",
image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972" },
price: 10000,
location: "Fiji",
country: "Fiji",
geometry: { type: "Point", coordinates: [178.0650, -17.7134] }
},
{
title: "Charming Cottage in the Cotswolds",
description: "Picturesque countryside escape.",
image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f" },
price: 1200,
location: "Cotswolds",
country: "UK",
geometry: { type: "Point", coordinates: [-1.8433, 51.8330] }
},
{
title: "Historic Brownstone in Boston",
description: "Elegant historic home.",
image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1533619239233-6280475a633a" },
price: 2200,
location: "Boston",
country: "United States",
geometry: { type: "Point", coordinates: [-71.0589, 42.3601] }
},
{
title: "Beachfront Bungalow in Bali",
description: "Relax on Bali’s sandy shores.",
image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1602391833977-358a52198938" },
price: 1800,
location: "Bali",
country: "Indonesia",
geometry: { type: "Point", coordinates: [115.1889, -8.4095] }
},
{
title: "Mountain View Cabin in Banff",
description: "Enjoy breathtaking mountain views.",
image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb" },
price: 1500,
location: "Banff",
country: "Canada",
geometry: { type: "Point", coordinates: [-115.5708, 51.1784] }
},
{
title: "Art Deco Apartment in Miami",
description: "Stylish 1920s apartment.",
image: { filename: "listingimage", url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579" },
price: 1600,
location: "Miami",
country: "United States",
geometry: { type: "Point", coordinates: [-80.1918, 25.7617] }
},
{
title: "Tropical Villa in Phuket",
description: "Luxury villa with infinity pool.",
image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9" },
price: 3000,
location: "Phuket",
country: "Thailand",
geometry: { type: "Point", coordinates: [98.3381, 7.8804] }
},
{
title: "Historic Castle in Scotland",
description: "Live like royalty.",
image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98" },
price: 4000,
location: "Scotland",
country: "United Kingdom",
geometry: { type: "Point", coordinates: [-3.4360, 56.4907] }
},
{
title: "Desert Oasis in Dubai",
description: "Luxury in the middle of the desert.",
image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1518684079-3c830dcef090" },
price: 5000,
location: "Dubai",
country: "UAE",
geometry: { type: "Point", coordinates: [55.2708, 25.2048] }
},
{
title: "Beachfront Villa in Greece",
description: "Mediterranean beach luxury.",
image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f" },
price: 2500,
location: "Mykonos",
country: "Greece",
geometry: {
    type: "Point",
    coordinates: [25.3289, 37.4467]
}
},
{
title: "Eco-Friendly Treehouse Retreat",
description: "Forest treehouse getaway.",
image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7" },
price: 750,
location: "Costa Rica",
country: "Costa Rica",
geometry: {
    type: "Point",
    coordinates: [-84.0907, 9.9281]
}
},
{
title: "Historic Cottage in Charleston",
description: "Beautiful restored cottage.",
image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904" },
price: 1600,
location: "Charleston",
country: "United States",
geometry: {
    type: "Point",
    coordinates: [-79.9311, 32.7765]
}
},
{
title: "Modern Apartment in Tokyo",
description: "Explore vibrant Tokyo.",
image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1480796927426-f609979314bd" },
price: 2000,
location: "Tokyo",
country: "Japan",
geometry: {
    type: "Point",
    coordinates: [139.6917, 35.6895]
}
},
{
title: "Lakefront Cabin in New Hampshire",
description: "Relax by the scenic lake.",
image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce" },
price: 1200,
location: "New Hampshire",
country: "United States",
geometry: {
    type: "Point",
    coordinates: [-71.5724, 43.1939]
}
},
{
title: "Luxury Villa in the Maldives",
description: "Overwater villa experience.",
image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000" },
price: 6000,
location: "Maldives",
country: "Maldives",
geometry: {
    type: "Point",
    coordinates: [73.2207, 3.2028]
}
},
{
title: "Ski Chalet in Aspen",
description: "Luxury ski resort living.",
image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1" },
price: 4000,
location: "Aspen",
country: "United States",
geometry: {
    type: "Point",
    coordinates: [-106.8370, 39.1911]
}
},
{
title: "Secluded Beach House in Costa Rica",
description: "Relax on the Pacific coast.",
image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2" },
price: 1800,
location: "Costa Rica",
country: "Costa Rica",
geometry: {
    type: "Point",
    coordinates: [-84.0907, 9.9281]
}
},
{
title: "Desert Oasis in Dubai",
description: "Luxury in the middle of the desert.",
image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1518684079-3c830dcef090" },
price: 5000,
location: "Dubai",
country: "United Arab Emirates",
geometry: {
    type: "Point",
    coordinates: [55.2708, 25.2048]
}
},
{
title: "Historic Castle in Scotland",
description: "Live like royalty.",
image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98" },
price: 4000,
location: "Scottish Highlands",
country: "United Kingdom",
geometry: {
    type: "Point",
    coordinates: [-4.2026, 57.1200]
}
}
];

module.exports = { data: sampleListings };