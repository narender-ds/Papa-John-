import * as React from "react";
type DataOfProps = {
  FooterData: any;
  
};
const Footer = (props: DataOfProps) => {
  const {FooterData } = props;
  return (
    // <footer classNameName="">
    //   <div classNameName="flex flex-col flex-wrap justify-center p-5 md:flex-row">
    //     <span classNameName="inline-flex justify-center w-full mx-auto mt-2 mr-2 sm:ml-auto sm:mt-0 space-x-3">
    //       <a classNameName="text-black hover:text-blue-500">
    //         <svg
    //           fill="currentColor"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth="2"
    //           classNameName="w-5 h-5"
    //           viewBox="0 0 24 24"
    //         >
    //           <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
    //         </svg>
    //       </a>
    //       <a classNameName="text-black hover:text-blue-500">
    //         <svg
    //           fill="currentColor"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth="2"
    //           classNameName="w-5 h-5"
    //           viewBox="0 0 24 24"
    //         >
    //           <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
    //         </svg>
    //       </a>
    //       <a classNameName="text-black hover:text-blue-500">
    //         <svg
    //           fill="none"
    //           stroke="currentColor"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth="2"
    //           classNameName="w-5 h-5"
    //           viewBox="0 0 24 24"
    //         >
    //           <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    //           <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
    //         </svg>
    //       </a>
    //       <a classNameName="text-black hover:text-blue-500">
    //         <svg
    //           fill="currentColor"
    //           stroke="currentColor"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth="0"
    //           classNameName="w-5 h-5"
    //           viewBox="0 0 24 24"
    //         >
    //           <path
    //             stroke="none"
    //             d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
    //           ></path>
    //           <circle cx="4" cy="4" r="2" stroke="none"></circle>
    //         </svg>
    //       </a>
    //     </span>
    //   </div>
    //   <div classNameName="w-full px-8 mt-4 rounded-b-lg bg-blueGray-50">
    //     <div classNameName="container inline-flex flex-col flex-wrap items-center px-5 py-6 mx-auto sm:flex-row">
    //       <p classNameName="mx-auto text-sm text-center text-black sm:text-left ">
    //         {" "}
    //         © 2021{" "}
    //       </p>
    //     </div>
    //   </div>
    // </footer>
    <footer className=" bg-[#007a53]  text-white">
      <div className="container px-6 pt-6">
        <div className="">
          <div className=" grid lg:grid-cols-4 md:grid-cols-2">
            <div className="Footer-navList">
              <h4>{FooterData.companyTitle}</h4>
              {FooterData?.companyLabel?.map((item: any) => {
                return (
                  <>
                    <ul>
                      <li>
                        <div>
                          <a className="" href="#">
                            {item.label}
                          </a>
                        </div>
                      </li>
                    </ul>
                  </>
                );
              })}
            </div>
            <div className="Footer-navList">
              <h4> {FooterData.foodTitle}</h4>
              {FooterData?.foodLabel?.map((item: any) => {
                return (
                  <>
                    <ul>
                      <li>
                        <div>
                          <a className="" href="#">
                            {item.label}
                          </a>
                        </div>
                      </li>
                    </ul>
                  </>
                );
              })}
            </div>
            <div className="Footer-navList">
              <h4>{FooterData.helpTitle}</h4>
              {FooterData?.helpLabel?.map((item: any) => {
                return (
                  <>
                    <ul>
                      <li>
                        <div>
                          <a className="" href="#">
                            {item.label}
                          </a>
                        </div>
                      </li>
                    </ul>
                  </>
                );
              })}
            </div>
            {/* <div className="">
              <h3><span>Want more pizza offers?</span></h3>
              <h3><span>Of course you do!</span></h3>
              <script src="//r1.dotdigital-pages.com/resources/sharing/embed.js?sharing=lp-embed&amp;domain=r1.dotdigital-pages.com&amp;id=6KXL-8A5%2F%22" data-iframe-loaded="true"></script><iframe src="//r1.dotdigital-pages.com/p/6KXL-8A5#https://www.papajohns.com.mx/en-US" id="6KXL-8A5" className="_lpSurveyEmbed" name="6KXL-8A5" scrolling="no" allow="geolocation" sandbox="allow-modals allow-downloads allow-top-navigation allow-forms allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation border: 0px none !important; margin: 0px !important; padding: 0px !important; display: block;" max-height="120" width="100%" height="120" ></iframe><script src="//r1.dotdigital-pages.com/resources/sharing/embed.js?sharing=lp-embed&amp;domain=r1.dotdigital-pages.com&amp;id=6KXL-8A5%2F%22" >
              </script>
              <p><span>By signing up, I agree to receive marketing communication from Papa Johns via email and/or SMS/Text.</span></p>
            </div> */}
          </div>
          <div className="grid grid-cols-3 ">
            <div>
              <strong>
                <span>{FooterData.footerSlogan} </span>
              </strong>
            </div>

            <div className="grid grid-cols-3 align-right">
              <a href="/" aria-label="Go back to homepage">
                <img
                  alt=""
                  src={FooterData?.footerLogo?.url}
                />
              </a>
            </div>
          </div>
          <hr />
          <div className="display-flex ">
            {FooterData?.otherLabels?.map((item: any) => {
              return (
                <>
                  <ul>
                    <li>
                      <div>
                        <a className="" href="#">
                          {item.label}
                        </a>
                      </div>
                    </li>
                  </ul>
                </>
              );
            })}


            {/* <ul className="social-links ">
              <li>
                <a href="https://www.facebook.com/papajohnsmx" aria-label="Visit our Facebook page"><span className="icon icon-facebook" aria-hidden="true"></span></a>
              </li>
              <li>
                <a href="https://www.instagram.com/papajohnsmx" aria-label="Visit our Instagram page"><span className="icon icon-instagram" aria-hidden="true"></span></a></li><li><a data-cy="social-links" target="_blank" rel="noreferrer" href="https://www.twitter.com/papajohnsmx" aria-label="Visit our Twitter page"><span className="icon icon-twitter" aria-hidden="true"></span></a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCePJcsQM51x41GAymODcoCw" aria-label="Visit our Youtube Page"><svg width="24" height="24" className="social-links_SocialLinks__Icon__3kxjW" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15"><path d="M14.8 4.6s-.1-1-.6-1.5c-.6-.6-1.2-.6-1.5-.6-2.1-.2-5.2-.2-5.2-.2s-3.1 0-5.2.2c-.3 0-.9.1-1.5.6-.4.5-.6 1.5-.6 1.5S.1 5.8.1 7v1.1c0 1.2.1 2.4.1 2.4s.1 1 .6 1.5c.6.6 1.3.6 1.6.6 1.2.1 5.1.1 5.1.1s3.1 0 5.2-.2c.3 0 .9 0 1.5-.6.4-.5.6-1.5.6-1.5s.1-1.2.1-2.4V7c0-1.2-.1-2.4-.1-2.4zM6 9.5V5.3l4 2.1-4 2.1z"></path></svg></a></li><li><a data-cy="social-links" className="social-links_SocialLinks__Link__1rskg" target="_blank" rel="noreferrer" href="https://www.tiktok.com/@papajohnsmexico" aria-label="Visit our TikTok Page"><svg width="24" height="24" className="social-links_SocialLinks__Icon__3kxjW" viewBox="4 4 42 42" xmlns="http://www.w3.org/2000/svg"><path d="M41 4H9C6.243 4 4 6.243 4 9v32c0 2.757 2.243 5 5 5h32c2.757 0 5-2.243 5-5V9c0-2.757-2.243-5-5-5m-3.994 18.323a7.482 7.482 0 0 1-.69.035 7.492 7.492 0 0 1-6.269-3.388v11.537a8.527 8.527 0 1 1-8.527-8.527c.178 0 .352.016.527.027v4.202c-.175-.021-.347-.053-.527-.053a4.351 4.351 0 1 0 0 8.704c2.404 0 4.527-1.894 4.527-4.298l.042-19.594h4.02a7.488 7.488 0 0 0 6.901 6.685v4.67"></path></svg></a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/54308125/" aria-label="Visit our LinkedIn Page"><svg width="24" height="24" className="social-links_SocialLinks__Icon__3kxjW" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"></path></svg></a>
              </li>
            </ul> */}
          </div>
        </div>
      </div>

      {/* </div > */}
    </footer>
  );
};

export default Footer;
