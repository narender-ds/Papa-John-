import * as React from "react";
import { useEffect, useState } from "react";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "@yext/pages/components";
import WebApi from "../API/index";
import {
  callNearByApi,
  stagingBaseUrl,
  slugify,
  defaultTimeZone,
} from "../constants";
import { svgIcons } from "../svgIcon";
import getDirectionUrl from "../getDirection";
import OpenCloseStatus from "../components/OpenCloseStatus";
type props = {
  prop: any;

  coords: any;
  slug: any;
};
/**
 * Used to Fetch Near By Locations to a store
 * @param entities
 * @returns
 */
const NearByLocation = (enearByLoc: props) => {
  const [data, setData] = useState([]);

  const regionNames = new Intl.DisplayNames(["en"], { type: "region" });

  useEffect(() => {
    setData(enearByLoc?.prop?.response?.entities);
    console.log(
      enearByLoc?.prop?.response?.entities,
      "enearByLoc.prop.response.entities"
    );
    // if (callNearByApi != "client-side") {
    //   setData(enearByLoc.prop.response.entities);
    // } else {
    //   const data = WebApi.getRequest(entities.coords).then((res) => {
    //     setData(res);
    //   });
    // }
  }, [setData]);

  return (
    <>
      <div className="nearby-sec">
        <div className="container">
          <div className="w-full text-center">
            <h3 className="sec_heading">Nearby Locations</h3>
          </div>
          <Splide
            id="splide-nearby"
            options={{
              rewind: false,
              type: "slide",
              perPage: 3,
              perMove: 1,
              arrows: false,
              drag: false,
              pagination: false,
              lazyLoad: "nearby",
              breakpoints: {
                1279: {
                  perPage: 1,
                  drag: true,
                  pagination: true,
                  arrows: true,
                  type: "splide",
                },
                575: {
                  arrows: false,
                },
              },
            }}
          >
            {enearByLoc.prop.response.entities &&
              enearByLoc.prop.response.entities.map((e: any, index: any) => {
                let url = "";
                if (!e.slug) {
                  let slugString = e.meta.id + " " + e.name;
                  let slug = slugify(slugString);
                  url = `${slug}.html`;
                } else {
                  url = `${e.slug.toString()}.html`;
                }

                var origin: any = null;
                if (e.address.city) {
                  origin = e.address.city;
                } else if (e.address.region) {
                  origin = e.address.region;
                } else {
                  origin = e.address.country;
                }

                if (enearByLoc.slug != e.slug && e.closed != true) {
                  let addressString = "";
                  let addressLines = e.address?.line1 + ", " + e.address?.line2;

                  if (addressLines.length > 42) {
                    addressString += e.address?.line1 + ", <br />";
                    let addressLine =
                      e.address?.line2 + ", " + e.address?.city + ", ";
                    if (addressLine.length > 42) {
                      addressString +=
                        e.address?.line2 + ", " + e.address?.city + ",<br />";
                      addressString +=
                        e.address?.postalCode +
                        ", " +
                        regionNames.of(e.address?.countryCode);
                    } else {
                      addressString +=
                        e.address?.line2 +
                        ", " +
                        e.address?.city +
                        ", " +
                        e.address?.postalCode +
                        ", <br />";
                      addressString += regionNames.of(e.address?.countryCode);
                    }
                  } else {
                    let line2 = "";
                    if (e.address?.line2 != undefined) {
                      line2 = e.address?.line2 + ", ";
                    }
                    addressString += e.address?.line1 + ", " + line2 + "<br />";
                    addressString +=
                      e.address?.city +
                      ", " +
                      e.address?.postalCode +
                      ", <br />";
                    addressString += regionNames.of(e.address?.countryCode);
                  }

                  return (
                    <SplideSlide key={index}>
                      <div className="near-location">
                        <h4>
                          <a
                            href={e.slug + ".html"}
                            // style={{ color: "#0f9675" }}
                          >
                            {e.name}
                          </a>
                        </h4>
                        <div className="store-address">
                          {svgIcons.addressPin}
                          {/* <p
                            dangerouslySetInnerHTML={{ __html: addressString }}
                          /> */}
                          <p
                            dangerouslySetInnerHTML={{ __html: addressString }}
                          ></p>
                        </div>

                        {e.mainPhone ? (
                          <>
                            <div className="store-phone">
                              {svgIcons.phoneIcon}
                              <p>
                                <Link
                                  data-ya-track="phone"
                                  href={`tel:${e.mainPhone}`}
                                  rel="noopener noreferrer"
                                  // conversionDetails={conversionDetailsPhone}
                                  eventName={`phone`}
                                >
                                  {e.mainPhone}
                                </Link>
                              </p>
                            </div>
                          </>
                        ) : (
                          <></>
                        )}
                        <OpenCloseStatus
                          timeZone={defaultTimeZone}
                          hours={e.hours}
                        />
                        <div className="store-link">
                          <Link
                            data-ya-track="directions"
                            className="direction"
                            onClick={() => getDirectionUrl(e)}
                            href="javascript:void(0);"
                            rel="noopener noreferrer"
                            eventName={`getdirections"`}
                            // conversionDetails={conversionDetailsDirection}
                          >
                            {svgIcons.getDirection}
                            Get Directions
                          </Link>
                          <Link
                            className="view-details"
                            href={e.slug + ".html"}
                            rel="noopener noreferrer"
                            eventName={`storeViewDetails`}
                          >
                            {" "}
                            {svgIcons.viewDetails} View Details
                          </Link>
                        </div>
                      </div>
                    </SplideSlide>
                  );
                }
              })}
          </Splide>

          <div className="nearby">
            <div className="store-link" style={{}}>
              <Link
                className="view-details"
                href="###"
                rel="noopener noreferrer"
                eventName={`storeViewDetails`}
              >
                {" "}
                {svgIcons.viewDetails} View All Location
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NearByLocation;
