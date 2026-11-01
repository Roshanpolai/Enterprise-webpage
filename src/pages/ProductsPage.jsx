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
