import InnerPage from './InnerPage.jsx';
import Processing from '../components/Processing/Processing.jsx';
import Quality from '../components/Quality/Quality.jsx';

function FacilityPage() {
  return (
    <InnerPage title="Our Facility">
      <Processing />
      <Quality />
    </InnerPage>
  );
}

export default FacilityPage;
