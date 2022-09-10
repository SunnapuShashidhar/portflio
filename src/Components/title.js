import React from "react";
import shashi from "../assets/shashi.jpg"

function Title() {
    const a = "Shashidhar Sunnapu";
    const b = "a freelancer from India";
    return (

        <div className="jumbotron text-center align-items-center m-2 shadow">
            <div className="row py-3 mt-5">
                <div className="col-12 col-md-6">
                    <img className="img-fluid rounded-circle w-75" src={shashi} alt="Shashidhar Sunnapu" />
                </div>
                <div className="col-12 col-md-6 py-5 text-center align-items-center">
                    <div className="font-weight-light" style={{ fontSize: "50px" }}>
                        Hi, I am <span className="text-info">{a}</span>
                        <h4 className="font-weight-light">{b}</h4>
                    </div>
                </div>
            </div>
        </div>


    );
}
export default Title;