import * as React from "react";

type Props = {
  prop1: any;
  prop2: any;
};

const Card = (Data: Props) => {
  const{prop1,prop2}=Data
  return (
    <>
      <div className="about-sec">
        <div className="container">
          <div className="about-content">
            <h3 className="sec_heading">{prop1 ? prop1 : ""}</h3>
            <p dangerouslySetInnerHTML={{__html: prop2 ? prop2 : ""}} />             
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
