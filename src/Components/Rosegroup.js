import React from 'react'
import shashi from "../assets/shashi.jpg"
import venu from "../assets/venu.jpg"
import group from "../assets/group.jpg"
function Rosegroup() {
  return (
    <div className='container pt-5 bg-dark'>
       <  h1 className="font-weight-light text-center py-5">
                              <span className="text-info">Rose_Grope!</span>
                          </h1>
                          <div className="d-flex flex-column justify-content-center">
                          <img className="img-fluid pl-5 ml-5 w-75 pt-0" src={group} alt="Rouse Group"/>
                          <div className='h1 text-warning'>
                          "We are always face the Prblems with unity like how the grass stop the water"
                          </div>
                            </div> 
                         
      <div className="row">
      <div className="col-12 col-md-6">
        <div className="">
        <img className="img-fluid rounded-circle w-75 pt-0" src={shashi} alt="Shashidhar Sunnapu"/>
      <div className="card shadow h-100 my-2">
           <div className="card-body">
              <h4 className="card-title">Shashidhar Sunnapu</h4>
              <p className="card-text text-secondary">boy with kindness<br/>B.sc mpcs </p>
            </div> 
            </div>
            </div>
      </div>
      <div className="col-12 col-md-6">
        <div className="">
        <img className="img-fluid rounded-circle w-75 pt-0" src={venu} alt="Shashidhar Sunnapu"/>
      <div className="card shadow h-100 my-2">
           <div className="card-body">
              <h4 className="card-title">Venu</h4>
              <p className="card-text text-secondary">Boy with good heart<br/>B.sc mpc </p>
            </div> 
            </div>
            </div>
      </div>
      
    </div>


    </div>
  )
}

export default Rosegroup
