export const hotels = [
  // Trending Hotels
  { 
    id: 1, image: "/images/hero.png", name: "Grand Resort Paradise", location: "France", rating: 4.8, reviews: 1200, price: 150, trending: true, 
    description: "A luxurious escape featuring world-class amenities and breathtaking ocean views.",
    badge: "Top Pick for Couples", distance: "2km from City Center", totalPrice: 890,
    amenities: [
      { icon: "🛏️", text: "Double Bed" },
      { icon: "🏊", text: "Heated Pool" },
      { icon: "☕", text: "Breakfast Included" },
      { icon: "🌸", text: "Spa Service" }
    ]
  },
  { 
    id: 2, image: "/images/hotel_room.png", name: "Tokyo Skyline Hotel", location: "Japan", rating: 4.9, reviews: 3420, price: 210, trending: true, 
    description: "Experience modern elegance right in the heart of Tokyo's bustling metropolis.",
    badge: "Guest Favorite", distance: "500m from Station", totalPrice: 1250,
    amenities: [
      { icon: "🛏️", text: "King Bed" },
      { icon: "📶", text: "Free Fast WiFi" },
      { icon: "☕", text: "Breakfast Included" },
      { icon: "🏋️", text: "Fitness Center" }
    ]
  },
  { 
    id: 3, image: "/images/villa.png", name: "Venice Canal Villa", location: "Italy", rating: 4.7, reviews: 890, price: 180, trending: true, 
    description: "Historic charm meets modern comfort overlooking the iconic Venetian canals.",
    badge: "Great Location", distance: "1km from St. Mark's", totalPrice: 1050,
    amenities: [
      { icon: "🛏️", text: "Queen Bed" },
      { icon: "🍷", text: "Welcome Wine" },
      { icon: "🚤", text: "Private Boat Dock" },
      { icon: "🌸", text: "Spa Service" }
    ]
  },
  { 
    id: 4, image: "/images/hero.png", name: "Sydney Harbour Resort", location: "Australia", rating: 4.6, reviews: 540, price: 250, trending: true, 
    description: "Iconic waterfront views paired with unparalleled Australian hospitality.",
    badge: "Top Pick for Couples", distance: "3km from Opera House", totalPrice: 1450,
    amenities: [
      { icon: "🛏️", text: "Double Bed" },
      { icon: "🏊", text: "Heated Pool" },
      { icon: "☕", text: "Breakfast Included" },
      { icon: "🍽️", text: "Fine Dining" }
    ]
  },
  { 
    id: 5, image: "/images/villa.png", name: "Parisian Elegance Suite", location: "France", rating: 4.8, reviews: 1100, price: 190, trending: true, 
    description: "Classic Parisian style with easy access to romantic landmarks and cuisine.",
    badge: "Trending", distance: "1.5km from Eiffel Tower", totalPrice: 1100,
    amenities: [
      { icon: "🛏️", text: "Double Bed" },
      { icon: "🥐", text: "French Breakfast" },
      { icon: "📶", text: "Free WiFi" },
      { icon: "🌸", text: "Spa Service" }
    ]
  },
  { 
    id: 6, image: "/images/hotel_room.png", name: "Kyoto Traditional Inn", location: "Japan", rating: 4.9, reviews: 2200, price: 130, trending: true, 
    description: "Authentic ryokan experience surrounded by peaceful gardens and culture.",
    badge: "Top Rated", distance: "4km from Center", totalPrice: 750,
    amenities: [
      { icon: "🛏️", text: "Futon Bed" },
      { icon: "♨️", text: "Onsen Bath" },
      { icon: "🍱", text: "Traditional Meals" },
      { icon: "🍵", text: "Tea Ceremony" }
    ]
  },
  { 
    id: 7, image: "/images/hero.png", name: "Amalfi Coast Resort", location: "Italy", rating: 4.7, reviews: 760, price: 320, trending: true, 
    description: "Stunning cliffside resort offering unmatched panoramic views of the sea.",
    badge: "Top Pick for Couples", distance: "5km from Positano", totalPrice: 1850,
    amenities: [
      { icon: "🛏️", text: "Double Bed" },
      { icon: "🏊", text: "Infinity Pool" },
      { icon: "☕", text: "Breakfast Included" },
      { icon: "🌸", text: "Spa Service" }
    ]
  },
  { 
    id: 8, image: "/images/villa.png", name: "Gold Coast Beach House", location: "Australia", rating: 4.5, reviews: 430, price: 160, trending: true, 
    description: "Step straight from your private patio onto pristine, sun-kissed beaches.",
    badge: "Family Friendly", distance: "Beachfront", totalPrice: 950,
    amenities: [
      { icon: "🛏️", text: "Multiple Beds" },
      { icon: "🏄", text: "Surf Rentals" },
      { icon: "🍳", text: "Full Kitchen" },
      { icon: "🅿️", text: "Free Parking" }
    ]
  },
  
  // Most Visited Hotels
  { 
    id: 9, image: "/images/hotel_room.png", name: "NYC Central Hotel", location: "USA", rating: 4.6, reviews: 5400, price: 220, visited: true, 
    description: "Your perfect hub for exploring the bright lights and energy of Times Square.",
    badge: "Guest Favorite", distance: "0.5km from Times Square", totalPrice: 1350,
    amenities: [
      { icon: "🛏️", text: "King Bed" },
      { icon: "🏋️", text: "Fitness Center" },
      { icon: "🍸", text: "Rooftop Bar" },
      { icon: "📶", text: "Fast WiFi" }
    ]
  },
  { 
    id: 10, image: "/images/hero.png", name: "Bali Nature Resort", location: "Indonesia", rating: 4.8, reviews: 8900, price: 110, visited: true, 
    description: "Immerse yourself in tropical serenity and holistic wellness retreats.",
    badge: "Top Pick for Couples", distance: "2km from Ubud Center", totalPrice: 650,
    amenities: [
      { icon: "🛏️", text: "Canopy Bed" },
      { icon: "🏊", text: "Private Pool" },
      { icon: "🧘", text: "Yoga Pavilion" },
      { icon: "🌸", text: "Spa Service" }
    ]
  },
  { 
    id: 11, image: "/images/villa.png", name: "Swiss Alps Chalet", location: "Switzerland", rating: 4.9, reviews: 3200, price: 450, visited: true, 
    description: "A cozy, premium getaway right next to top-tier skiing destinations.",
    badge: "Top Rated", distance: "1km from Ski Lift", totalPrice: 2650,
    amenities: [
      { icon: "🛏️", text: "Double Bed" },
      { icon: "🔥", text: "Fireplace" },
      { icon: "⛷️", text: "Ski Storage" },
      { icon: "🍷", text: "Wine Cellar" }
    ]
  },
  { 
    id: 12, image: "/images/hotel_room.png", name: "London Bridge Inn", location: "UK", rating: 4.5, reviews: 4100, price: 170, visited: true, 
    description: "Classic British charm situated perfectly for sightseeing and city tours.",
    badge: "Great Location", distance: "0.2km from London Bridge", totalPrice: 990,
    amenities: [
      { icon: "🛏️", text: "Double Bed" },
      { icon: "☕", text: "English Breakfast" },
      { icon: "📺", text: "Smart TV" },
      { icon: "📶", text: "Free WiFi" }
    ]
  },
  { 
    id: 13, image: "/images/hero.png", name: "Maldives Water Villa", location: "Maldives", rating: 4.9, reviews: 12000, price: 800, visited: true, 
    description: "Ultimate privacy in an overwater villa with crystal-clear lagoon access.",
    badge: "Top Pick for Couples", distance: "Private Island", totalPrice: 4800,
    amenities: [
      { icon: "🛏️", text: "King Bed" },
      { icon: "🏊", text: "Private Pool" },
      { icon: "🐠", text: "Snorkeling Gear" },
      { icon: "🌸", text: "Spa Service" }
    ]
  },
  { 
    id: 14, image: "/images/hotel_room.png", name: "Dubai Marina Hotel", location: "UAE", rating: 4.7, reviews: 6700, price: 350, visited: true, 
    description: "Futuristic luxury set against a dazzling skyline and vibrant nightlife.",
    badge: "Trending", distance: "1km from Marina Walk", totalPrice: 2050,
    amenities: [
      { icon: "🛏️", text: "King Bed" },
      { icon: "🏊", text: "Rooftop Pool" },
      { icon: "🍽️", text: "Fine Dining" },
      { icon: "🌸", text: "Spa Service" }
    ]
  },
  { 
    id: 15, image: "/images/villa.png", name: "Santorini Cliff House", location: "Greece", rating: 4.8, reviews: 5600, price: 290, visited: true, 
    description: "Whitewashed elegance offering unforgettable sunsets over the caldera.",
    badge: "Top Pick for Couples", distance: "Center of Oia", totalPrice: 1700,
    amenities: [
      { icon: "🛏️", text: "Double Bed" },
      { icon: "🏊", text: "Plunge Pool" },
      { icon: "☕", text: "Breakfast Included" },
      { icon: "📸", text: "Photo Spots" }
    ]
  },
  { 
    id: 16, image: "/images/hero.png", name: "Phuket Beach Resort", location: "Thailand", rating: 4.6, reviews: 4300, price: 140, visited: true, 
    description: "A vibrant beachfront destination combining relaxation with local adventures.",
    badge: "Family Friendly", distance: "Beachfront", totalPrice: 820,
    amenities: [
      { icon: "🛏️", text: "Double Bed" },
      { icon: "🏊", text: "Large Pool" },
      { icon: "🍹", text: "Beach Bar" },
      { icon: "🌸", text: "Spa Service" }
    ]
  }
];
