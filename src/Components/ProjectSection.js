import React from 'react'
import ProjectCard from './ProjectCard';
import {Consumer} from "../context";
import { Link } from 'react-router-dom';


function ProjectSection(){
    return(
        <Consumer>
            {
                (value)=>{

                    const { projects } = value;
                    return (
  
                    <div className="container my-5 shadow">
                     <div className="text-center text-align-center">
                          <h1 className="font-wight-light">
                            My <span className="text-info">
                            Project
                            </span>
                        </h1>
                                <div className="lead">I buld project. Just like this website </div>
                        </div>
                           <div className="row my-5 pt-3">
                                {
                                    projects.slice(0,3).map((project)=>(
                                        <div key={project.id} className="col-md-4 col-12">
                                            <ProjectCard project={project}/>
                                        </div>
                                    ))
                                }
                           </div> 
                           <div className="my-5">
                               <Link to="/AllProject" className="text-dark text-right" >
                                   <h5>
                                       See my Project
                                       <i className="fas fa-arrow-right align-middle py-5">

                                       </i>
                                   </h5>
                               </Link>
                               </div>   
                   </div>
               
                       );

                }
            }
        
        </Consumer>
    );
  
    
}

export default ProjectSection;
