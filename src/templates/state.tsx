import * as React from "react";
import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import BreadCrumbs from "../components/BreadCrumbs";
import {
  stagingBaseUrl,
  AnalyticsEnableDebugging,
  AnalyticsEnableTrackingCookie,
} from "../constants";
//import bannerImage from "../images/app-bg.png";
import "../main.css";
import favicon from "../images/favicon.png";
import { JsonLd } from "react-schemaorg";
import {
  Template,
  GetPath,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
} from "@yext/pages";
import {
  AnalyticsProvider,
  AnalyticsScopeProvider,
} from "@yext/pages/components";
// import Logo from "../images/logo.svg";
var currentUrl = "";

export const config: TemplateConfig = {
  stream: {
    $id: "states",
    filter: {
      savedFilterIds: ["dm_stores-directory_address_region"],
    },
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "description",
      "slug",
      "dm_directoryParents.name",
      "dm_directoryParents.slug",
      "dm_directoryParents.meta.entityType",
      "dm_directoryChildren.name",
      "dm_directoryChildren.slug",
      "dm_directoryChildren.id",
      "dm_directoryChildren.dm_directoryChildrenCount",
      "dm_directoryChildren.dm_directoryChildren.name",
      "dm_directoryChildren.dm_directoryChildren.slug",
      "dm_directoryChildren.dm_directoryChildren.id",

      //seo section
      // "c_canonical",
      // "c_metaDescription",
      // "c_metaTitle",
    ],
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  if (document?.dm_directoryParents) {
    document?.dm_directoryParents?.map((i: any) => {
      currentUrl = i.slug;
      currentUrl = `${currentUrl}/${document.slug.toString()}`;
    });

    return currentUrl + ".html";
  } else {
    return `${document.slug.toString()}.html`;
  }
};
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
    title: metaTitle,
    charset: "UTF-8",
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
          content: "noindex, nofollow",
        },
      },

      {
        type: "link",
        attributes: {
          rel: "canonical",
          href: ` ${
            document.c_canonical
              ? document.c_canonical
              : `${stagingBaseUrl}/${currentUrl}`
          }`,
        },
      },
      ///og tags

      {
        type: "meta",
        attributes: {
          property: "og:url",
          content: `${stagingBaseUrl}/${currentUrl}`,
        },
      },

      {
        type: "meta",
        attributes: {
          name: "og:image",
          content:
            "https://www.papajohns.com.mx/en-US/images/logos/pji_arch_red_en.png",
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
          name: "twitter:card",
          content: "summary",
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:url",
          content: `${stagingBaseUrl}/${currentUrl}`,
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
      {
        type: "meta",
        attributes: {
          name: "twitter:description",
          content: `${metaDescription}`,
        },
      },
    ],
  };
};

