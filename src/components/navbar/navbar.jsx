import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/sign');
    };
    const [isModal, setIsModal] = useState(false);
    function modalFunction() {
      setIsModal(!isModal);
    }
  return( <>
  <div className="md:py-7 py-4 font-syne">
    <div className="max-w-[1483px] mx-auto w-full px-5 flex items-center justify-between">
        <a href="#" className="text-black font-bold md:text-2xl text-xl">BIGGB 🔒</a>
        <ul className="md:flex hidden items-center lg:gap-7 gap-4">
            <li className="flex items-center lg:gap-5 gap-2 cursor-pointer">
                <p className="lg:text-lg font-bold">SERVER</p>
                <span className="lg:w-4 lg:h-4 w-2 h-2 rounded-full bg-black"></span>
            </li>
            <li className="flex items-center lg:gap-5 gap-2 cursor-pointer">
                <p className="lg:text-lg font-bold">DOMAIN</p>
                <span className="lg:w-4 lg:h-4 w-2 h-2 rounded-full bg-black"></span>
            </li>
            <li className="flex items-center lg:gap-5 gap-2 cursor-pointer">
                <p className="lg:text-lg font-bold">CLOUD</p>
                <span className="lg:w-4 lg:h-4 w-2 h-2 rounded-full bg-black"></span>
            </li>
            <li className="flex items-center lg:gap-5 gap-2 cursor-pointer">
                <p className="lg:text-lg font-bold">AI</p>
                <span className="lg:w-4 lg:h-4 w-2 h-2 rounded-full bg-black"></span>
            </li>
            <li className="flex items-center lg:gap-5 gap-2 cursor-pointer">
                <p className="lg:text-lg font-bold">WALLET</p>
                <span className="lg:w-4 lg:h-4 w-2 h-2 rounded-full bg-black"></span>
            </li>
        </ul>
        <button onClick={handleClick} className="md:flex items-center justify-center hidden lg:w-2xs w-52 lg:h-16 h-12 rounded-4xl lg:text-2xl text-lg font-medium text-white bg-black cursor-pointer">GET FREE 1 DAY</button>
       
       <button className="md:hidden flex" onClick={modalFunction}>
       <i className="fa-solid fa-bars text-lg"></i>
       </button>
       <AnimatePresence>
        {isModal && (
          <motion.div
            className="fixed top-0 right-0 w-3xs p-9 bg-white h-full z-20 shadow-2xl"
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <button className="text-balck text-2xl mb-8" onClick={modalFunction}>
            <i class="fa-solid fa-xmark"></i>
            </button>
            <ul className='flex flex-col gap-6'>
            <li className="flex items-center lg:gap-5 gap-2 cursor-pointer">
                <p className="lg:text-lg font-bold">SERVER</p>
                <span className="lg:w-4 lg:h-4 w-2 h-2 rounded-full bg-black"></span>
            </li>
            <li className="flex items-center lg:gap-5 gap-2 cursor-pointer">
                <p className="lg:text-lg font-bold">DOMAIN</p>
                <span className="lg:w-4 lg:h-4 w-2 h-2 rounded-full bg-black"></span>
            </li>
            <li className="flex items-center lg:gap-5 gap-2 cursor-pointer">
                <p className="lg:text-lg font-bold">CLOUD</p>
                <span className="lg:w-4 lg:h-4 w-2 h-2 rounded-full bg-black"></span>
            </li>
            <li className="flex items-center lg:gap-5 gap-2 cursor-pointer">
                <p className="lg:text-lg font-bold">AI</p>
                <span className="lg:w-4 lg:h-4 w-2 h-2 rounded-full bg-black"></span>
            </li>
            <li className="flex items-center lg:gap-5 gap-2 cursor-pointer">
                <p className="lg:text-lg font-bold">WALLET</p>
                <span className="lg:w-4 lg:h-4 w-2 h-2 rounded-full bg-black"></span>
            </li>
            <button onClick={handleClick} className=" items-center justify-center lg:w-2xs w-52 lg:h-16 h-12 rounded-4xl lg:text-2xl text-lg font-medium text-white bg-black cursor-pointer">GET FREE 1 DAY</button>
            </ul>
           
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </div>
  </>
  )
}
export default Navbar;
