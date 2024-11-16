import "./footer.css";
import nlBg from "../../../assets/bg-shadow.png";
import NewsLetter from "../newsLetter/NewsLetter";

const Footer = () => {
  // <main>
  //   <section class="h-[300px]"></section>
  // </main>
  // <footer>
  //   <section>
  //     newsletter
  //   </section>
  //   <section>footer</section>
  // </footer>

  return (
    <div>
      <main>
        <section className="h-[300px]"></section>
      </main>

      {/* footer  */}
      <div className="relative border-red-700">
        <div className="bg-black pt-60  mx-auto w-full  ">
          <div className="absolute top-[-200px]   mx-auto lg:mx-[500px]">
            <section className="">
              <NewsLetter></NewsLetter>
            </section>
          </div>
          <div className="items-center mx-auto flex justify-center">
            <img src="/assets/logo-footer.png" alt="" />
          </div>

          <footer className="footer  text-white  p-10 justify-around mx-auto border-red-700">
            <nav>
              <h6 className="footer-title">About Us</h6>
              <a className="link link-hover">
                We are a passionate team <br /> dedicated to providing the best{" "}
                <br /> service to our customers.
              </a>
            </nav>
            <nav>
              <h6 className="footer-title">Quick Links</h6>
              <a className="link link-hover">Home</a>
              <a className="link link-hover">Service</a>
              <a className="link link-hover">ABout</a>
              <a className="link link-hover">Contact</a>
            </nav>

            <form>
              <h6 className="footer-title">Subscribe</h6>
              <fieldset className="form-control w-80">
                <label className="label">
                  <span className="label-text text-white">
                    Subscribe to our newsletter for the latest update
                  </span>
                </label>
                <div className="join">
                  <input
                    type="text"
                    placeholder="username@site.com"
                    className="input text-black input-bordered join-item"
                  />
                  <button className="bg-gradient-to-r from-purple-500 to-yellow-400 text-white font-semibold py-2 px-4 rounded">
                    Subscribe
                  </button>
                </div>
              </fieldset>
            </form>
          </footer>
          <div className="w-3/4 mx-auto">
            <hr />
          </div>
          <footer className="footer footer-center bg-black text-base-300 p-4">
            <aside>
              <p>
                Copyright © {new Date().getFullYear()} - All right reserved by
                ACME Industries Ltd
              </p>
            </aside>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
