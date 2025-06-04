
import Nav from "../nav/Nav"
function Header({title,menuItems}) {
    
    
    return(
        <>
        <div className="absolute top-0 left-[300px] right-4 py-5 flex  justify-between">
            <p className="font-inter text-[12px] max-w-28 text-white"><span className="text-[#A0AEC0] ">{title.page}</span> / {title.subtitle}</p>
            <div className="max-w-[980px] min-w-[800px] ml-1 mr-6">
            <Nav menuItems={menuItems}/>
            </div>
           <div className=" pr-8 flex items-center gap-3">
           <input type="search" className="font-inter w-50 h-10 bg-[#0F1535] rounded-2xl text-gray-400 p-4 border border-[#E2E8F04D] outline-none"
            placeholder="Type here..." />
            <button className="font-inter flex items-center gap-1 text-gray-500"> <i class="fa-solid fa-user text-gray-500"></i>Sign In</button>
            <button><i class="fa-solid fa-gear text-gray-500"></i></button>
            <button><i class="fa-solid fa-bell text-gray-500"></i></button>
           </div>
            
        </div>
        </>
    )
}
export default Header;