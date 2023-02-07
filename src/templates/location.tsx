import * as React from "react";
import Banner from "../components/banner";
import List from "../components/list";
import BreadCrumbs from "../components/BreadCrumbs";
import LocationInformation from "../components/LocationInformation";
import About from "../components/about";
import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/card";
import AddPromotion from "../components/AddPromotion";
import NearByLocation from "../components/NearByLocation";
import Faq from "../components/Faq";
import FavoriteFood from "../components/FavoriteFood";
import { nearByLocation } from "../types/nearByLocation";
import { JsonLd } from "react-schemaorg";
import Storefacility from "../components/Storefacility";
import favicon from "../images/favicon.png";
import bannerImage from "../images/app-bg.png";
// import About from "../components/About";
import { Link } from "@yext/pages/components";
import Logo from "../images/logo.svg";
import StoreHighlight from "../components/SoreHighlight";
import PhotoSlider from "../components/PhotoSlider";
import {
  AnalyticsProvider,
  AnalyticsScopeProvider,
} from "@yext/pages/components";
import {
  radius,
  api_base_url,
  liveAPIKey,
  savedFilterId,
  entityTypes,
  limit,
  stagingBaseUrl,
  // newsLetter,
  robotsMetaStatus,
  OrganizationAddress,
  OrganizationTelephone,
  OrganizationSocialMediaUrls,
  livSiteUrl,
  // OrganizationName,
  // OrganizationLogo,
  slugify,
  AnalyticsEnableDebugging,
  AnalyticsEnableTrackingCookie,
} from "../constants";
import "../main.css";
import {
  Template,
  GetPath,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  TransformProps,
  HeadConfig,
} from "@yext/pages";

export const config: TemplateConfig = {
  stream: {
    $id: "location",
    fields: [
      "id",
      "uid",
      "description",
      "slug",
      "geocodedCoordinate",
      "yextDisplayCoordinate",
      "googlePlaceId",
      /* banner */
      "c_cTAButton",
      "c_tagline",
      "c_backgroundImage",
      "name",
      /*storeInfo*/
      "c_storeHoursTitle",
      "hours",
      "c_faqTitle",
      // "c_cTAButton2",
      // "c_deliveryServicesJustEat",
      // "c_deliveryServicesUberEats",
      // "c_deliveryServicesDeliveroo",
      "address",
      "c_storeInfoTitle",
      "mainPhone",
      "deliveryHours",
      "timezone",
      "additionalHoursText",
      "c_clickforcollection",
      "c_clickfordelivery",
      /*Nearby Location*/
      "c_nearByLocationTitle",
      "c_viewDetails",
      "c_viewAllLocation",
      "c_getdirection",
      // "what3WordsAddress",
      /*social Media*/
      // "facebookPageUrl",
      // "instagramHandle",
      // "twitterHandle",
      // "c_tikTok",
      /*business information*/
      "c_aboutData",
      "c_seoCta",
      "c_menuitems",
      // "c_description",
      /*our food*/
      "c_foodItems",
      "c_foodListTitle",
      /*Best Selling Favourite Favorites*/
      // "c_bestSellingFavouriteFavorite",
      /*Download the app*/
      "c_title",
      "c_description1",
      "c_backgroundimages",
      "androidAppUrl",
      "iosAppUrl",
      /*faq*/
      "c_frequentlyAskedQuestions.question",
      "c_frequentlyAskedQuestions.answer",
      /*store-highlight*/
      "c_storeHighlights",
      /*photoGallery*/
      "c_photoGallery",
      /*seo*/
      "c_canonical",
      "c_metaDescription",
      "c_metaTitle",
      // "logo"
      /* DM fields */
      "dm_directoryParents.name",
      "dm_directoryParents.slug",
      "dm_directoryParents.meta.entityType",
      "dm_directoryParents.c_addressRegionDisplayName",
          ],
    localization: {
      locales: ["en"],
      primary: false,
    },
    filter: {
      entityTypes: ["location"],
      savedFilterIds: [savedFilterId],
    },
  },
};

var url = ""; /** current detail page url */

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  if (!document.slug) {
    let slugString = document.id + " " + document.name;
    let slug = slugify(slugString);
    url = `${slug}.html`;
  } else {
    url = `${document.slug.toString()}.html`;
  }
  return url;
};
// export const getPath: GetPath<TemplateProps> = ({ document }) => {

