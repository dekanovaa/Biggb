import "./footer.css"
function Footer() {
    return(
        <footer className="bg-black sm:pt-80 pt-60 pb-16 font-syne">
            <div className="max-w-[1200px] mx-auto w-full px-5">
                <ul className="flex justify-between mb-24 flex-wrap gap-8">
                    <li>
                        <h4 className="mb-8 sm:text-4xl text-3xl font-bold text-white">
                        BIG DATA
                        </h4>
                        <p className="mb-1.5 text-[#CFCFCF] sm:text-[20px] font-normal" href="">National Reserve System of </p>
                        <p className="mb-1.5 text-[#CFCFCF] sm:text-[20px] font-normal" href="">Resource Funding</p>
                        <p className="mb-1.5 text-[#CFCFCF] sm:text-[20px] font-normal" href="">All rights reserved</p>
                    </li>
                    <li>
                        <h4 className="mb-8 sm:text-4xl text-3xl font-bold text-white">
                        DATA CENTER 
                        </h4>
                        <a className="mb-1.5 text-[#CFCFCF] sm:text-[20px] font-normal hover:text-white" href="">Web hosting </a> <br />
                        <a className="mb-1.5 text-[#CFCFCF] sm:text-[20px] font-normal hover:text-white" href="">Cloud hosting</a> <br />
                        <a className="mb-1.5 text-[#CFCFCF] sm:text-[20px] font-normal hover:text-white" href="">Dedicated Server</a> <br />
                        <a className="mb-1.5 text-[#CFCFCF] sm:text-[20px] font-normal hover:text-white" href="">Shared Hosting</a> <br />
                        <a className="mb-1.5 text-[#CFCFCF] sm:text-[20px] font-normal hover:text-white" href="">VPS Hosting</a> <br />
                    </li>
                    <li>
                        <h4 className="mb-8 sm:text-4xl text-3xl font-bold text-white">
                        Domain Search
                        </h4>
                        <a className="mb-1.5 text-[#CFCFCF] sm:text-[20px] font-normal hover:text-white" href="">New Domain </a> <br />
                        <a className="mb-1.5 text-[#CFCFCF] sm:text-[20px] font-normal hover:text-white" href="">Search Domains</a> <br />
                        <a className="mb-1.5 text-[#CFCFCF] sm:text-[20px] font-normal hover:text-white" href="">Search AI</a> <br />
                        <a className="mb-1.5 text-[#CFCFCF] sm:text-[20px] font-normal hover:text-white" href="">Club Big Data</a> <br />
                    </li>
                    <li>
                        <h4 className="mb-8 sm:text-4xl text-3xl font-bold text-white">
                        Hello
                        </h4>
                        <a className="mb-1.5 text-[#CFCFCF] sm:text-[20px] font-normal hover:text-white" href="">Customers</a> <br />
                        <a className="mb-1.5 text-[#CFCFCF] sm:text-[20px] font-normal hover:text-white" href="">Support Portal</a> <br />
                        <a className="mb-1.5 text-[#CFCFCF] sm:text-[20px] font-normal hover:text-white" href="">Video tutorials</a> <br />
                        <a className="mb-1.5 text-[#CFCFCF] sm:text-[20px] font-normal hover:text-white" href="">Live chat</a> <br />
                    </li>
                </ul>
                <div className="flex sm:gap-10 gap-5 justify-center">
                    <p className="text-[14px] font-normal text-white cursor-pointer">
                    BIG DATA
                    </p>
                    <p className="text-[14px] font-normal text-white cursor-pointer">
                    WALLET
                    </p>
                    <p className="text-[14px] font-normal text-white cursor-pointer">
                    LICENSE
                    </p>
                </div>


            </div>
        </footer>
    )
}

export default Footer;