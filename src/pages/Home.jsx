import { Hero, Stats, Testimonials } from '../components';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Stats />
      <Testimonials />
    </div>
  );
};

export default Home;