//   return `index.html`;
// };

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  document,
}): HeadConfig => {
  let metaDescription = document.c_metaDescription
    ? document.c_metaDescription
    : "Visit your " +
      document.name +
      "Get the real Papa John's taste now – order fresh cooked pizza, sides, drinks and desserts online for delivery or takeaway. Better ingredients. Better pizza";
  let metaTitle = document.c_metaTitle
    ? document.c_metaTitle
    : "Visit " + document.name + " | Order Pizza: Delivery Or Takeaway | ";

  return {
    charset: "UTF-8",
    title: metaTitle,
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "link",
        attributes: {
          rel: "icon",
          type: "image/x-icon",
          href: favicon,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "description",
          content: `${metaDescription}`,
        },
      },

      {
        type: "meta",
        attributes: {
          name: "author",
          content: "Papa John's Pizza",
        },
      },

      {
        type: "meta",
        attributes: {
          name: "robots",
          content: robotsMetaStatus,
        },
      },

      {
        type: "link",
        attributes: {
          rel: "canonical",
          href: `${
            document.c_canonical
              ? document.c_canonical
              : stagingBaseUrl + "/" + url
          }`,
        },
      },
      {
        type: "meta",
        attributes: {
          property: "og:url",
          content: stagingBaseUrl + "/" + url,
        },
      },

      {
        type: "meta",
        attributes: {
          property: "og:description",
          content: `${metaDescription}`,
        },
      },
      {
        type: "meta",
        attributes: {
          property: "og:title",
          content: `${metaTitle}`,
        },
      },
      {
        type: "meta",
        attributes: {
          property: "og:image",
          content:
            "https://www.papajohns.com.mx/en-US/images/logos/pji_arch_red_en.png",
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:card",
          content: "summary",
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:url",
          content: stagingBaseUrl + "/" + url,
        },
      },

      {
        type: "meta",
        attributes: {
          name: "twitter:description",
          content: metaDescription,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:image",
          content:
            "https://www.papajohns.com.mx/en-US/images/logos/pji_arch_red_en.png",
        },
      },
    ],
  };
};

type ExternalApiData = TemplateProps & { externalApiData: nearByLocation };
export const transformProps: TransformProps<ExternalApiData> = async (
  data: any
) => {
  const url = `https://liveapi-sandbox.yext.com/v2/accounts/me/entities/geosearch?radius=2500&location=${data.document.yextDisplayCoordinate.latitude},${data.document.yextDisplayCoordinate.longitude}&filter={}&api_key=71dbd045a5d7c414e36acbdec69473c2&v=20181201&resolvePlaceholders=true&entityTypes=location&limit=3&savedFilterIds=1111065609`;
  const externalApiData = (await fetch(url).then((res: any) =>
    res.json()
  )) as nearByLocation;
  return { ...data, externalApiData };
};

type ExternalApiRenderData = TemplateRenderProps & {
  externalApiData: nearByLocation;
};

/**
 * location template for all entities , detail page
 * @param entities
 * @returns
 */

