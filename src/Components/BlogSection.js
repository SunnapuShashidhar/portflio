import React from 'react'
import BlogCard from './BlogCard';
import { Consumer } from '../context';
import {Link} from 'react-router-dom';
function BlogSection(){
    return(
   <Consumer>
       {
    (value)=>{
        const {blogs}=value;

        return (
  <div>
     <div className="container my-5 shadow">
      <div className="text-center text-align-center">
           <h1 className="font-wight-light">
             My <span className="text-info">
             Blogs
             </span>
         </h1>
          <div className="lead">I buld Blogs . Just like this website </div>
         </div>
            <div className="row my-5 pt-3">
                 {
                     blogs.slice(0,3).map((blog)=>(
                         <div key={blog.id} className="col-md-4 col-12">
                             <BlogCard blog={blog}/>
                         </div>
                     ))
                 }
            </div>   
            <div className="my-5">
                               <Link to="/AllBlogs" className="text-dark text-right" >
                                   <h5>
                                       See my blogs
                                       <i className="fas fa-arrow-right align-middle py-5">

                                       </i>
                                   </h5>
                               </Link>
                               </div>  
            
    </div>
 </div>
        );
                }}
   </Consumer>
    );       
    
}

export default BlogSection;