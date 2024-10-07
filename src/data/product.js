// src/data/product.js

import cl1Image from '../assets/images/products/clothe.webp';
import cl2Image from '../assets/images/products/beauty.webp';
import cl3Image from '../assets/images//products/food.webp';
import cl4Image from '../assets/images//products//gadgets.webp';
import cl5Image from '../assets/images//products/toys.webp';

const productData = [
  { 
    id: 1, 
    category: 'clothes', 
    name: 'T-shirt', 
    description: 'Comfortable cotton T-shirt', 
    price: 10, 
    image: cl1Image 
  },
  { 
    id: 2, 
    category: 'beauty', 
    name: 'Face Cream', 
    description: 'Moisturizing face cream', 
    price: 25, 
    image: cl2Image 
  },
  { 
    id: 3, 
    category: 'food', 
    name: 'Honey', 
    description: 'Pure organic honey', 
    price: 15, 
    image: cl3Image 
  },
  { 
    id: 4, 
    category: 'gadgets', 
    name: 'Earbuds', 
    description: 'Wireless earbuds', 
    price: 50, 
    image: cl4Image  
  },
  { 
    id: 5, 
    category: 'kids toys', 
    name: 'Toy Car', 
    description: 'Remote-controlled car', 
    price: 30, 
    image: cl5Image 
  },
  // Add more products as needed
];

export default productData;
