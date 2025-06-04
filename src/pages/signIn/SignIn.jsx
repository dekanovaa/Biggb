
// import back2 from "../../assets/images/Rectangle 8.png"
// import back from "../../assets/images/back.jpg"
import Nav from "../../components/nav/Nav";
import "./signIn.css";

function SignIn() {
  const menu = {
    server: "GET SERVER",
    wallet: "WALLET",
    cloud: "CLOUD",
    signin: "SIGN IN"
  };
  return (
    <>
      <div className="h-screen flex  font-inter">
      <div className="fixed right-0 left-0 top-7">
      <Nav menuItems={menu}/>
      </div>
        <div className="md:w-1/2 sm:w-1/3 w-0 left h-screen flex justify-center items-center">
          <p className="text-4xl font-bold text-white text-center">
            NEW <br /> FAST <br />
            STRONG
          </p>
        </div>
        <div className="md:w-1/2 sm:w-2/3 w-full right h-screen flex items-center lg:pl-28 p-5 justify-center">
          <form className="md:w-[350px] max-w-[500px] w-full h-110">
            <h4 className="text-white text-3xl font-bold mb-1">
              Nice to see you!
            </h4>
            <p className="text-gray-400 font-normal mb-9">
              Enter your email and password to sign in
            </p>
            <label className="text-white" htmlFor="email">
              Email
            </label>{" "}
            <br />
            <input
              className="mt-1 w-full px-6 py-2.5 text-white placeholder-gray-400 bg-[#0F123B] border-2 border-transparent focus:outline-none mb-6"
              type="email"
              id="email"
              placeholder="Your email address"
           
            />{" "}
            <br />
            <label className="text-white" htmlFor="password">
              Password
            </label>{" "}
            <br />
            <input
              type="password"
              id="password"
              placeholder="Your password"
               className="mt-1 w-full px-6 py-2.5 text-white placeholder-gray-400 bg-[#0F123B] border-2 border-transparent focus:outline-none mb-6"
              
            />{" "}
            <br />
            <div className="flex items-center justify-between mb-9">
              <div className="flex items-center">
                <label class="switch">
                  <input type="checkbox" id="check" />
                  <span class="slider round"></span>
                </label>
                <label className="text-white ml-2" htmlFor="check">Remember me </label>
              </div>

              <p className="text-[#A0AEC0]">
                <a className="text-[#0075FF]" href="#">AGREE</a> WITH ALL RULES
              </p>
            </div>
            <button className="w-full h-11 bg-[#0075FF] rounded-2xl text-white cursor-pointer font-bold mb-5">SIGN IN</button>
            <a className="text-[#A0AEC0] text-center items-center" href="">
              Don't have an account? <span className="text-white">Sign up</span>
            </a>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignIn;
