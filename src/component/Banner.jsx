import BannerImage from "../assets/banner.png";

const Banner = () => {
  return (
    <div className="relative min-h-162.5 flex items-center overflow-hidden sm:m-t-20 py-20">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium px-5 py-2 rounded-full border-none">
            <span className="bg-linear-to-r from-red-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
              <i className="fa-regular fa-circle-dot"></i>
            </span>
            New: AI-Powered Tools Available
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight tracking-tighter text-orange-600">
            Supercharge Your
            <br />
            <span className=" bg-linear-to-r from-red-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
              Digital Workflow
            </span>
          </h1>

          <p className="text-lg text-[#627382] max-w-lg">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>

          <div className="flex flex-wrap  gap-4 pt-4">
            <button className="btn bg-linear-to-r from-red-400 via-orange-400 to-amber-400  px-4 py-6 rounded-3xl font-semibold text-lg shadow-xl shadow-red-500/30 flex items-center gap-3 group text-white border-none">
              Explore Products
            </button>
            <button className="btn text-amber-500   px-4 py-6 rounded-3xl font-semibold text-lg  shadow-xl hover:shadow-red-500/30 hover:bg-linear-to-r from-red-400 via-orange-400 to-amber-400 hover:text-white hover:border-none    border border-orange-500">
              <i class="fa-solid fa-play"></i> Watch Demo
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <img
              className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-3xl animate-pulse"
              src={BannerImage}
              alt="AI Models Banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
