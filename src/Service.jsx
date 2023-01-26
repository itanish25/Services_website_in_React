import React from "react";
import Sdata from "./Sdata";
import Card from "./Card.jsx";

const Service = () => {
  return (
    <>
      <div className="my-2">
        <h1 className="text-center mb-4"> Our Services </h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            {/* mx-auto will center it */}
            <div className="row gy-4">
              {Sdata.map((val, ind) => {
                return <Card key={ind} imgsrc={val.imgsrc} title={val.title} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
