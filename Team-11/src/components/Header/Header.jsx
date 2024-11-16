import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../../assets/logo.png";
import Blogo from "../../../assets/banner-main.png";
import { CiCoinInsert } from "react-icons/ci";

const Header = ({ coins, setCoins }) => {
  // const [coins, setCoins] = useState(0);
  const [isGiftClaimed, setIsGiftClaimed] = useState(false);

  const simpleToast = (message) => {
    toast.success(message, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
    });
  };

  const handleClaimFreeCredit = () => {
    if (!isGiftClaimed) {
      const amountToAdd = 600000;
      setCoins(coins + amountToAdd);
      simpleToast(`Wow! You have gifted $${amountToAdd}`);
      setIsGiftClaimed(true);
    } else {
      simpleToast("You've already received the gift.");
    }
  };
  return (
    <div>
      <div className="w-11/12 mx-auto  ">
        <nav className="">
          <div className="navbar ">
            <div className="navbar-start">
              <img src={logo} alt="" />
              <div className="hidden lg:block">
                <h1 className="text-3xl font-extrabold ">Team11</h1>
              </div>
            </div>
            <div className="lg:navbar-end hidden md:flex lg:flex  border-solid item">
              <ul className="menu menu-horizontal px-1 text-lg font-medium text-smallText">
                <li className="hover:text-primary transition-colors duration-700 ease-in-out">
                  <a className="font-bold">Home</a>
                </li>
                <li className="hover:text-primary transition-colors duration-700 ease-in-out">
                  <a className="text-smallText" href="">
                    Fixture
                  </a>
                </li>
                <li className="hover:text-primary transition-colors duration-700 ease-in-out">
                  <a href="">Teams</a>
                </li>
                <li className="hover:text-primary transition-colors duration-700 ease-in-out">
                  <a href="">Schedules</a>
                </li>
              </ul>
            </div>
            <div className="ml-5 end border-red-500">
              <div className="items-center gap-10 hidden md:block lg:block mr-[-150px]">
                <button className="items-center font-semibold gap-4  px-10 flex bg-base-300 rounded-lg p-2">
                  <div>${coins}Coin</div>
                  <div className="text-3xl font-bold text-yellow-700">
                    <CiCoinInsert />
                  </div>
                </button>
              </div>

              <div className="dropdown ml-40">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost  md:hidden lg:hidden "
                >
                  {/* <i className="fa-solid fa-bars"></i> */}
                  <GiHamburgerMenu />
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow right-0"
                >
                  <li className="hover:text-primary transition-colors duration-700 ease-in-out font-bold">
                    <a>Home</a>
                  </li>
                  <li className="hover:text-primary transition-colors duration-700 ease-in-out font-bold">
                    <a href="">Fixture</a>
                  </li>
                  <li className="hover:text-primary transition-colors duration-700 ease-in-out font-bold">
                    <a href="">Team</a>
                  </li>
                  <li className="hover:text-primary transition-colors duration-700 ease-in-out font-bold">
                    <a href="">Schedules</a>
                  </li>

                  <button className="flex items-center gap-2 font-semibold">
                    <button className="flex   my-3 font-bold ml-3">
                      <i className="fa-regular fa-user text-xl">
                        Coin <span>{coins}</span>
                      </i>
                    </button>
                  </button>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        {/* banner section start  */}
        <div
          className="hero h-[90vh] lg:h-[70vh]  rounded-lg overflow-hidden mt-2 object-cover bg-black"
          style={{
            backgroundImage:
              "url('https://i.ibb.co.com/PjdFWf9/bg-shadow.png')",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="items-center mx-auto">
              <img className="mx-auto" src={Blogo} alt="" />
              <h1 className="mb-5 text-2xl lg:text-4xl font-bold w-full py-3">
                Assemble your Ultimate Dream 11 Cricket Team
              </h1>
              <p className="mb-5">Beyond Boundaries Beyond Limits</p>
              <button
                onClick={handleClaimFreeCredit}
                className="bg-gradient-to-r from-purple-500 to-yellow-400 text-white font-semibold py-2 px-4 rounded "
              >
                Claim Free Credit
              </button>
            </div>
          </div>
        </div>
        {/* banner section end  */}
      </div>
    </div>
  );
};

export default Header;
