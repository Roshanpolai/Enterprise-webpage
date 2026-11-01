import InnerPage from './InnerPage.jsx';
import Gallery from '../components/Gallery/Gallery.jsx';

function GalleryPage() {
  return (
    <InnerPage title="Gallery">
      <Gallery limit={12} showButton={false} />
    </InnerPage>
  );
}

export default GalleryPage;
