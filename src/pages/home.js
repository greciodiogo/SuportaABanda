import Hero from '../components/Hero/Hero';
import Join from '../components/Join/Join';
import Profissionals from '../components/Profissionals/Profissionals';
import Programs from '../components/Programs/Programs';
import Reasons from '../components/Reasons/Reasons';

function HomePage() {
  return (
    <>
      <Hero/>
      <Programs/>
      <Reasons/>
      <Profissionals/>
      <Join/>
    </>
  );
}

export default HomePage;
