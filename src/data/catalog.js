export const categories = [
  { id: 'all', label: 'All Products' },
  { id: 'whole', label: 'Whole Cashews' },
  { id: 'pieces', label: 'Cashew Pieces' },
];

export const products = [
  { id: 'w180', code: 'W180', name: 'Premium Whole', category: 'whole', badge: 'Featured', image: '/images/products/w180.webp',
    description: 'Our largest whole kernels, about 180 to the pound. Ideal for gifting, premium snacking and roasting.' },
  { id: 'w210', code: 'W210', name: 'Super Whole', category: 'whole', image: '/images/products/w210.webp',
    description: 'Large, evenly sized whole kernels, about 210 to the pound. A popular choice for retail packs.' },
  { id: 'w240', code: 'W240', name: 'Large Whole', category: 'whole', badge: 'Featured', image: '/images/products/w240.webp',
    description: 'Well-balanced whole kernels, about 240 to the pound, for snacking, sweets and cooking.' },
  { id: 'w320', code: 'W320', name: 'Regular Whole', category: 'whole', badge: 'Featured', image: '/images/products/w320.webp',
    description: 'The everyday whole cashew, about 320 to the pound. Good value for bulk and food businesses.' },
  { id: 'w400', code: 'W400', name: 'Medium Whole', category: 'whole', image: '/images/products/w400.webp',
    description: 'Medium whole kernels, about 400 to the pound, suited to cooking, bakery and sweets.' },
  { id: 'w450', code: 'W450', name: 'Small Whole', category: 'whole', image: '/images/products/w450.webp',
    description: 'Small whole kernels, about 450 to the pound, a practical option for mixes and recipes.' },
  { id: 'splits', code: 'S', name: 'Splits', category: 'pieces', image: '/images/products/splits.webp',
    description: 'Kernels split into two halves. Great for cooking, gravies, sweets and bakery use.' },
  { id: 'butts', code: 'B', name: 'Butts', category: 'pieces', image: '/images/products/butts.webp',
    description: 'Broken kernels that are larger than pieces. Used in cooking, sweets and confectionery.' },
  { id: 'lwp', code: 'LWP', name: 'Large White Pieces', category: 'pieces', image: '/images/products/lwp.webp',
    description: 'Larger white pieces for bakery, sweets, ice cream and cooking.' },
  { id: 'swp', code: 'SWP', name: 'Small White Pieces', category: 'pieces', image: '/images/products/swp.webp',
    description: 'Small white pieces, handy for toppings, bakery and sweet-making.' },
  { id: 'bb', code: 'BB', name: 'Baby Bits', category: 'pieces', image: '/images/products/bb.webp',
    description: 'Very small bits for toppings, fillings and food manufacturing.' },
];

export const fullName = (product) => `${product.name} (${product.code})`;