const State: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  document,
  __meta,
}) => {
  const { name, dm_directoryParents, dm_directoryChildren, _site } = document;
  console.log("country2", dm_directoryParents);
  let templateData = { document: document, __meta: __meta };

  // const childrenDivs =
  //   dm_directoryChildren &&
  //   dm_directoryChildren.map((entity: any) => {
  //     let url: any = "";

  //     url = document.slug.toString();
  //     let url1: any = "";
  //     url1 = url.replace(/(\b\S.+\b)(?=.*\1)/g, "").trim();
  //     if (entity.dm_directoryChildrenCount == 1) {
  //       if (
  //         entity.dm_directoryChildren &&
  //         entity.dm_directoryChildren[0].slug
  //       ) {
  //         return (
  //           <div className="w-1/2 storelocation-category md:w-1/3 lg:w-1/4 px-4">
  //             <a
  //               key={entity.slug}
  //               href={stagingBaseUrl+"/" + entity.dm_directoryChildren[0].slug + ".html"}
  //               className="hover:text-red"
  //             >
  //               {entity.name} ({entity.dm_directoryChildrenCount})
  //             </a>
  //           </div>
  //         );
  //       } else {
  //         let name: any = entity.dm_directoryChildren[0].name.toLowerCase();
  //         let string: any = name.toString();
  //         let removeSpecialCharacters = string.replace(
  //           /[&\/\\#^+()$~%.'":*?<>{}!@]/g,
  //           ""
  //         );
  //         let result: any = removeSpecialCharacters.replaceAll("  ", "-");
  //         let finalString: any = result.replaceAll(" ", "-");
  //         url = `${entity.dm_directoryChildren[0].id}-${finalString}.html`;
  //         return (
  //           <div className="w-1/2 storelocation-category md:w-1/3 lg:w-1/4 px-4">
  //             <a key={entity.slug} href={stagingBaseUrl+ "/" + url} className="hover:text-red">
  //               {entity.name} ({entity.dm_directoryChildrenCount})
  //             </a>
  //           </div>
  //         );
  //       }
  //     } else {
  //       return (
  //         <div className="w-1/2 storelocation-category md:w-1/3 lg:w-1/4 px-4">
  //           <a
  //             key={entity.slug}
  //             href={stagingBaseUrl+"/" + entity.slug + ".html"}
  //             className="hover:text-red"
  //           >
  //             {entity.name} ({entity.dm_directoryChildrenCount})
  //           </a>
  //         </div>
  //       );
  //     }
  //   });
  const childrenDivs =
    dm_directoryChildren &&
    dm_directoryChildren?.map((entity: any) => {
      if (entity?.dm_directoryChildrenCount == 1) {
        let slug = "/" + entity?.dm_directoryChildren[0]?.slug + ".html";

        return (
          <div className="w-1/2 storelocation-category md:w-1/3 lg:w-1/4 px-4">
            <a key={entity.slug} href={slug} className="hover:text-red">
              {entity.name} ({entity.dm_directoryChildrenCount})
            </a>
          </div>
        );
      } else {
        // console.log(dm_directoryParents&&dm_directoryParents[1]&&dm_directoryParents[1].slug,'jghhfhhhjhhhhh')
        let slug =
          "/" +
          dm_directoryParents[1]?.slug +
          "/" +
          document.slug +
          "/" +
          entity.slug +
          ".html";
        return (
          <div className="w-1/2 storelocation-category md:w-1/3 lg:w-1/4 px-4 test">
            <a key={entity.slug} href={slug} className="hover:text-red">
              {entity.name} ({entity.dm_directoryChildrenCount})
            </a>
          </div>
        );
      }
    });
  let breadcrumbScheme: any = [];
  let currentIndex: any = 0;
  dm_directoryParents &&
    dm_directoryParents?.map((i: any, index: any) => {
      currentIndex = index;
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
  breadcrumbScheme.push({
    "@type": "ListItem",
    position: currentIndex + 1,
    item: {
      "@id": `${stagingBaseUrl}/${document.slug.toString()}.html`,
      name: document.name,
    },
  });

  return (
    <>
      <JsonLd<Organization>
        item={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "papa john's pizza",
          url: "https://www.papajohns.com/international/",
          logo: "https://www.papajohns.com.mx/en-US/images/logos/pji_arch_red_en.png",
          address: {
            "@type": "PostalAddress",
            streetAddress: "PApa John's pizza",
            addressLocality: "Papa John's International, Inc.",
            addressRegion: "Louisville",
            postalCode: "99900",
            addressCountry: "Louisville",
          },
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "contact",
            telephone: "01255 222568",
          },
          sameAs: [
            "https://www.facebook.com/papajohnsmx",
            "https://www.instagram.com/papajohnsmx/",
            "https://www.twitter.com/papajohnsmx",
          ],
        }}
      />

      <JsonLd<BreadcrumbList>
        item={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",

          itemListElement: breadcrumbScheme,
        }}
      />
      <AnalyticsProvider
        templateData={templateData}
        enableDebugging={AnalyticsEnableDebugging}
        enableTrackingCookie={AnalyticsEnableTrackingCookie}
      >
        {" "}
        <AnalyticsScopeProvider name={"header"}>
        <Header
          HeaderLogo={_site.c_header.headerLogo}
          HeaderLabels={_site.c_header.navigationLinks}
        />
          <BreadCrumbs
            name={name}
            parents={dm_directoryParents}
            address={""}
          ></BreadCrumbs>
          {/* <Banner
        Name={document.dm_directoryParents[1].name}
        TagLine={""}
        BackgroundImage={
          document._site.c_directoryManagerBannerImage.url
            ? document._site.c_directoryManagerBannerImage.url
            : bannerImage
        }
        CtaButton={""}
        text={name}
        template={"state"}
      /> */}

          <h3 className="sec_heading mt-12" style={{ textAlign: "center" }}>
            Cities in {name}, {document.dm_directoryParents[1].name}{" "}
          </h3>
          <div className="directory-country nearby-sec">
            <div className="container">
              <div className="flex flex-wrap justify-center -mx-[15px]">
                <div className="w-full text-center"></div>
                {childrenDivs}
              </div>
            </div>
          </div>
          <Footer FooterData={_site.c_footer}/>
        </AnalyticsScopeProvider>
      </AnalyticsProvider>
    </>
  );
};

export default State;
