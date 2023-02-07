import AboutCont from '../components/aboutUS/about';
import AppHeader from '../components/appHeader';
import OurTeam from '../components/team';
import Values from '../components/Values';

function AboutPage() {
  return (
    <>
     <AppHeader/>
     <AboutCont/>
     {/* <Values/> */}
     <OurTeam/>
    </>
  );
}

export default AboutPage;
