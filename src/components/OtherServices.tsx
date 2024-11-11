import img from "../images/otherservices.jpeg";
import MobileLayout from "./MobileLayout";

const OtherServices = () => {
  return (
    <section id="other-services">
      <img
        src={img}
        alt="our services"
        className="h-[490.233px] w-full object-top object-cover"
      />
      <div className="hidden xl:block mb-10 max-w-[1150px] mx-auto">
        <div className="mb-10">
          <div className="">
            <h2 className="text-7xl mt-8 mb-8 font-bold">Other Services</h2>
            <p className="font-semibold text-xl mb-10">
              Whatever your cleaning needs we will adapt our cleaning services
              to match your needs. We will discuss your requirements, design the
              perfect cleaning specification and deliver the very best service
              in tune with best hygiene practices.
            </p>

            <hr className="bg-red-500 h-[3px]" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-10">
          <div>
            <h3 className="uppercase text-red-500 font-bold text-lg mb-5">
              Post -Construction/Renovation Cleaning
            </h3>
            <p>
              Reds Cleaning Services Ltd Is Undisputedly The Most Detailed Post
              Construction Cleaning Company In Nigeria, We Possess All The
              Required Human And Material Resources To Deliver Efficient
              Cleaning Services To Meet Your Needs..
            </p>
            <br />
            <p>
              Our Post-Construction Cleaning Services Include (But Not Limited
              To):
            </p>
            <br />

            <ul className="list-disc list-inside pl-8">
              <li>Washing All Surfaces</li>
              <li>
                High Dust Removal From Ceiling Pipes, Duct Work, Vents, Light
                Fixtures, Etc.
              </li>
              <li>
                Stain Removal, Scrubbing, Dusting And Vacuuming Of All Surfaces.
              </li>
              <li>Cleaning Of The Insides Of Desks And File Cabinets.</li>
              <li>
                Detailed Scrubbing And Sanitizing Of Kitchens And Bathrooms To
                Make Them Ready For Your Use.
              </li>
              <li>
                Scrub Floors And Tiles, Polish Stainless Steel, Wipe Walls And
                More.
              </li>
              <li>Floor Cleaning, Waxing And Buffing</li>
              <li>Cleaning Window Sills And Window Frames</li>
              <li>
                Window And Glass Cleaning Including Scraping And Etching Removal
              </li>
            </ul>
            <br />
            <div>
              <h3 className="uppercase text-red-500 font-bold text-lg mb-3">
                Window Cleaning
              </h3>
              <p>
                We Offer A Thorough, High Quality Window Cleaning Service, Using
                Professional Cleaning Materials And Equipment. Our Competitive
                Prices And Reliable Service Guarantee That You Will See A
                Noticeable Difference In Your Home Or Office.
              </p>
            </div>
            <br />
            <div>
              <h3 className="uppercase text-red-500 font-bold text-lg mb-3">
                End Of Tenancy Cleaning
              </h3>
              <p>
                Moving Houses? Our Professional End Of Tenancy Cleaning Service
                Offers A Thorough Deep Clean Of The Entire Property, In
                Preparation For The Start Or End Of A Tenancy. We Are Very
                Experienced In This Area And Have Many Satisfied Customers.
              </p>
            </div>
          </div>
          <div>
            <h3 className="uppercase text-red-500 font-bold text-lg">
              Floor Care And Maintenance
            </h3>
            <p>
              Hard Surface Flooring - Such As Tile, Vinyl, Terrazzo, Granite And
              Marble – Requires Technical Knowledge To Properly Clean And
              Maintain. As A Janitorial Services Company, We Continually Train
              Our Technicians On New And Effective Trends In Floor Maintenance.
              Keep Your Hardwood And Tile Flooring Clean And Looking Great With
              Our Professional Services:
            </p>
            <ul className="list-disc list-inside pl-8 mb-5">
              <li>Strip, Seal And Polish Floors (Marble, Terrazzo, Ceramic)</li>
              <li>Scrub And Recoat Tile Floors</li>
              <li>Scrub And Buff Tile Floors</li>
              <li>High Speed Floor Burnishing </li>
              <li>Scrub Concrete, Ceramic And Quarry Tile Floors</li>
            </ul>
            <div className="mb-4">
              <h3 className="uppercase text-red-500 font-bold text-lg mb-3">
                Rest Room Cleaning
              </h3>
              <p>
                We Are Dedicated To Creating And Maintaining Washroom
                Environments That Are Not Only Clean And Hygienic But Also Safe,
                Pleasant And Welcoming. We're Confident That You'll Be Impressed
                With Our Standards For Quality And Attention To Detail.
              </p>
            </div>
            <h3 className="uppercase text-red-500 font-bold text-lg mb-4">
              Special Request Cleaning
            </h3>
            <h3 className="uppercase text-red-500 font-bold">
              Whatever Your Professional Cleaning Needs Are, We’re Confident
              We’ll Make You Smile Always.
            </h3>
          </div>
        </div>
      </div>
      <MobileLayout
        title="Other Services"
        desc="Whatever your cleaning needs we will adapt our cleaning services
              to match your needs. We will discuss your requirements, design the
              perfect cleaning specification and deliver the very best service
              in tune with best hygiene practices."
      />
    </section>
  );
};

export default OtherServices;
