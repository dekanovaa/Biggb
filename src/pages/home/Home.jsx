import Navbar from "../../components/navbar/navbar";
import vector1 from "../../assets/images/Vector 1.png";
import vector2 from "../../assets/images/Vector 2.png";
import book from "../../assets/images/book.svg";
import check from "../../assets/images/check.svg";
import check1 from "../../assets/images/check1.svg";
import panel from "../../assets/images/panel.png";
import data from "../../assets/images/Database digital.svg";
import star from "../../assets/images/Layer_47.svg";
import check2 from "../../assets/images/Iconography - Caesarzkn.svg";
import star2 from "../../assets/images/Star 1.svg";
import js from "../../assets/images/image 3.svg";
import img1 from "../../assets/images/Mask group.png";
import img2 from "../../assets/images/b3a372eeb05b2a8e1596ed0bd281ebfe9124da41.png";
import img3 from "../../assets/images/a23a660e0ff2161946b59096d7cb2a8005eecc35.png";
import img4 from "../../assets/images/40032b0da020107eb19d0a0dce360f4763df568e.png";
import img5 from "../../assets/images/e3c261046deabe2df8c53e96542544e2f68a63fb.png";
import img6 from "../../assets/images/0ba90eb44552187f07559ce1747460869f7cb165.png"
import Footer from "../../components/footer/footer";
import "./Home.css"

