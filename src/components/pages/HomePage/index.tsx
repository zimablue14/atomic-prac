import FeatureList from '../../organisms/FeatureList';
import Footer from '../../organisms/Footer';
import Header from '../../organisms/Header';
import Hero from '../../organisms/Hero';
import PageTemplate from '../../templates/PageTemplate';

const HomePage = () => {
  return (
    <PageTemplate header={<Header />} hero={<Hero />} footer={<Footer />}>
      <FeatureList />
    </PageTemplate>
  );
};

export default HomePage;
