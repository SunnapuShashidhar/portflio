import React from "react";
import { Consumer } from "../context";

function About() {
  return (
    <Consumer>
      {(value) => {

        const { About } = value;
        { console.log(About); }
        return (
          <div>
            <div className="jumbotron shadow p-5">
              <div className="text-center text-align-center">
                <h1 className="font-wight-light">
                  <span className="text-info">
                    About
                  </span>me
                </h1>
                <p>
                  I can develop the front the back of the web app
                </p>
              </div>
              <div className="row py-5 my-5 text-justify">
                {
                  About.map((item) => {
                    return (
                      <div className="col-12 col-md-6">
                        <h4>{item.question}</h4>
                        <p>{item.answer}</p>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        );
      }}
    </Consumer>
  )
}
export default About;