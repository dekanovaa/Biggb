import icon1 from "../../assets/images/Icon.svg";
import icon2 from "../../assets/images/Icon (1).svg";
import icon3 from "../../assets/images/Icon (2).svg";
import icon4 from "../../assets/images/Icon (3).svg";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Nav({ menuItems }) {
  const [isModal, setIsModal] = useState(false);
  function modalFunction() {
    setIsModal(!isModal);
  }
  return (
    <>
      <nav className=" md:border-2 border-0 md:border-[#696868] md:rounded-3xl bg-[linear-gradient(123.64deg,rgba(255,255,255,0)_-22.38%,rgba(255,255,255,0.039)_70.38%)] max-w-[987px] mx-auto px-4 flex items-center justify-between py-2.5">
        <a
          href=""
          className=" font-inter bg-[linear-gradient(97.89deg,_#FFFFFF_70.67%,_rgba(117,122,140,0)_108.55%)] bg-clip-text text-transparent"
        >
          AI BIG DATA
        </a>
        <ul className="md:flex items-center gap-7  hidden">
          <li className="flex items-center gap-1">
            <img src={icon1} alt="" />
            <a className="text-[10px] font-bold text-white font-inter" href="">
              {menuItems.server}
            </a>
          </li>
          <li className="flex items-center gap-1">
            <img src={icon2} alt="" />
            <a className="text-[10px] font-bold text-white font-inter" href="">
              {menuItems.wallet}
            </a>
          </li>
          <li className="flex items-center gap-1">
            <img src={icon3} alt="" />
            <a className="text-[10px] font-bold text-white font-inter" href="">
              {menuItems.cloud}
            </a>
          </li>
          <li className="flex items-center gap-1">
            <img src={icon4} alt="" />
            <a className="text-[10px] font-bold text-white font-inter" href="">
              {menuItems.signin}
            </a>
          </li>
        </ul>

        {/* responsive list */}
        <AnimatePresence>
        {isModal && (
          <motion.div
            className="fixed top-0 right-0 w-3xs p-9 bg-[#0C0F35] h-full z-20"
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <button className="text-white mb-8" onClick={modalFunction}>
            <i class="fa-solid fa-xmark"></i>
            </button>
            <ul className="flex flex-col gap-6">
            <li className="flex items-center gap-1">
                <img src={icon1} alt="" />
                <a className="text-[10px] font-bold text-white font-inter" href="">
                  {menuItems.server}
                </a>
              </li>
              <li className="flex items-center gap-1">
                <img src={icon2} alt="" />
                <a className="text-[10px] font-bold text-white font-inter" href="">
                  {menuItems.wallet}
                </a>
              </li>
              <li className="flex items-center gap-1">
                <img src={icon3} alt="" />
                <a className="text-[10px] font-bold text-white font-inter" href="">
                  {menuItems.cloud}
                </a>
              </li>
              <li className="flex items-center gap-1">
                <img src={icon4} alt="" />
                <a className="text-[10px] font-bold text-white font-inter" href="">
                  {menuItems.signin}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      

        <button className="font-inter w-36 h-9 bg-[#0075FF] text-white rounded-2xl text-[10px] md:flex items-center justify-center hidden">
          NEW SERVER
        </button>
        <button onClick={modalFunction} className="md:hidden flex">
          <i className="fa-solid fa-bars text-lg text-white"></i>
        </button>
      </nav>
    </>
  );
}
export default Nav;
