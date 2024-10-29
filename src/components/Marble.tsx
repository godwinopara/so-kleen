import img from "../images/marble.jpg";
import MobileLayout from "./MobileLayout";

const Marble = () => {
  return (
    <section id="marble">
      <img src={img} alt="services img" />
      <div className="hidden xl:block max-w-[1150px] mx-auto mb-10">
        <div className="py-6">
          <h2 className="text-7xl mt-8 mb-8 font-bold">Marble Restoration</h2>

          <p className="font-semibold text-xl mb-10">
            Marble is an expensive investment and we believe that replacing it
            when dull isn’t the smart choice. Instead, utilize our low-cost
            marble restoration services that will restore the shine and mirror
            finish of the existing marble no matter the marbles age. Our
            step-by-step marble restoration process offers guaranteed results
            that uplift the original colour of the marble.
          </p>

          <hr className="bg-red-500 h-[3px]" />
        </div>
        <div className="py-6">
          <p className="mb-6">
            We pride ourselves on our experience, expertise and quality of work
            that makes us a leading force in the field of Marble and Limestone
            restoration. Using our high standards of craftsmanship and
            restoration skills, we can restore your natural Marble surfaces back
            to its original and beautiful appearance.
          </p>
          <h3 className="uppercase mb-6 font-bold text-xl text-red-600">
            OUR MARBLE RESTORATION PROCESS
          </h3>

          <ul className="list-disc list-inside pl-6 mb-6">
            <li>
              Cleaning - The cleaning process entails the removal of embedded
              dirt, wax and other build-up.
            </li>
            <li>
              Grinding - Grinding with diamond abrasives removes a very thin
              layer from the stone’s surface to eliminate deep scratches,
              lippage and other imperfections.
            </li>
            <li>
              Honing - Honing involves the removal of more minor, superficial
              scratches and flaws from foot traffic.
            </li>
            <li>
              Polishing - We use state-of-the-art stone polishing equipment and
              techniques to achieve a satin, semi-gloss, or high gloss finish.
            </li>
            <li>
              Sealing - The stone flooring is sealed, protecting it from water
              and oil-based stains
            </li>
          </ul>

          <p>PLEASE FEEL FREE TO CALL US FOR A FREE SAMPLE.</p>
        </div>
      </div>

      {/* =============== Mobile Content =============== */}
      <MobileLayout
        title="Marble Restoration"
        desc="Marble is an expensive investment and we believe that replacing it
            when dull isn’t the smart choice. Instead, utilize our low-cost
            marble restoration services that will restore the shine and mirror
            finish of the existing marble no matter the marbles age. Our
            step-by-step marble restoration process offers guaranteed results
            that uplift the original colour of the marble."
      />
    </section>
  );
};

export default Marble;
