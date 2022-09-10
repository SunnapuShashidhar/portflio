import React from "react";
import { Link } from "react-router-dom";
import "../App.css"
function Fotter() {
  return (
    <div>
      <div className="container-fluid fotter bg-dark text-center text-align-center py-4">


        <p className="text-light h2">Intrested in working with me?</p>
        <Link to="/contact">
          <button id="let" className="btn btn-outline-light text-light">let's talk</button>
        </Link>

        <div className="row text-light py-3">
          <div className="col-12 col-md-4">
            <h5 className="text-info">More Links</h5>
            <a href="https://cpprogrames.blogspot.com/" className="text-light d-block">Blog</a>
            <Link to="/" className="text-light d-block">home</Link>
            <Link to="/contact" className="text-light d-block">Contact Me</Link>
            <Link to="/write-a-recomandation" className="text-light d-block">Write a recommendation<i className="fas fa-heart"></i></Link>
          </div>
          <div className="col-12 col-md-4 text-justify py-3 px-1">
            <p>
              I am shashidhar sunnapu from Ibrahimpatam,Jagithal,Telangana. And Now,I completed my graduaction from Govt.Girraj(A) college in Nizamabad,Telangana. I want to a good web developer. My project own the state level second price named G-tutor.
            </p>
          </div>
          <div className="col-12 col-md-4">
            <h5 className="text-info">Social</h5>
            <a href="https://www.linkedin.com/in/shashidhar-sunnapu-46147521a/">
              <i className="fab fa-linkedin text-light h1 d-block"></i>
            </a>
            <a href="https://github.com/SunnapuShashidhar">
              <i className="fab fa-github text-light h1 d-block"></i>
            </a>
            <a href="mailto:sunnapushashidhar@gmail.com">
              <i className="fa fa-envelope text-light h1 d-block"></i>
            </a>

          </div>

        </div>
        <div className="bg-dark text-muted text-center">
          <p>copyright@ Shashidhar Sunnapu 2021</p>
        </div>
      </div>


    </div>

  );
}
export default Fotter;