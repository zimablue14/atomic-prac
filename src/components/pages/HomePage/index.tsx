import FeatureList from '../../organisms/FeatureList';
import Footer from '../../organisms/Footer';
import Header from '../../organisms/Header';
import Hero from '../../organisms/Hero';
import PageTemplate from '../../templates/PageTemplate';

const HomePage = () => {
  return (
    <PageTemplate
      header={<Header children={undefined} />}
      hero={<Hero children={undefined} />}
      footer={<Footer />}
    >
      <FeatureList />
    </PageTemplate>
  );
};

export default HomePage;
