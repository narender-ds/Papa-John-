import * as React from "react";
import { Link, useAnalytics } from "@yext/pages/components";
// import abbanner from "../../images/ab-banner.jpg"
// import dt12 from "../../images/dtl2.jpg"
import PhotoSlider from "./PhotoSlider"
import { svgIcons } from "../svgIcon";

export default function About(props: any) {
  const { c_aboutData,c_seoCta} = props;
  return ( 
    <>
            {c_aboutData?.title && c_aboutData?.description ? (
              <div  className=" py-10">
                
                <div className="container mx-auto ab-secmain flex flex-wrap items-center">
                  <div className="w-full md:w-1/2 px-5">
                    {c_aboutData?.photoGallery && c_aboutData.photoGallery?.map((p:any)=>{
                      return(
                       <img style={{height:"80%",width:"80%"}} src={p.url}/>
                      )
                    })}
                  </div>
                  <div className="w-full md:w-1/2 about-sec px-5">
                    <h3 className="font-bold text-2xl sec_heading">{c_aboutData.title}</h3>
                    <p> {c_aboutData.description}</p>
                   {/*  */}
                   {c_seoCta ? (
                      <>
                        <Link
                          className="button  mx-8  mt-8"
                          href={ c_seoCta.linkType == "PHONE" ? `tel:${c_seoCta.link}`: (c_seoCta.linkType == "EMAIL" ? `mailto:${c_seoCta.link}` :c_seoCta.link) } 
                          target={c_seoCta.linkType == "PHONE" ? "_self":  (
                            c_seoCta.linkType == "URL" ? "_self" : (c_seoCta.linkType == "OTHER" ? "_blank" : "_self")
                            ) }
                          rel="noopener noreferrer" 
                          eventName={`clickforcollection`}
                          // conversionDetails={conversionDetails_phone}
                          data-ya-track="seocta"
                        >
                          {c_seoCta.label}
                        </Link>
                      </>
                    ) : (
                      <></>
                    )}




{/*  */}
                    {/* <div className="cta_btn">
              <Link
                style={{ backgroundColor: "#0f9675", color: "white" }}
                className="button ml-48 mt-8"
                href="#"
                rel="noopener noreferrer"
                eventName={`ReadMore`}
              >
                {" "}
                FILL OUT YOUR PAPA TALK SURVEY
              </Link>
            </div> */}
                  </div>
             
                </div>
              </div>

            ) : ""}
         
     </>
  )
}