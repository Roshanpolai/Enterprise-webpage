import InnerPage from './InnerPage.jsx';
import About from '../components/About/About.jsx';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs.jsx';

function AboutPage() {
  return (
    <InnerPage title="About Us">
      <About showButton={false} />
      <WhyChooseUs />
    </InnerPage>
  );
}

export default AboutPage;
