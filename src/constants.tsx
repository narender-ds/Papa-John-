export const limit = 4;
export const radius = 2500;
export const defaultQuery = "";
export const api_base_url = "https://liveapi-sandbox.yext.com/v2/accounts/me";
export const liveAPIKey = "7087cbcf8e234681b7411704be7f7b096";
export const googleMapsApiKey = "AIzaSyDZNQlSlEIkFAct5VzUtsP4dSbvOr2bE18";
export const savedFilterId = "1111065609";
export const entityTypes = "Location";
export const stagingBaseUrl = "";
export const livSiteUrl = "";
export const cookieText =
  "We use cookies on our website. Some are essential to enable to site to function, others are analytical and help us monitor site usage, whilst some are used for the personalisation of ads. You are free to manage this via your browser setting at any time. To learn more about how we use these cookies, please see our ";
export const bannerText = "Favorite - Britain's Tastiest Chicken!";
// export const newsLetter = "https://favorite.co.uk/newsletter";
// export const locator = "https://favorite.co.uk/store-finder";
export const callNearByApi = "server-side"; 
// use "client-side" for client side api calling
export const robotsMetaStatus = "noindex, nofollow";
export const OrganizationAddress = {
  type: "PostalAddress",
  streetAddress: "papa john's pizza",
  addressLocality: "Papa John's International, Inc.",
  addressRegion: "Louisville",
  postalCode: "99900",
  addressCountry: "Louisville",
};
export const OrganizationTelephone = "40269-9990";
export const OrganizationSocialMediaUrls = {
  facebook: "https://www.facebook.com/papajohnsmx",
  instagram: "https://www.instagram.com/papajohnsmx/",
  twitter: "https://www.twitter.com/papajohnsmx",
};
// export const OrganizationName = "Favorite Fried Chicken Limited";
// export const OrganizationLogo =
//   "https://favorite.co.uk/assets/img/logo-social.png";
// export const cookiesUrl = "https://favorite.co.uk/cookies";

export function slugify(slugString:any){
    slugString.toLowerCase().toString();
    slugString = slugString.replace(/[&\/\\#^+()$~%.'":*?<>{}!@]/g, "");
    slugString = slugString.replaceAll("  ", "-");
    slugString = slugString.replaceAll(" ", "-");
    return slugString.toLowerCase();
};
export const regionNames = new Intl.DisplayNames(
  ['en'], { type: 'region' }
);
export const conversionDetailsDirection = {
  cid: "e801ea67-1c6e-4815-baac-e61a111e9f77",
  cv: "1",
};

export const conversionDetailsPhone = {
  cid: "de598c07-b53c-407a-89f8-adc289ae9d62",
  cv: "2",
};

export const defaultTimeZone = "Europe/London";


export const AnalyticsEnableDebugging  = true;
export const AnalyticsEnableTrackingCookie  = true;