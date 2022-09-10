import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Consumer } from '../context';
import {v4 as uuid} from 'uuid';

 class AddBlog extends Component {
     state={
         id:"",
         imageUrl:"",
         title:"",
         except:"",
         body:"",
         submitMessage:"",
         submitMessageTextColor:"",
     };
     onChange=(event)=>{
         this.setState({
             [event.target.name]:event.target.value,
         })
     };
     onBodyChange=(value)=>{
         this.setState({
             body:value,
         })
     };
     onSubmit=(handler,event)=>{
         event.preventDefault();

         let isSuccessful=true;
        
         if(isSuccessful)
         {
             this.setState({
                submitMessage:"Blog Published successfully",
                submitMessageTextColor:"text-info",
             });
            
         }
         else{
            this.setState({
                submitMessage:"Publish failed",
                submitMessageTextColor:"text-dark",
            });
            
           
       
         }
         const newBlog={
            id:uuid(),
            imageUrl:this.state.imageUrl,
            title:this.state.title,
            except:this.state.except,
            body:this.state.body,
        };
        handler("ADD_BLOG",newBlog);
     }
    render() {
        return(
            <Consumer>
                {(value)=>{
                    const {id,imageUrl,title,body,submitMessageTextColor,submitMessage}=this.state;
                    const {handler}=value;
                     return (
                        <div className="container pt-5 mt-5">
                            <h1 className="font-weight-light text-center"><span className="text-info">Add</span> Blogs</h1>
                            <div className="row pt-5">
                                <div className="col-12 col-md-6">
                                    <form onSubmit={this.onSubmit.bind(this,handler)}>
                                        <div className="form-group">
                                            <label htmlFor="imageUrl">Featured image*</label>
                                            <input 
                                            type="text"
                                            id="imageUrl"
                                            name="imageUrl"
                                            className="form-control"
                                            src={imageUrl}
                                            alter={title}
                                            onChange={this.onChange}
                                            required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="title">title*</label>
                                            <input 
                                            type="text"
                                            id="title"
                                            name="title"
                                            className="form-control"
                                            onChange={this.onChange}
                                            required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="except">except*</label>
                                            <input 
                                            type="text"
                                            id="except"
                                            name="except"
                                            className="form-control"
                                            onChange={this.onChange}
                                            required />
                                        </div>
                                        <SimpleMDE
                      onChange={this.onBodyChange}
                      options={{
                        hideIcons: ["preview", "side-by-side", "fullscreen"],
                      }}
                    />
                                        <button type="submit" className="btn btn-dark btn-block text-center my-5"style={{backgroundColor:"black"}}>Publish</button>
                                           <h1 className="text-center font-weight-light p-4">
                                               <div className={submitMessageTextColor}>{submitMessage}</div>
                                           </h1>
                                    </form>
                                </div>
                                <div className="col-12 col-md-6 markdown">
                                    <div className="justify-content-center">
                                        <img src={imageUrl} alt={title} />
                                    </div>
                                    <div className="font-weight-light text-center my-5">
                                        {title}
                                    </div>
                                    <ReactMarkdown >{body}</ReactMarkdown>
                                </div>
                            </div>
                            
                        </div>
                    )
                }}
            </Consumer>
        )
       
    }
}
export default AddBlog;