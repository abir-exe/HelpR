import Heading from "./Heading";

const Footer = () => {
  return (
    <div className="" w-full>
      <div className="w-3/4 mx-auto mt-40 mb-20  text-black  ">
        <Heading
          title={"Gadget heaven"}
          subtitle={
            "Explore the latest gadgets that will take your experience to the next level. From smart device to the coolest accessories, we have it all"
          }
        ></Heading>
      </div>
      <footer className="footer bg-neutral text-neutral-content p-10 w-full">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
