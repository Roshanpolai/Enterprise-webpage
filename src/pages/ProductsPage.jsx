import InnerPage from './InnerPage.jsx';
import ProductCategories from '../components/Products/ProductCategories.jsx';
import GradesCarousel from '../components/Products/GradesCarousel.jsx';
import Enquiry from '../components/Enquiry/Enquiry.jsx';

function ProductsPage() {
  return (
    <InnerPage title="Our Products">
      <ProductCategories />
      <GradesCarousel />
      <Enquiry />
    </InnerPage>
  );
}

export default ProductsPage;



// import { useState } from 'react';
// import InnerPage from './InnerPage.jsx';
// import ProductsCatalog from '../components/Catalog/ProductsCatalog.jsx';
// import ProductEnquiry from '../components/Catalog/ProductEnquiry.jsx';
// import { fullName } from '../data/catalog.js';

// function ProductsPage() {
//   // Remembers which product the visitor clicked "Send Enquiry" on
//   const [selected, setSelected] = useState(null);

//   const handleEnquire = (product) => {
//     setSelected({ name: fullName(product), stamp: Date.now() });
//     document.getElementById('enquiry')?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <InnerPage title="Our Products">
//       <ProductsCatalog onEnquire={handleEnquire} />
//       <ProductEnquiry selected={selected} />
//     </InnerPage>
//   );
// }

// export default ProductsPage;
