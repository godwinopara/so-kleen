import img from "../images/marble.jpg";
import img2 from "../images/marble-mobile.jpeg";
import MobileLayout from "./MobileLayout";

const Marble = () => {
  return (
    <section id="marble">
      <div>
        <img src={img} alt="services img" className="hidden lg:block" />
        <img src={img2} alt="services img" className="block lg:hidden" />
      </div>
      <div className="hidden xl:block max-w-[1150px] mx-auto mb-10 py-10">
        <div className="py-6">
          <h2 className="text-7xl mt-8 mb-8 font-bold">Marble Restoration</h2>

          <p className="font-semibold text-xl">
            Marble is a valuable investment, and we believe replacing dull,
            worn-out marble isn’t always the best solution. Instead, take
            advantage of our affordable marble restoration services, which are
            designed to restore the shine and mirror finish of your marble, no
            matter its age.
          </p>
          <br />
          <p className="font-semibold text-xl mb-10">
            Our step-by-step marble restoration process guarantees remarkable
            results, enhancing the original color and bringing back the natural
            beauty of your marble surfaces. With our expert care, your marble
            will look as stunning as the day it was installed.
          </p>

          <hr className="bg-red-500 h-[3px]" />
        </div>
        <div className="py-6">
          <p className="mb-6">
            We take great pride in our experience, expertise, and commitment to
            quality, which have made us a leading force in Marble and Limestone
            restoration. With a keen eye for detail and the highest standards of
            craftsmanship, we specialize in restoring your natural marble
            surfaces to their original, beautiful condition, enhancing their
            elegance and longevity.
          </p>
          <h3 className="uppercase mb-6 font-bold text-xl text-red-600">
            OUR MARBLE RESTORATION PROCESS
          </h3>

          <ul className="list-disc list-inside pl-6 mb-6">
            <li>
              <strong>Cleaning:</strong> The cleaning process removes embedded
              dirt, wax, and other build-up, restoring the stone's surface.
            </li>
            <li>
              <strong>Grinding:</strong> Using diamond abrasives, we grind away
              a thin layer of the stone to eliminate deep scratches, lippage,
              and imperfections, creating a smoother surface.
            </li>
            <li>
              <strong>Honing:</strong> Honing addresses minor scratches and
              imperfections caused by foot traffic, refining the stone’s
              appearance.
            </li>
            <li>
              <strong>Polishing:</strong> Using state-of-the-art equipment and
              techniques, we polish the stone to a satin, semi-gloss, or
              high-gloss finish, depending on your preference.
            </li>
            <li>
              <strong>Sealing:</strong> Finally, we apply a protective sealant
              to your stone flooring, guarding it against water and oil-based
              stains, and ensuring long-lasting beauty and durability.
            </li>
          </ul>

          <p>PLEASE FEEL FREE TO CALL US FOR A FREE SAMPLE.</p>
        </div>
      </div>

      {/* =============== Mobile Content =============== */}
      <MobileLayout
        title="Marble Restoration"
        desc="Marble is a valuable investment, and we believe replacing dull,
            worn-out marble isn’t always the best solution. Instead, take
            advantage of our affordable marble restoration services, which are
            designed to restore the shine and mirror finish of your marble, no
            matter its age."
        url="/marble"
      />
    </section>
  );
};

export default Marble;
