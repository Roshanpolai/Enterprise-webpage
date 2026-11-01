// "children" creates a dropdown menu.
const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Products',
    path: '/products',
    children: [
      { label: 'Cashew Fruit', path: '/products' },
      { label: 'Unpeeled Cashew', path: '/products' },
      { label: 'White Cashew Nut', path: '/products' },
      { label: 'Cashew Grades', path: '/products' },
    ],
  },
  {
    label: 'Our Facility',
    path: '/facility',
    children: [
      { label: 'Processing', path: '/facility' },
      { label: 'Quality Assurance', path: '/facility' },
    ],
  },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
  { label: 'FAQ', path: '/faq' },
];

export default navLinks;
