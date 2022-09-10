import React from "react";
import RecomandCard from "./RecomandCard";
import { v4 as uuid } from "uuid";
import { Consumer } from "../context";

function Recomandations(props) {
  return (
    <Consumer>
      {
        (value) => {
          const { recomand } = value;
          { console.log(recomand) }

          return (
            <div className="container-fluid">
              <div className="row text-center flex-nowrap d-flex overflow-auto scroolbar">
                {recomand.map((recomand) => (
                  <div key={uuid()} className="col-12 col-md-4">
                    <RecomandCard recomand={recomand} />
                  </div>
                ))}
              </div>
            </div>
          );
        }
      }
    </Consumer>
  )

}

export default Recomandations;