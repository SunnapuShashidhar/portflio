import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import axios from "axios";

class ProjectPage extends Component {
  state = {

    imageUrl: "",
    title: "",
    body: "",
  }

  async componentDidMount() {
    const responce = await axios.get(`https://assignment7ofedureka.herokuapp.com/restarent/getRestaurantById/${this.props.match.params.id}`);
    const isSuccessful = responce.data.isSuccessful;
    this.setState({

      title: responce.data.result.title,
      imageUrl: responce.data.result.imageUrl,
      body: responce.data.result.body,
    });


  };


  render() {
    const { imageUrl, title, body } = this.state;
    return (
      <div className="container py-5 my-5 markdown">
        <div className="justify-content-center">
          <img src={imageUrl} alt={title} className="w-100" />
        </div>
        <h1 className="font-weight-light text-center my-5">{title}</h1>
        <ReactMarkdown >{body}</ReactMarkdown>
      </div>

    );
  }

}

export default ProjectPage; 