function Home() {
  return (
    <div>
      <Navbar />
      {/* section1 */}
      <section className="pt-16 font-syne">
        <div className="max-w-[1483px] w-full mx-auto px-5 ">
          <div className="md:flex justify-between ">
            <div>
              <h1 className=" lg:text-8xl sm:text-7xl text-6xl font-bold sm:leading-20 mb-10">
                Big <span className="font-extrabold">Perfect</span> <br /> Data &
                Domain.
              </h1>
              <button className="flex items-center gap-9 h-12 rounded-[102px] shadow-lg border-none p-1 pl-6 cursor-pointer">
                <span className="text-lg opacity-25 font-bold ">DOMAIN.AI</span>
                <span className="text-2xl font-bold text-white bg-gradient-to-r from-[#6756FF] to-white px-4 rounded-[76px]">
                  GO!
                </span>
              </button>
            </div>
            <ul className=" grid md:grid-cols-2 sm:grid-cols-4 grid-cols-2 gap-8 md:mt-0 mt-8  md:gap-12 md:pr-5 sm:mb-12 mb-8">
              <li>
                <p className="text-3xl font-bold">.com</p>
                <p className="font-normal leading-9">Starting price</p>
                <p className="font-light text-[#5C5C5C]">$13.34/Yearly</p>
              </li>
              <li>
                <p className="text-3xl font-bold">.net</p>
                <p className="font-normal leading-9">Starting price </p>
                <p className="font-light text-[#5C5C5C]">$13.34/Yearly</p>
              </li>
              <li>
                <p className="text-3xl font-bold">.biz</p>
                <p className="font-normal leading-9">Starting price </p>
                <p className="font-light text-[#5C5C5C]">$13.34/Yearly</p>
              </li>
              <li>
                <p className="text-3xl font-bold">.co</p>
                <p className="font-normal leading-9">Starting price</p>
                <p className="font-light text-[#5C5C5C]">$13.34/Yearly</p>
              </li>
            </ul>
          </div>
          <h2 className="lg:text-8xl md:text-7xl sm:text-6xl text-5xl font-extrabold leading-16 flex justify-end">
            SERVER
          </h2>
        </div>
      </section>
      {/* section2 */}
      <section className="py-16 relative">
        <img
          src={vector1}
          alt=""
          className="absolute w-full lg:top-[-32px] sm:top-0 top-8"
        />
        <img
          src={vector2}
          alt=""
          className="absolute w-full lg:bottom-[-32px] sm:bottom-0 bottom-8"
        />
        <div className="max-w-[1488px] mx-auto xl:px-28 px-5 backdrop-blur-sm bg-white/88 rounded-4xl grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-9 md:pt-16 pt-5 md:pb-7 pb-5">
          <div className="">
            <p className="text-2xl font-bold mb-6">
              <span className="font-extrabold">CPU</span> Platinum Processor
            </p>
            <div className="pl-4 pr-11 py-4 rounded-[102px] flex justify-between items-center lg:h-28 h-24 shadow-[0_0_25px_0_#0000000D] lg:w-[360px] w-full">
              <span className="bg-[linear-gradient(268.54deg,_#FFFFFF_-24.93%,_#505050_98.93%)] h-full w-24 rounded-[76px] text-white flex items-center justify-center text-[20px] font-bold">
                1 Core
              </span>
              <span className="text-[20px] font-bold">256 GB</span>
            </div>
          </div>
          {/*  */}
          <div className="">
            <p className="text-2xl font-bold mb-6">
              <span className="font-extrabold">RAM</span> DDR4 MEMORY
            </p>
            <div className="pl-4 pr-11 py-4 rounded-[102px] flex justify-between items-center lg:h-28 h-24 shadow-[0_0_25px_0_#0000000D] lg:w-[360px] w-full">
              <span className="bg-[linear-gradient(180deg,_#01B574_0%,_#89D5B2_129.35%)] h-full w-22 rounded-[76px] text-white flex items-center justify-center text-[20px] font-bold">
                1 GB
              </span>
              <span className="text-[20px] font-bold">256 GB</span>
            </div>
          </div>
          {/*  */}
          <div className="">
            <p className="text-2xl font-bold mb-6">
              <span className="font-extrabold">NVMe </span> SSD 16 PB
            </p>
            <div className="pl-4 pr-11 py-4 rounded-[102px] flex justify-between items-center lg:h-28 h-24 shadow-[0_0_25px_0_#0000000D] lg:w-[360px] w-full">
              <span className="bg-[linear-gradient(180deg,_#000000_0%,_#8F8F8F_129.35%)] h-full w-22 rounded-[76px] text-white flex items-center justify-center text-[20px] font-bold">
                1 GB
              </span>
              <span className="text-[20px] font-bold">4048 GB</span>
            </div>
          </div>
          {/*  */}
          <div className="">
            <p className="text-2xl font-bold mb-6">
              <span className="font-extrabold">GPU</span>  AI + GAME
            </p>
            <div className="pl-4 pr-11 py-4 rounded-[102px] flex justify-between items-center lg:h-28 h-24 shadow-[0_0_25px_0_#0000000D] lg:w-[360px] w-full">
              <span className="bg-[linear-gradient(268.54deg,_#FFE990_-24.93%,_#D1E51D_98.93%)] h-full w-24 rounded-[76px] text-white flex items-center justify-center text-[20px] font-bold">
                1 Core
              </span>
              <span className="text-[20px] font-bold">256 GB</span>
            </div>
          </div>
          {/*  */}
          <div className="">
            <p className="text-2xl font-bold mb-6">
              <span className="font-extrabold">18.28</span> 
            </p>
            <div className="p-4 rounded-[102px] flex justify-between items-center lg:h-28 h-24 shadow-[0_0_25px_0_#0000000D] lg:w-[360px] w-full cursor-pointer">
              <span className="bg-[linear-gradient(90deg,_#6A56FF_0%,_#003EFF_100%)] h-full w-full rounded-[76px] text-white flex items-center justify-center text-[20px] font-bold">
                18.28 USDT / DAY
              </span>
            </div>
          </div>
          {/*  */}
          <div className="">
            <p className="text-2xl font-bold mb-6">
              <span className="font-extrabold"></span> VPS / VDS
            </p>
            <div className="pl-4 pr-11 py-4 rounded-[102px] flex justify-between items-center lg:h-28 h-24 shadow-[0_0_25px_0_#0000000D] lg:w-[360px] w-full">
              <span className="bg-[linear-gradient(180deg,_#1DC1E5_0%,_#FFFFFF_129.35%)] h-full w-22 rounded-[76px] text-white flex items-center justify-center text-[20px] font-bold">
                GET
              </span>
              <span className="text-[20px] font-bold">BIG DATA</span>
            </div>
          </div>
        </div>
      </section>
      {/* section3 */}
      <section className=" py-12">
        <div className="max-w-[1448px] mx-auto w-full px-5 text-center">
          <p className="md:text-3xl sm:text-2xl text-xl font-bold md:mb-8 mb-4">
            Quick Setup <span className="font-extrabold leading-4 ">VPS / VDS</span>
          </p>
          <h2 className="md:text-6xl sm:text-5xl text-4xl font-extrabold leading-11 sm:mb-16 mb-10">
            <span className="font-bold text-center">Friendly</span> Control Panel
          </h2>
          <div className="lg:flex gap-12 justify-between">
            <div className="lg:text-right text-center justify-center">
              <div className="relative w-3xs h-28 rounded-3xl shadow-[0px_0px_25px_0px_#0000000D] flex gap-4 items-end pb-6 pl-5 lg:mb-28 mb-7">
                <img src={book} alt="" className="w-16 h-16" />
                <p className="text-2xl font-bold leading-6">
                  FREE <br />
                  <span className="font-extrabold"> CHAT</span>
                </p>
                <img src={check} alt="" className="absolute top-6 right-5" />
                <img src={check1} alt="" className="absolute top-8 right-6" />
              </div>
              <h4 className="sm:text-3xl text-2xl font-bold lg:text-right lg:mb-10 mb-4 text-left">
                ONE-CLICK DEPLOY
              </h4>
              <p className="lg:max-w-80 lg:text-right text-left">
                Your Ultimate Tool To Conquer Overwhelming Tasks — Break Big
                Goals Into Small Steps, Check Them Off One By One, And Watch
                Your Progress Reach 100%
              </p>
            </div>
            <div className="sm:w-[474px] sm:h-[474px] w-full h-96 md:rounded-[100px] rounded-[60px] md:p-8 p-4 shadow-[0px_0px_25px_0px_#0000000D] mx-auto">
              <img className="w-full h-full md:rounded-[100px] rounded-[60px]" src={panel} alt="" />
            </div>
            <div className="lg:text-left text-right lg:max-w-80">
              <div className="relative w-2xs h-28 rounded-3xl shadow-[0px_0px_25px_0px_#0000000D] flex gap-4 items-center pl-16 lg:mb-24 mb-4 lg:mr-auto ml-auto">
                <p className="text-2xl font-bold leading-6 text-right">
                  Real Time <br />
                  <span className="font-extrabold"> Database</span>
                </p>
                <img src={data} alt="" className="w-14 h-14" />
                <img src={star} alt="" className="absolute top-5 left-5" />
              </div>
              <h4 className="sm:text-3xl text-2xl font-bold lg:text-left text-right lg:mb-10 mb-4">
                We build the future
              </h4>
              <p className="lg:text-left ml-auto font-bold mb-6">
               +++ Neural Core 4048 GB CPU AI W — extreme AI power
                
              </p>
               <ul className="list-disc">
                <li>
                  <p className="">Multi Super App — social, marketplace, AI & fintech</p>
                </li>
                <li>
                  <p>
                  Data Center — <span className="font-bold">1 PB NVMe</span> ultra-fast storage
                  </p>
                </li>
                <li>
                  <p>
                  10-100 Gb/s
                  </p>
                </li>
               </ul>
             
            </div>
          </div>
        </div>
      </section>
      {/* section4 */}
      <section className="lg:py-12 py-5 lg:px-0">
        <div className="max-w-[1554px] mx-auto w-full lg:py-20 py-7 px-5 md:flex lg:gap-36 gap-14 lg:pl-28 pl-5 lg:rounded-[100px] rounded-4xl bg-[linear-gradient(90deg,_#F9F9F9_0%,_#FFFFFF_100%)] ">
          <div className="justify-center md:mb-0 mb-7">
            <h4 className="lg:text-3xl sm:text-2xl text-[20px] font-bold leading-14 mb-2">CONNECT SOCET BIG DATA</h4>
           <p className="lg:text-7xl sm:text-6xl text-5xl font-bold leading-14 md:mb-7 mb-5">11 278 620</p>
           <p className="lg:text-4xl text-3xl font-bold text-[#00E995]">ONLINE</p>
          </div>
          <div>
            <div className="flex items-center lg:gap-11 gap-4 lg:mb-12 md:mb-8 mb-5">
              <img className="" src={check2} alt="" />
              <p className="lg:text-3xl sm:text-2xl text-[20px] font-bold"><span className="font-normal">24/7/365</span> Online </p>
            </div>
            <div className="flex items-center lg:gap-11 gap-4">
              <img className="" src={check2} alt="" />
              <p className="lg:text-3xl sm:text-2xl text-[20px] font-normal"><span className="font-bold">Secure Your Files With</span> <br /> Automatic Backups</p>
            </div>
          </div>

        </div>
      </section>
      {/* section5 */}
      <section className="md:py-12 py-5">
        <div className="max-w-[1220px] mx-auto px-5 w-full">
          <div className="md:flex justify-between md:mb-16 mb-12">
            <div>
              <p className="sm:text-2xl text-[20px] font-bold text-[#4E4E4E] md:mb-8 mb-4">Realible & Quick Setup</p>
              <h4 className="md:text-6xl sm:text-5xl text-4xl font-bold leading-14 md:mb-0 mb-2">CHARACTERISTIC </h4>
            </div>
            <div className="flex items-center gap-5">
              <img src={star2} alt="" />
              <p className="text-3xl font-bold leading-6">5.0</p>
              <img src={js} alt="" />
            </div>
          </div>
          <div className="md:flex justify-between gap-9">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-3 lg:gap-8 gap-5 md:max-w-auto max-w-[400px] md:mb-0 mb-10">
              <div>
                <img src={img1} alt="" className="lg:mb-12 mb-6 lg:w-32 lg:h-32 w-24" />
                <div className="lg:w-32 w-24 h-2 bg-black"></div>
              </div>
              <img src={img2} alt="" className="lg:rounded-[25px] rounded-2xl lg:w-32 lg:h-32 w-24 h-24" />
              <img src={img3} alt="" className="lg:rounded-[25px] rounded-2xl lg:w-32 lg:h-32 w-24 h-24" />
              <img src={img4} alt="" className="lg:rounded-[25px] rounded-2xl lg:w-32 lg:h-32 w-24 h-24" />
              <img src={img5} alt="" className="lg:rounded-[25px] rounded-2xl lg:w-32 lg:h-32 w-24 h-24" />
              <img src={img6} alt="" className="lg:rounded-[25px] rounded-2xl lg:w-32 lg:h-32 w-24 h-24" />
            </div>
            <div className=" ">
              <div className="md:mb-24 mb-10">
                <p className="text-lg font-bold mb-1">Cluster</p>
                <p className="font-normal text-[#4E4E4E] mb-2.5">High-Speed</p>
                <p className="font-extrabold"> 24/7/365</p>

              </div>
              <div>
                <p className="sm:text-2xl text-lg font-normal">🖥️CPU Power 128-Core Gold / Platinum Processors</p>
                <p className="sm:text-2xl text-lg font-normal">🧠 512 GB DDR4 ECC Registered RAM +</p>
                <p className="sm:text-2xl text-lg font-normal">☁️ 1 048 128 TB NVMe SSD</p>
              </div>
            </div>

          </div>

        </div>
      </section>
      {/* section6 */}
      <section className="relative w-full md:pb-12 pb-5 lg:pt-64 md:pt-32 sm:pt-20 pt-40">
        <div className="absolute max-w-[1236px] w-full mx-auto px-5 left-0 right-0  bottom-[-190px] shadow-[0_0_25px_0_#FFFFFF40] bg-black lg:py-28 md:py-16 py-12 sm:flex md:rounded-[100px] rounded-4xl md:pl-24 pl-5 md:gap-20 bg-[radial-gradient(#444_1px,transparent_1px)] bg-[size:20px_20px]">
       <h3 className="lg:text-6xl sm:text-5xl text-4xl  font-bold text-white lg:max-w-[400px] sm:max-w-[300px] max-w-full sm:text-left text-center sm:mb-0 mb-5">Sign Up For <span className="text-[#FFEA7A]">Big Data</span> Today
       </h3>
       <div className="sm:text-left text-center">
        <p className="font-normal sm:text-4xl text-3xl text-white mb-1">start <span className="font-medium">GB</span>
        </p>
        <p className="font-bold sm:text-[40px] text-2xl text-white mb-9">$ 0.99/ <span className="font-extrabold">Day</span>
        </p>
        <button className="w-72 h-14 text-[20px] font-normal bg-white rounded-[100px] cursor-pointer">CONFIGURATION</button>
       </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
export default Home;
