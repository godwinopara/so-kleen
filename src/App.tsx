import About from './components/About';
import Carpet from './components/Carpet';
import HeaderCarousel from './components/HeaderCarousel';
import Navbar from './components/Navbar';
import OurServices from './components/OurServices';
import WhyChooseUs from './components/WhyChooseUs';

function App() {
  return (
    <>
      <HeaderCarousel/>
      <Navbar/>
      <About/>
      <WhyChooseUs/>
      <OurServices/>
      <Carpet/>
    </>
  );
}

export default App;
