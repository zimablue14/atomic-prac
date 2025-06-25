import Heading from '../../atoms/Heading';
import Footer from '../../organisms/Footer';
import Header from '../../organisms/Header';
import PageTemplate from '../../templates/PageTemplate';

const NotFoundPage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <Heading>404 Not Found</Heading>
    </PageTemplate>
  );
};

export default NotFoundPage;
