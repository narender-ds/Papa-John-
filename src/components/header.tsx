import * as React from "react";
// import Cta from "../components/cta";

type DataOfProps = {
  HeaderLogo: any;
  HeaderLabels:any;
 
};



const Header = (props:DataOfProps) => {
  const{  HeaderLogo,HeaderLabels}=props
  const linkDoms = HeaderLabels?.map((item:any) => (
    <div key={item.label}>
      <a href={item.link} target="_blank" rel="noreferrer">
        {item.label}
      </a>
    </div>
  ));

  return (
    <>
      <div className="centered-container">
      
        <nav className="py-6 flex items-center justify-between">
          <img
            src={HeaderLogo?.url}
            width="100"
            height="100"
          ></img>
        
          <div className="space-x-5">
            {/* <Cta buttonText="Order Pickup" href="#" style="primary-cta"></Cta> */}
            {/* <button
              buttonText="Start My Order"
              href="https://www.papajohns.com.mx/menu"
              style="primary-cta"
            ></Cta> */}
          </div>
        </nav>
        <div className="flex">
        <div className="text-2xl font-semibold"></div>
          <div className="flex gap-x-10 text-lg font-semibold">{linkDoms}</div>
      </div>
      </div>
      {/* <header>
        <div className="relative bg-cover bg-center bg-no-repeat bg-white">
          <div className="container px-4 flex flex-wrap p-0 items-center justify-between lg:justify-around bg-white">
            <a href="/" className="text-center p-5">
              <img src="https://ba-sh.com/fstrz/r/s/ba-sh.com/on/demandware.static/Sites-bash-us-Site/-/default/dw3b7e637f/images/logo.svg?frz-v=187"
                alt="ba&amp;sh" width="128" height="37"/>
            </a>
            <button type="button" className="w-8 h-6 flex flex-col justify-between lg:hidden">
              <span className="bg-red w-full h-0.5"></span>
              <span className="bg-red w-full h-0.5"></span>
              <span className="bg-red w-full h-0.5"></span>
            </button>
          </div>
          <div className="text-xs bg-black mb-4 hidden lg:block" id="navigation">
            <div className="container max-w-7xl">
              <ul className="flex flex-col lg:flex-row justify-center text-white text-xs w-full">
                <li className="px-5"><a href="#"
                  className="py-3 relative leading-[26px] inline-block align-bottom after:content-[''] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-500 after:w-0 after:bg-white after:h-1 hover:after:w-full uppercase">SALE</a></li>
                <li className="px-5"><a href="#"
                  className="py-3 relative leading-[26px] inline-block align-bottom after:content-[''] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-500 after:w-0 after:bg-white after:h-1 hover:after:w-full uppercase">NEW COLLECTION</a>
                </li>
                <li className="px-5"><a href="#"
                  className="py-3 relative leading-[26px] inline-block align-bottom after:content-[''] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-500 after:w-0 after:bg-white after:h-1 hover:after:w-full uppercase">CLOTHING</a>
                </li>
                <li className="px-5"><a href="#"
                  className="py-3 relative leading-[26px] inline-block align-bottom after:content-[''] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-500 after:w-0 after:bg-white after:h-1 hover:after:w-full uppercase">SHOES & ACCESSORIES</a></li>
                <li className="px-5"><a href="#"
                  className="py-3 relative leading-[26px] inline-block align-bottom after:content-[''] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-500 after:w-0 after:bg-white after:h-1 hover:after:w-full uppercase">BA&SH WORLD</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header> */}
    </>
  );
};

export default Header;
