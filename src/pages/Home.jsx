import { useRef } from 'react';
import useReveal from '../hooks/useReveal.js';
import Hero from '../components/Hero/Hero.jsx';
import About from '../components/About/About.jsx';
import ProductCategories from '../components/Products/ProductCategories.jsx';
import Processing from '../components/Processing/Processing.jsx';
import Quality from '../components/Quality/Quality.jsx';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs.jsx';
import GradesCarousel from '../components/Products/GradesCarousel.jsx';
import Gallery from '../components/Gallery/Gallery.jsx';
import Enquiry from '../components/Enquiry/Enquiry.jsx';
import ContactInfo from '../components/ContactInfo/ContactInfo.jsx';
import Benefits from '../components/Benefits/Benefits.jsx';
import Testimonials from '../components/Testimonials/Testimonials.jsx';
import Connect from '../components/Connect/Connect.jsx';



function Home() {
  const pageRef = useRef(null);
  useReveal(pageRef);

  return (
    <div ref={pageRef}>
      <Hero />
      <About />
      <GradesCarousel />
      {/* <Connect /> */}
      <ProductCategories />
      <Processing />
      {/* <ProductCategories /> */}
      {/* <Benefits /> */}
      {/* <Quality /> */}
      {/* <Enquiry /> */}
      {/* <GradesCarousel /> */}
      <WhyChooseUs />
      <Testimonials />
      {/* <Gallery limit={8} /> */}
      {/* <ContactInfo /> */}
      <Enquiry />
    </div>
  );
}

export default Home;

