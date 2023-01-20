import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Join from './components/Join/Join';
import MainFooter from './components/MainFooter/MainFooter';
// import Plans from './components/Plans/Plans';
import Profissionals from './components/Profissionals/Profissionals';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
// import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <Reasons/>
      {/* <Plans/> */}
      {/* <Testimonials/> */}
      <Profissionals/>
      <Join/>
      <MainFooter />
      <Footer/>
    </div>
  );
}

export default App;
