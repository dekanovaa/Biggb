import "./Sidebar.css";
import icon from "../../assets/images/Icon (4).svg";

function Sidebar({ sideItems, iscart }) {
  return (
    <>
      <div
        className="xl:w-[264px]  h-auto border border-solid rounded-3xl backdrop-blur px-5 py-9 absolute top-2.5 left-2.5"
        style={{
          background:
            "linear-gradient(111.84deg, rgba(6, 11, 38, 0.94) 59.3%, rgba(26, 31, 55, 0) 100%)",
          backdropFilter: "blur(120px)",
        }}
      >
        <p className="text-center">
          {" "}
          <a href="" className="text-white-gradient font-medium">
            BIG DATA AI
          </a>
        </p>
        <hr
          className="w-full h-0 mt-8 mb-5"
          style={{
            border: "1px solid",
            borderImageSource:
              "linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, #E0E1E2 49.52%, rgba(224, 225, 226, 0.15625) 99.04%)",
            borderImageSlice: 1,
          }}
        />
        <ul className="mb-9">
          <li className="py-3 px-4 rounded-2xl hover-effect">
            <a href="/dashboard" className="flex items-center">
              <i class="fa-solid fa-house-chimney text-[#0075FF] p-2 bg-[#1A1F37] rounded-[12px]"></i>
              <p className="font-medium text-white ml-4">
                {" "}
                {sideItems?.dashboard}
              </p>
            </a>
          </li>
          <li className="py-3 px-4 rounded-2xl hover-effect">
            <a href="" className="flex items-center">
              <i class="fa-solid fa-chart-simple text-[#0075FF] p-2 bg-[#1A1F37] rounded-[12px]"></i>
              <p className="font-medium text-white ml-4">{sideItems?.tables}</p>
            </a>
          </li>
          <li className="py-3 px-4 rounded-2xl hover-effect">
            <a href="/billing" className="flex items-center">
              <i class="fa-solid fa-credit-card text-[#0075FF] p-2 bg-[#1A1F37] rounded-[12px]"></i>
              <p className="font-medium text-white ml-4">
                {sideItems?.billing}
              </p>
            </a>
          </li>
          <li className="py-3 px-4 rounded-2xl hover-effect">
            <a href="" className="flex items-center">
              <i class="fa-solid fa-wrench text-[#0075FF] p-2 bg-[#1A1F37] rounded-[12px]"></i>
              <p className="font-medium text-white ml-4">{sideItems?.web}</p>
            </a>
          </li>
          <p className=" text-white pl-5 my-3 text-[12px]">ACCOUNT PAGES</p>
          <li className="py-3 px-4 rounded-2xl hover-effect">
            <a href="" className="flex items-center">
              <i class="fa-solid fa-user text-[#0075FF] p-2 bg-[#1A1F37] rounded-[12px]"></i>
              <p className="font-medium text-white ml-4">
                {sideItems?.profile}
              </p>
            </a>
          </li>
          <li className="py-3 px-4 rounded-2xl hover-effect">
            <a href="" className="flex items-center">
              <i class="fa-solid fa-file text-[#0075FF] p-2 bg-[#1A1F37] rounded-[12px]"></i>
              <p className="font-medium text-white ml-4">
                {sideItems?.storage}
              </p>
            </a>
          </li>
          <li className="py-3 px-4 rounded-2xl hover-effect">
            <a href="" className="flex items-center">
              <i class="fa-solid fa-rocket text-[#0075FF] p-2 bg-[#1A1F37] rounded-[12px]"></i>
              <p className="font-medium text-white ml-4">{sideItems?.sign}</p>
            </a>
          </li>
        </ul>
        {iscart ? (
          <div className="cart w-full h-auto rounded-2xl p-4">
            <img src={icon} alt="" className="mb-5" />
            <p className="font-bold text-white text-[14px]">Need help?</p>
            <p className="text-white text-[12px] font-normal mb-4">Please</p>
            <button
              className="w-full h-9  rounded-[12px] text-[10px] font-bold text-white cursor-pointer"
              style={{
                background:
                  "linear-gradient(126.97deg, rgba(6, 11, 40, 0.74) 28.26%, rgba(10, 14, 35, 0.71) 91.2%)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)", // Safari uchun
              }}
            >
              START CHAT
            </button>
          </div>
        ) : (
          " "
        )}
      </div>
    </>
  );
}
export default Sidebar;
