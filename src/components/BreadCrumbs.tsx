import * as React from "react";
import { livSiteUrl, stagingBaseUrl } from "../constants";
import { svgIcons } from "../svgIcon";
import { Link } from "@yext/pages/components";

type data = {
  name: any;
  parents: any;
  address: any;
};

const BreadCrumbs = (props: data) => {
  const [list, setList] = React.useState(null);

  var breadcrumbs;
  var data: any = [];
  React.useEffect(() => {
    setURL(props.parents);
  }, [setList]);

  const setURL = (parents: any) => {
    if (parents) {
      for (let i = 0; i < parents.length; i++) {
        if (parents[i].meta.entityType.id == "pizza_country") {
          parents[i].name = parents[i].name;
          parents[i].slug = parents[i].slug;
          data.push({
            name: parents[i].name,
            slug: parents[i].slug,
          });
        } else if (parents[i].meta.entityType.id == "pizza_region") {
          data.push({ name: parents[i].name, slug: parents[i].slug });
          parents[i].name = parents[i].name;
          parents[i].slug = `${parents[i].slug}`;
        } else if (parents[i].meta.entityType.id == "pizza_city") {
          parents[i].name = parents[i].name;
          parents[i].slug = `${parents[i].slug}`;
          data.push({
            name: parents[i].name,
            slug: parents[i].slug,
          });
        }
      }

      breadcrumbs = data.map((crumb: any,index:any) => (
        <li key={crumb.slug}>          
          <Link href={`${stagingBaseUrl}/${crumb.slug}.html`} rel="noopener noreferrer" eventName={'BreadCrumbs'+(index+1)} >{crumb.name}</Link>
        </li>
      ));
      setList(breadcrumbs);
    } else {
      setList(null);
    }
  };

  return (
    <div className="breadcrumb">
      <div className="container">
        <ul>
          <li>
            <a href={livSiteUrl}>{svgIcons.homeIcon}</a>
          </li>

          {list ? (
            list
          ) : (
            <>
              {props.address && props.address.city ? (
                <li>
                  {" "}
                  <a href={props.address.city + ".html"}>
                    {props.address.city ? props.address.city : ""}
                  </a>
                </li>
              ) : (
                <></>
              )}
            </>
          )}
          <li>{props && props.name}</li>
        </ul>
      </div>
    </div>
  );
};

export default BreadCrumbs;
