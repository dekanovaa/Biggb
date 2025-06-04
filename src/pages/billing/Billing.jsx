import "./Billing.css";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import balans from "../../assets/images/Balance (1).png";
import icon from "../../assets/images/Icon (5).svg";
import visa from "../../assets/images/Visa Icon.png";

function Billing() {
  const menu = {
    dashboard: "Dashboard",
    tables: "Tables",
    billing: "Billing",
    web: "RTL",
    profile: "Profile",
    storage: "Sign In",
    sign: "Sign Up",
  };
  let cart = false;
  let title = {
    page: "Pages",
    subtitle: "Billing Billing",
  };
  const menu2 = {
    server: "DASHBOARD",
    wallet: "PROFILE",
    cloud: "SIGN UP",
    signin: "SIGN IN",
  };

  return (
    <div className="bg-billing p-[10px] h-screen overflow-y-auto">
      <div className="relative">
        <Sidebar sideItems={menu} iscart={cart} />
      </div>
      <div className="relative">
        <Header title={title} menuItems={menu2} />
      </div>
      <div className="content pt-28 pl-[300px]">
        <div className="md:flex items-center gap-6 mb-7">
          <div className="sm:w-[460px] w-full h-60 rounded-2xl cart-bg pt-6 px-8">
            <p className="text-lg text-white font-bold mb-16">TRC 20</p>
            <p className="text-2xl font-bold text-white mb-3">
              2u4o2ujrrj92ur2jr292u3u2j
            </p>
            <div className="flex gap-12">
              <div className="">
                <p className="text-[10px] font-medium text-white">COIN</p>
                <p className="text-[14px] font-bold text-white">USDT</p>
              </div>
              <div>
                <p className="text-[10px] font-medium text-white">WALLET</p>
                <p className="text-[14px] font-bold text-white">COPY ADRESS</p>
              </div>
            </div>
          </div>
          <div className="sm:w-[460px] w-full h-60 rounded-2xl cart-bg-2 p-7">
            <img className="w-full h-[103px] mb-2.5" src={balans} alt="" />
            <p className="text-gray-400 text-[10px] font-medium mb-2">NEWEST</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <img src={icon} alt="" />
                <p className="text-[14px] font-medium text-white">
                  GET + <br />
                  <span className="text-gray-400">Today, 16:36</span>{" "}
                </p>
              </div>
              <p className="text-[14px] font-bold text-white">154.50 USDT</p>
            </div>
          </div>
        </div>
        <div className="wallet max-w-[900px] mb-6 w-full py-6 px-6 rounded-2xl">
          <div className="flex justify-between mb-8">
            <p className="text-lg font-bold text-white">WALLET TRC 20 USDT</p>
            <button className="w-36 h-9  rounded-2xl bg-[#0075FF] text-white text-[10px] font-bold">
              ADD A NEW TRC 20
            </button>
          </div>
          <div className="grid grid-cols-2 gap-7">
            <div className="flex items-center gap-3 border-2 border-transparent custom-border rounded-xl py-5 px-7">
              <div className="w-[13.5px] h-[13.5px] rounded-full bg-white"></div>
              <p className="text-lg font-bold text-white">
                2u4o2ujrrj92ur2jr292u3u2j
              </p>
            </div>
            <div className="flex items-center gap-3 justify-between border-2 border-transparent custom-border rounded-xl py-5 px-7">
              <div className="flex items-center gap-2.5">
                <img src={visa} alt="" />
                <p className="text-[14px] font-medium text-white">
                  7812 2139 0823 XXXX
                </p>
              </div>
              <i class="fa-solid fa-pen text-white text-end"></i>
            </div>
            <div></div>
          </div>
        </div>
        <ul className="py-7 px-5 max-w-[674px] w-full list rounded-2xl h-auto">
          <li className="flex items-center justify-between mb-5">
            <p className="text-white text-lg font-bold">Your Transactions</p>
            <p className="text-gray-400 text-[14px]">
              {" "}
              <i class="fa-solid fa-calendar-days mr-3"></i>12 March 2020
            </p>
          </li>
          <li className="flex items-center justify-between mb-5">
            <p className="text-gray-400 text-[14px]">NEWEST</p>
          </li>
          <li className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <i class="fa-solid fa-down-long text-[#E31A1A] font-extralight py-3 px-4 rounded-full border border-[#E31A1A]"></i>
              <div>
                <p className="text-white font-medium text-[14px] mb-2">
                  NEW SERVER
                </p>
                <p className="text-gray-400 font-medium text-[14px]">
                  27 March 2020, at 12:30 PM
                </p>
              </div>
            </div>
            <p className="text-gray-400 font-medium text-[14px]">2500 USDT</p>
          </li>
          <li className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <i class="fa-solid fa-up-long text-[#01B574] font-extralight py-3 px-4 rounded-full border border-[#01B574]"></i>
              <div>
                <p className="text-white font-medium text-[14px] mb-2">
                  NEW SERVER
                </p>
                <p className="text-gray-400 font-medium text-[14px]">
                  27 March 2020, at 12:30 PM
                </p>
              </div>
            </div>
            <p className="text-gray-400 font-medium text-[14px]">2500 USDT</p>
          </li>
          <li className="flex items-center justify-between mb-5">
            <p className="text-gray-400 text-[14px]">NEWEST</p>
          </li>
          <li className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <i class="fa-solid fa-up-long text-[#01B574] font-extralight py-3 px-4 rounded-full border border-[#01B574]"></i>
              <div>
                <p className="text-white font-medium text-[14px] mb-2">
                  NEW SERVER
                </p>
                <p className="text-gray-400 font-medium text-[14px]">
                  27 March 2020, at 12:30 PM
                </p>
              </div>
            </div>
            <p className="text-gray-400 font-medium text-[14px]">2500 USDT</p>
          </li>
          <li className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <i class="fa-solid fa-up-long text-[#01B574] font-extralight py-3 px-4 rounded-full border border-[#01B574]"></i>
              <div>
                <p className="text-white font-medium text-[14px] mb-2">
                  NEW SERVER
                </p>
                <p className="text-gray-400 font-medium text-[14px]">
                  27 March 2020, at 12:30 PM
                </p>
              </div>
            </div>
            <p className="text-gray-400 font-medium text-[14px]">2500 USDT</p>
          </li>
          <li className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <p className=" text-gray-400 font-extralight py-3 px-5 rounded-full border border-gray-400">
                !
              </p>
              <div>
                <p className="text-white font-medium text-[14px] mb-2">
                  NEW SERVER
                </p>
                <p className="text-gray-400 font-medium text-[14px]">
                  27 March 2020, at 12:30 PM
                </p>
              </div>
            </div>
            <p className="text-gray-400 font-medium text-[14px]">2500 USDT</p>
          </li>
          <li className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <i class="fa-solid fa-down-long text-[#E31A1A] font-extralight py-3 px-4 rounded-full border border-[#E31A1A]"></i>
              <div>
                <p className="text-white font-medium text-[14px] mb-2">
                  NEW SERVER
                </p>
                <p className="text-gray-400 font-medium text-[14px]">
                  27 March 2020, at 12:30 PM
                </p>
              </div>
            </div>
            <p className="text-gray-400 font-medium text-[14px]">2500 USDT</p>
          </li>
        </ul>
        <footer className="flex items-center justify-between py-7">
            <p className="text-white text-[14px] ">@ 2025, Made with ❤️ </p>
            <div className="flex items-center gap-11"> 
                <p className="text-white text-[14px]">BIG DATA</p>
                <p className="text-white text-[14px]">WALLET</p>
                <p className="text-white text-[14px]">LICENSE</p>
            </div>
        </footer>
      </div>
    </div>
  );
}

export default Billing;
