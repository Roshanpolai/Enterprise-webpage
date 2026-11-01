import InnerPage from './InnerPage.jsx';
import ContactInfo from '../components/ContactInfo/ContactInfo.jsx';
import Enquiry from '../components/Enquiry/Enquiry.jsx';

function ContactPage() {
  return (
    <InnerPage title="Contact Us">
      <ContactInfo />
      <Enquiry />
    </InnerPage>
  );
}

export default ContactPage;
