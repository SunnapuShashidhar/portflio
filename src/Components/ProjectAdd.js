import React, { Component } from 'react';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import ReactMarkdown from "react-markdown";
import { Consumer } from '../context';
import { v4 as uuid } from 'uuid';
import axios from "axios";

class ProjectAdd extends Component {
    state = {
        imageUrl: "",
        title: "",
        excerpt: "",
        body: "",
        submitMessage: "",
        submitMessageTextColor: "",

    };
    onBodyChange = (value) => {
        this.setState({
            body: value,
        });
    };
    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };
    onSubmit = async (handler, event) => {
        event.preventDefault();
        const newProject = {
            id: uuid(),
            imageUrl: this.state.imageUrl,
            title: this.state.title,
            excerpt: this.state.excerpt,
            body: this.state.body,
        };

        const responce = await axios.post("http://127.0.0.1:9000/api/project/add", newProject)

        const isSuccessful = responce.data.isSuccessful;

        if (isSuccessful) {
            this.setState({
                submitMessage: `Project published successfully`,
                submitMessageTextColor: "text-info",
            });

        }
        else {
            this.setState({
                submitMessage: "Failed Publishing",
                submitMessageTextColor: "text-danger",
            });
        }

        handler("ADD_PROJECT", newProject);
    };
    render() {
        return (
            <Consumer>
                {(value) => {
                    const { imageUrl, title, body, submitMessage, submitMessageTextColor } = this.state;
                    const { handler } = value;
                    return (
                        <div>
                            <div className="container-fluid my-5 py-5">
                                <h1 className="font-weight-light text-center"><span className="text-info">Add</span> Project</h1>
                                <div className="row px-5 px-lg-5">
                                    <div className="col-12 col-lg-6">
                                        <form onSubmit={this.onSubmit.bind(this, handler)}>
                                            <div className="form-group">
                                                <label htmlFor="imageUrl">Featured-Image-Url*</label>
                                                <input
                                                    type="text"
                                                    name="imageUrl"
                                                    id="imageUrl"
                                                    className="form-control"
                                                    src={imageUrl}
                                                    alt={title}
                                                    onChange={this.onChange}
                                                    required />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="title">Title*</label>
                                                <input name="title" type="text" id="title" className="form-control" onChange={this.onChange} required />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="excerpt">Excerpt*</label>
                                                <input name="excerpt" type="text" id="excerpt" className="form-control" onChange={this.onChange} required />
                                            </div>
                                            <SimpleMDE
                                                onChange={this.onBodyChange}
                                                options={{
                                                    hideIcons: ["preview", "side-by-side", "fullscreen"],
                                                }}
                                            />

                                            <button type="submit" className="btn btn-dark btn-block my-5 text-center" style={{ backgroundColor: "black" }}>publish</button>
                                            <div className="font-weight-light text-center">
                                                <div className={submitMessageTextColor}>{submitMessage}</div>
                                            </div>
                                        </form>


                                    </div>
                                    <div className="col-12 col-lg-6 markdown">
                                        <div className="justify-content-center">
                                            <img src={imageUrl} alt={title} />
                                        </div>
                                        <div className="font-weight-light text-center my-5">
                                            <h1>{title}
                                            </h1>
                                        </div>
                                        <ReactMarkdown >{body}</ReactMarkdown>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )

    }
}

export default ProjectAdd;