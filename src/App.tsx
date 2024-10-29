import About from './components/About';
import Carpet from './components/Carpet';
import HeaderCarousel from './components/HeaderCarousel';
import Marble from './components/Marble';
import Navbar from './components/Navbar';
import OtherServices from './components/OtherServices';
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
      <Marble/>
      <OtherServices/>
    </>
  );
}

export default App;
