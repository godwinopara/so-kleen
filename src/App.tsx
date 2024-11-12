import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomeMobile";
import AboutMobile from "./pages/AboutMobile";
import CarpetsUpholstery from "./pages/CarpetsUpholstery";
import JanitorialMobile from "./pages/JanitorialMobile";
import MarbleMobile from "./pages/MarbleMobile";
import OtherServicesMobile from "./pages/OtherServicesMobile";
import WhyChooseUsMobile from "./pages/WhyChooseUsMobile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutMobile />} />
      <Route path="/carpet-upholstery" element={<CarpetsUpholstery />} />
      <Route path="/janitorial" element={<JanitorialMobile />} />
      <Route path="/marble" element={<MarbleMobile />} />
      <Route path="/other-services" element={<OtherServicesMobile />} />
      <Route path="/why-choose-us" element={<WhyChooseUsMobile />} />
    </Routes>
  );
}

export default App;
