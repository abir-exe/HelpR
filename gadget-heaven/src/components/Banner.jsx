import BannerImg from "../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="pb-[300px] relative">
      <div className="hero bg-[rgb(149,56,226)] h-[60vh] text-white relative pb-20">
        <div className="hero-content text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="py-6">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <button className="btn font-bold rounded-3xl text-purple-800 bg-white">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 top-[calc(100%-400px)] flex justify-center">
        <img
          className="rounded-lg w-[700px] h-[40vh]"
          src={BannerImg}
          alt="Banner"
        />
      </div>
    </div>
  );
};

export default Banner;