const Location: Template<ExternalApiRenderData> = ({
  relativePrefixToRoot,
  externalApiData,
  document,
  __meta,
}) => {
  const {
    name,
    c_cTAButton,
    c_tagline,
    c_backgroundImage,
    address,
    c_storeInfoTitle,
    mainPhone,
    c_cTAButton2,
    c_deliveryServicesJustEat,
    c_deliveryServicesUberEats,
    c_deliveryServicesDeliveroo,
    c_storeHoursTitle,
    hours,
    c_faqTitle,
    deliveryHours,
    timezone,
    facebookPageUrl,
    instagramHandle,
    twitterHandle,
    c_tikTok,
    c_aboutData,
    c_seoCta,
    c_menuitems,
    c_foodItems,
    c_foodListTitle,
    c_clickforcollection,
    c_clickfordelivery,
    // c_headingH2,
    // c_ourFoods,
    // c_bestSellingFavouriteFavorite,
    c_nearByLocationTitle,
    c_viewDetails,
    c_viewAllLocation,
    c_getdirection,
    c_title,
    c_description1,
    c_backgroundImages,
    c_photoGallery,
    androidAppUrl,
    iosAppUrl,
    c_frequentlyAskedQuestions,
    what3WordsAddress,
    description,
    yextDisplayCoordinate,
    dm_directoryParents,
       slug,
    c_storeHighlights,
    googlePlaceId,
    _site,
  } = document;
  console.log("data",dm_directoryParents)
  let templateData = { document: document, __meta: __meta };
  let hoursSchema = [];
  let breadcrumbScheme = [];

  if (hours) {
    for (var key in hours) {
      if (hours.hasOwnProperty(key)) {
        let openIntervalsSchema: any = "";
        if (key !== "holidayHours") {
          if (hours[key].isClosed) {
            openIntervalsSchema = {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: key,
            };
          } else {
            let end = "";
            let start = "";
            if (typeof hours[key].openIntervals != "undefined") {
              let openIntervals = hours[key].openIntervals;
              for (var o in openIntervals) {
                if (openIntervals.hasOwnProperty(o)) {
                  end = openIntervals[o].end;
                  start = openIntervals[o].start;
                }
              }
            }
            openIntervalsSchema = {
              "@type": "OpeningHoursSpecification",
              closes: end,
              dayOfWeek: key,
              opens: start,
            };
          }
        } else {
        }

        hoursSchema.push(openIntervalsSchema);
      }
    }
  }

  dm_directoryParents &&
    dm_directoryParents.map((i: any, index: any) => {
      if (index != 0) {
        breadcrumbScheme.push({
          "@type": "ListItem",
          position: index,
          item: {
            "@id": `${stagingBaseUrl}/${i.slug}`,
            name: i.name,
          },
        });
      }
    });
  let url = "";
  let Name: any = document.name.toLowerCase().toString();
  Name = name.replace(/[&\/\\#^+()$~%.'":*?<>{}!@]/g, "");
  Name = Name.replaceAll("  ", "-");
  if (!document.slug) {
    url = `${document.id}-${Name}.html`;
  } else {
    url = `${document.slug.toString()}.html`;
  }
  breadcrumbScheme.push({
    "@type": "ListItem",
    position: 4,
    item: {
      "@id": `${stagingBaseUrl}/${url}`,
      name: document.name,
    },
  });

  return (
    <>
      <JsonLd<Resturant>
        item={{
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Papa John's Pizza",
          description: description,
          telephone: document.mainPhone,
          image: stagingBaseUrl + Logo,
          address: {
            "@type": "PostalAddress",
            streetAddress: address.line1,
            addressLocality: address.city,
            addressRegion: address.region,
            postalCode: address.postalCode,
            addressCountry: address.countryCode,
          },
          openingHoursSpecification: hours ? hoursSchema : [],
        }}
      />
      <JsonLd<BreadcrumbList>
        item={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",

          itemListElement: breadcrumbScheme,
        }}
      />
      {c_frequentlyAskedQuestions ? (
        <>
          <JsonLd<FAQPage>
            item={{
              "@context": "https://schema.org",
              "@type": "FAQPage",

              mainEntity:
                c_frequentlyAskedQuestions &&
                c_frequentlyAskedQuestions.map((i: any) => {
                  return {
                    "@type": "Question",
                    name: i.question,
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: `<p>${i.answer}</p>`,
                    },
                  };
                }),
            }}
          />
        </>
      ) : (
        <></>
      )}
      <JsonLd<Organization>
        item={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Papa John's Pizza",
          url: livSiteUrl,
          logo: "https://www.papajohns.com.mx/en-US/images/logos/pji_arch_red_en.png",
          address: {
            "@type": OrganizationAddress.type,
            streetAddress: OrganizationAddress.streetAddress,
            addressLocality: OrganizationAddress.addressLocality,
            addressRegion: OrganizationAddress.addressRegion,
            postalCode: OrganizationAddress.postalCode,
            addressCountry: OrganizationAddress.addressCountry,
          },
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "contact",
            telephone: OrganizationTelephone,
          },
          sameAs: [
            OrganizationSocialMediaUrls.facebook,
            OrganizationSocialMediaUrls.instagram,
            OrganizationSocialMediaUrls.twitter,
          ],
        }}
      />
      {/* <AnalyticsProvider
        templateData={templateData}
        enableDebugging={AnalyticsEnableDebugging} 
        enableTrackingCookie={AnalyticsEnableTrackingCookie}
      > */}{" "}
      <AnalyticsScopeProvider name={""}>
        {/* <Header
            data={_site.c_headerLinks1}
            facebookPageUrl={_site.facebookPageUrl}
            instagramHandle={_site.instagramHandle}
            twitterHandle={_site.twitterHandle}
            c_tikTok={_site.c_tikTok}
            appStore={_site.c_appStore}
            playStore={_site.c_playStore}
          /> */}
        <Header
          HeaderLogo={_site.c_header.headerLogo}
          HeaderLabels={_site.c_header.navigationLinks}
        />
        <BreadCrumbs name={name} parents={dm_directoryParents.name} address={address}></BreadCrumbs>

        <Banner
          Name={name}
          TagLine={c_tagline}
          BackgroundImage={
            c_backgroundImage ? c_backgroundImage.url : bannerImage
          }
          CtaButton={c_cTAButton}
          template={"location"}
        />
        <LocationInformation
          prop={hours}
          deliveryHours={deliveryHours}
          coords={yextDisplayCoordinate}
          address={address}
          c_storeInfoTitle={c_storeInfoTitle}
          phone={mainPhone}
          c_storeHoursTitle={c_storeHoursTitle}
          c_clickforcollection={c_clickforcollection}
          c_clickfordelivery={c_clickfordelivery}
          c_cTAButton2={c_cTAButton2}
          c_deliveryServicesJustEat={c_deliveryServicesJustEat}
          c_deliveryServicesUberEats={c_deliveryServicesUberEats}
          c_deliveryServicesDeliveroo={c_deliveryServicesDeliveroo}
          facebookPageUrl={facebookPageUrl}
          instagramHandle={instagramHandle}
          twitterHandle={twitterHandle}
          // c_tikTok={c_tikTok}
          what3WordsAddress={what3WordsAddress}
          timezone={timezone}
          name={name}
          googlePlaceId={googlePlaceId}
          additionalHoursText={undefined}
        />
        <About c_aboutData={c_aboutData} c_seoCta={c_seoCta}></About>
        <Storefacility c_menuitems={c_menuitems}></Storefacility>
        {/* {description && c_headingH2 ? (
          // <Card prop1={c_headingH2} prop2={description} />
        ) : (
          <></>
        )} */}
        {c_foodItems ? (
          <List prop={c_foodItems} title={c_foodListTitle} />
        ) : (
          <></>
        )}
        {/* {c_bestSellingFavouriteFavorite ? (
          <FavoriteFood prop={c_bestSellingFavouriteFavorite} />
        ) : (
          <></>
        )} */}

        {c_title || c_description1 || androidAppUrl || iosAppUrl ? (
          <AddPromotion
            c_title={c_title}
            c_description1={c_description1}
            c_backgroundimages={c_backgroundImages}
            androidAppUrl={androidAppUrl}
            iosAppUrl={iosAppUrl}
          />
        ) : (
          <></>
        )}
        {c_frequentlyAskedQuestions ? (
          <Faq faqData={c_frequentlyAskedQuestions} title={c_faqTitle} />
        ) : (
          <></>
        )}
        <div className="gallery-sec">
          <PhotoSlider photos={c_photoGallery} />
        </div>

        {StoreHighlight ? (
          <div className="services-sec">
            <StoreHighlight c_storeHighlights={c_storeHighlights} name={name} />
          </div>
        ) : (
          ""
        )}

        <NearByLocation
          prop={externalApiData}
          parents={""}
          baseUrl={relativePrefixToRoot}
          coords={yextDisplayCoordinate}
          slug={slug}
          Title={c_nearByLocationTitle}
          ViewDetails={c_viewDetails}
          ViewAllLocation={c_viewAllLocation}
          GetDirection={c_getdirection}
          // what3WordsAddress={what3WordsAddress}
        />

        <Footer FooterData={_site.c_footer}/>
        {/* <Footer
          data={_site.c_footerLinks}
          address={_site.address}
          c_companyrn={_site.c_companyrn}
          c_phoneNumber={_site.c_phoneNumber}
          facebookPageUrl={_site.facebookPageUrl}
          instagramHandle={_site.instagramHandle}
          twitterHandle={_site.twitterHandle}
          c_tikTok={_site.c_tikTok}
          newsLetter={newsLetter}
        /> */}gg
      </AnalyticsScopeProvider>
      {/* </AnalyticsProvider> */}
    </>
  );
};

export default Location;
