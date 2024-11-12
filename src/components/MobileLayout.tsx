import { Link } from "react-router-dom";

interface MobileLayoutProps {
  title: string;
  desc: string;
  url: string;
}

const MobileLayout = ({ title, desc, url }: MobileLayoutProps) => {
  return (
    <section className="px-6 py-4 xl:hidden xl:py-0 xl:px-0 mb-8">
      <div className="mb-5">
        <h2 className="text-3xl uppercase mb-2 font-bold xl:hidden">{title}</h2>
        <hr className="bg-red-600 h-[7px] w-[80px] xl:hidden" />
      </div>
      <p className="font-semibold">{desc}</p>

      <Link
        to={`${url}`}
        className="bg-red-600 flex items-center justify-center uppercase font-bold text-white rounded-sm  h-[40px] w-[150px] px-4 mt-5 xl:hidden"
      >
        Read More
      </Link>
    </section>
  );
};

export default MobileLayout;
