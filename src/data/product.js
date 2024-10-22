import cl1Image from '../assets/images/products/clothe.webp';
import cl2Image from '../assets/images/products/beauty.webp';
import cl3Image from '../assets/images/products/food.webp';
import cl4Image from '../assets/images/products/gadgets.webp';
import cl5Image from '../assets/images/products/toys.webp';
import cl6Image from '../assets/images/products/gadgets.webp';

const productData = [
    {
        id: 1,  // Unique ID
        name: "Clothing",
        salePrice: 49.00,
        originalPrice: 99.00,
        image: cl1Image,
        rating: 4.5,
        summary: "Stylish and comfortable clothing for every occasion. Available in various sizes and colors.",
    },
    {
        id: 2,  // Unique ID
        name: "Beauty Products",
        salePrice: 39.00,
        originalPrice: 89.00,
        image: cl2Image,
        rating: 4.2,
        summary: "Top-quality beauty products to help you look your best, crafted from natural ingredients.",
    },
    {
        id: 3,  // Unique ID
        name: "Food Items",
        salePrice: 29.00,
        originalPrice: 79.00,
        image: cl3Image,
        rating: 4.7,
        summary: "Delicious and healthy food items, sourced from organic farms. Perfect for a balanced diet.",
    },
    {
        id: 4,  // Unique ID
        name: "Gadgets",
        salePrice: 99.00,
        originalPrice: 149.00,
        image: cl4Image,
        rating: 4.8,
        summary: "Latest gadgets that make your life easier. High-performance and user-friendly design.",
    },
    {
        id: 5,  // Unique ID
        name: "Toys",
        salePrice: 19.00,
        originalPrice: 49.00,
        image: cl5Image,
        rating: 4.1,
        summary: "Fun and educational toys for kids of all ages. Safe and designed for creativity.",
    },
    {
        id: 6,  // Unique ID
        name: "Jewelry",
        salePrice: 79.00,
        originalPrice: 159.00,
        image: cl6Image,
        rating: 4.9,
        summary: "Elegant jewelry pieces that complement your style. Perfect for any occasion.",
    },
];

export default productData;
