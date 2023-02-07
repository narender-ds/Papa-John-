import * as React from "react";
import { useState } from "react";
import Noimage from "../../src/images/placeholder.jpg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "@yext/pages/components";

export default function StoreHighlight(props: any) {
  /*for small mobile screens */
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery: any) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  return (
    <>
      <div className="container-custom mx-auto">
        <div className="sec-title">
          <h2> FEATURED PAPAJOHNS MENU AT-{props.name} </h2>
        </div>

        <div className="services-inner">
          {props.c_storeHighlights.map((res: any, i: Number) => {
            return (
              <>
                {res.title && res.findOutMore.label ? (
                  <div className="item">
                    <div className="service-item">
                      <div className="service-img">
                        {res.image ? (
                          <img
                            src={res.image.image.url}
                            className="w-full"
                            height="250"
                          />
                        ) : (
                          <img
                            className="w-full"
                            src="https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png"
                            height="250"
                            alt=""
                          />
                        )}
                      </div>
                      <div className="service-desc-main">
                        <h3>{res.title}</h3>
                        <div className="service-desc">{res.description}</div>
                        {res.findOutMore.link && res.findOutMore.label ? (
                          <div
                            className="bg-[#0f9675] hover:bg-[#ab131b] text-white rounded w-[calc(50%_-_5px)] xl:w-[170px] transition-all duration-300"
                            style={{
                              alignItems: "center",
                              marginLeft: "22%",
                              marginTop: "10px",
                            }}
                          >
                            <Link
                              style={{
                                alignItems: "center",
                                marginLeft: "40px",
                                textAlign: "center",
                              }}
                              className=""
                              href={res.findOutMore.link}
                              data-ya-track={`storehighlight`}
                              eventName={`storehighlight`}
                              rel="noopener noreferrer"
                            >
                              {res.findOutMore.label}
                            </Link>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>{" "}
                  </div>
                ) : (
                  ""
                )}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
