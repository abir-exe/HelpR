import nlBg from "../../../assets/bg-shadow.png";

const NewsLetter = () => {
  return (
    <div
      className="border-2 mx-2 lg:w-full  items-center   flex justify-center py-20 rounded-lg bg-white   lg:px-10"
      style={{
        backgroundImage: `url(${nlBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <form>
        <h6 className="text-2xl lg:text-4xl font-bold text-center">
          Subscribe to our NewsLetter
        </h6>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text text-white">
              Subscribe to our newsletter for the latest update
            </span>
          </label>
          <div className="join flex flex-col md:flex-row lg:flex-row">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="input text-black input-bordered  gap-3 w-auto"
            />
            <button className="bg-gradient-to-r from-purple-500 to-yellow-400 text-white font-semibold py-2 px-auto rounded">
              Subscribe
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default NewsLetter;
