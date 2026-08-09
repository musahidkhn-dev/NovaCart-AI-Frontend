export const products = [
  {
    id: 1,
    brand: "Apple",
    title: "MacBook Air M4",
    image: "/images/products/macbook.png",
    rating: 4.8,
    reviews: 124,
    price: 119900,
    originalPrice: 139900,
    aiScore: 98,
    isAIPick: true,

    description:
      "MacBook Air with the M4 chip delivers fast performance, long battery life and a lightweight design for everyday work, study and creative tasks.",

    specifications: {
      Processor: "Apple M4",
      Display: "13.6-inch Liquid Retina",
      Memory: "16GB",
      Storage: "256GB SSD",
      Battery: "Up to 18 hours",
    },

    reviewList: [
      {
        id: 1,
        name: "Rahul Sharma",
        rating: 5,
        comment:
          "Excellent performance and battery life. The M4 chip is really fast for everyday work.",
      },
      {
        id: 2,
        name: "Priya Mehta",
        rating: 5,
        comment:
          "Very lightweight and premium. The display quality is also excellent.",
      },
    ],
  },

  {
    id: 2,
    brand: "Samsung",
    title: "Galaxy S25 Ultra",
    image: "/images/products/s25.png",
    rating: 4.7,
    reviews: 342,
    price: 104999,
    originalPrice: 119999,
    aiScore: 95,
    isAIPick: true,

    description:
      "Galaxy S25 Ultra combines a premium display, powerful performance and an advanced camera system for everyday use, photography and productivity.",

    specifications: {
      Processor: "Snapdragon 8 Elite",
      Display: "6.9-inch Dynamic AMOLED 2X",
      Memory: "12GB",
      Storage: "256GB",
      Battery: "5000mAh",
    },

    reviewList: [
      {
        id: 1,
        name: "Arjun Patel",
        rating: 5,
        comment:
          "The display and camera quality are excellent. Performance is also very smooth.",
      },
      {
        id: 2,
        name: "Neha Verma",
        rating: 4,
        comment: "Great phone overall. Battery easily lasts through the day.",
      },
    ],
  },

  {
    id: 3,
    brand: "Google",
    title: "Pixel 9 Pro XL",
    image: "/images/products/pixel-9-pro-xl.png",
    rating: 4.6,
    reviews: 218,
    price: 109999,
    originalPrice: 124999,
    aiScore: 94,
    isAIPick: true,

    description:
      "Pixel 9 Pro XL offers a smooth display, powerful Google Tensor performance and an advanced camera system designed for everyday photography.",

    specifications: {
      Processor: "Google Tensor G4",
      Display: "6.8-inch Super Actua",
      Memory: "16GB",
      Storage: "256GB",
      Battery: "5060mAh",
    },

    reviewList: [
      {
        id: 1,
        name: "Aman Gupta",
        rating: 5,
        comment:
          "The camera quality is amazing and the software experience feels very clean.",
      },
      {
        id: 2,
        name: "Riya Singh",
        rating: 4,
        comment:
          "Beautiful display and smooth performance. Overall a very good phone.",
      },
    ],
  },

  {
    id: 4,
    brand: "OnePlus",
    title: "OnePlus 13",
    image: "/images/products/oneplus-13.png",
    rating: 4.7,
    reviews: 287,
    price: 69999,
    originalPrice: 79999,
    aiScore: 92,
    isAIPick: true,

    description:
      "OnePlus 13 delivers flagship-level performance with a smooth display, large battery and versatile camera system for everyday use and gaming.",

    specifications: {
      Processor: "Snapdragon 8 Elite",
      Display: "6.82-inch AMOLED",
      Memory: "12GB",
      Storage: "256GB",
      Battery: "6000mAh",
    },

    reviewList: [
      {
        id: 1,
        name: "Karan Joshi",
        rating: 5,
        comment:
          "Very fast performance and the display looks great. Gaming performance is excellent.",
      },
      {
        id: 2,
        name: "Vishal Kumar",
        rating: 4,
        comment: "Good battery life and smooth everyday performance.",
      },
    ],
  },

  {
    id: 5,
    brand: "Sony",
    title: "Sony WH-1000XM5",
    image: "/images/products/sony-xm5.jpg",
    rating: 4.8,
    reviews: 456,
    price: 29990,
    originalPrice: 34990,
    aiScore: 96,
    isAIPick: true,

    description:
      "Sony WH-1000XM5 headphones offer immersive sound, advanced noise cancellation and a comfortable design for music, travel and everyday listening.",

    specifications: {
      Type: "Wireless Headphones",
      Connectivity: "Bluetooth",
      NoiseCancellation: "Active Noise Cancellation",
      Battery: "Up to 30 hours",
      Charging: "USB-C",
    },

    reviewList: [
      {
        id: 1,
        name: "Aditya Shah",
        rating: 5,
        comment:
          "The noise cancellation is excellent and the headphones are very comfortable.",
      },
      {
        id: 2,
        name: "Sneha Kapoor",
        rating: 5,
        comment:
          "Amazing sound quality and battery life. Great for travelling.",
      },
    ],
  },

  {
    id: 6,
    brand: "Dell",
    title: "Dell XPS 14",
    image: "/images/products/dell-xps-14.png",
    rating: 4.5,
    reviews: 173,
    price: 149990,
    originalPrice: 169990,
    aiScore: 89,
    isAIPick: false,

    description:
      "Dell XPS 14 combines a premium compact design with powerful performance, making it suitable for productivity, creative work and everyday computing.",

    specifications: {
      Processor: "Intel Core Ultra",
      Display: "14.5-inch",
      Memory: "16GB",
      Storage: "512GB SSD",
      Graphics: "NVIDIA GeForce RTX",
    },

    reviewList: [
      {
        id: 1,
        name: "Rohit Jain",
        rating: 5,
        comment:
          "Premium build quality with excellent performance for productivity and creative work.",
      },
      {
        id: 2,
        name: "Mohit Verma",
        rating: 4,
        comment:
          "Good display and performance. The overall design feels very premium.",
      },
    ],
  },
];
