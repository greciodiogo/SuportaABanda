import AppHeader from '../components/appHeader';
import Hero from '../components/Hero/Hero';
import Join from '../components/Join/Join';
import Profissionals from '../components/Profissionals/Profissionals';
import Programs from '../components/Programs/Programs';
import Reasons from '../components/Reasons/Reasons';
import OurTeam from '../components/team';
import Values from '../components/Values';

function AboutPage() {
  return (
    <>
     <AppHeader/>
     <Values/>
     <OurTeam/>
    </>
  );
}

export default AboutPage;
