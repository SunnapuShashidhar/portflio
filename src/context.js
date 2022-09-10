import React, { Component } from 'react';
import axios from "axios";
import html5 from "./assets/html5.png";
import css3 from "./assets/css3.png"
import javascript from "./assets/javascript.png";
import boot from "./assets/boot.png"
import rec from "./assets/react.png"
import mongo from "./assets/mongodb.png"
import download from "./assets/download.png"
import node from "./assets/node.png"
const context = React.createContext();

export class Provider extends Component {
    handler = (action, newObject) => {
        switch (action) {
            case "ADD_PROJECT":
                this.setState({
                    projects: [newObject, ...this.state.projects],
                });
                break;
            case "ADD_BLOG":
                this.setState({
                    blogs: [newObject, ...this.state.blogs],
                });
                break;
            case "ADD_RECOMANDATION":
                this.setState({
                    recomand: [newObject, ...this.state.recomand],
                });
                break;
            default:
                break;
        }

    };
    state = {
        handler: this.handler,
        projects: [

            {
                id: 2,
                title: "projects-2",
                imageUrl: css3,
                excerpt: "This is my project about ......",
                body: "body-2",
            },
            {
                id: 3,
                title: "projects-3",
                imageUrl: javascript,
                excerpt: "This is my project about ......",
                body: "body-3",
            },
        ],
        skill: [
            {
                id: 1,
                imageUrl: html5,
                starsTotal: 3,
                starsActive: 2,
            },
            {
                id: 2,
                imageUrl: css3,
                starsTotal: 3,
                starsActive: 2,
            },
            {
                id: 3,
                imageUrl: javascript,
                starsTotal: 3,
                starsActive: 2,
            },
            {
                id: 4,
                imageUrl: boot,
                starsTotal: 3,
                starsActive: 2,
            },
            {
                id: 5,
                imageUrl: rec,
                starsTotal: 3,
                starsActive: 2,
            },
            {
                id: 6,
                imageUrl: mongo,
                starsTotal: 3,
                starsActive: 1,
            },
            {
                id: 7,
                imageUrl: node,
                starsTotal: 3,
                starsActive: 1,
            },
            {
                id: 8,
                imageUrl: download,
                starsTotal: 3,
                starsActive: 1,
            },
        ],
        recomand: [

        ],

        blogs: [
            {
                id: 1,
                title: "blog-1",
                imageUrl: "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-1.jpg",
                excerpt: "This is my project about ......",
                body: "body-1",
            },
            {
                id: 2,
                title: "blog-2",
                imageUrl: "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-2.jpg",
                excerpt: "This is my project about ......",
                body: "body-2",
            },
            {
                id: 3,
                title: "blog-3",
                imageUrl: "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-3.jpg",
                excerpt: "This is my project about ......",
                body: "body-3",
            },
        ],
        About: [
            {
                id: 1,
                question: "What is My Qulification?",
                answer: "  I perceived Bachelar degree in computer science from the Govt.Girraj (Autonomous) Colege,Nizamabad."
            },
            {
                id: 2,
                question: "What am I doing now?",
                answer: " Now I'm brushuping My skills in the MERN stack, DSA and Basics of computer science as well I'm Also planning to do MCA."
            },
            {
                id: 3,
                question: "What do I belive in?",
                answer: "  Hard work in in-time. I belive in only this two things and also Updating my self with New things"
            }
        ]

    };
    async componentDidMount() {
        const newRecommendations = await axios.get("https://portfoliomicroservers.herokuapp.com/newrecommend/rec/");
        this.setState({ recomand: newRecommendations.data })
        const aboutResponce = await axios.get("https://portfoliomicroservers.herokuapp.com/about/rec");
        this.setState({ About: aboutResponce.data });

        // const newRecommendation = await axios.post("http://localhost:3000/about/rec");
        // this.setState({ recomand: newRecommendation.data });
        const [responseRecomend, responseSkills, responseProject, responseBlog, newAbouts] = await Promise.all([
            axios.get("http://localhost:9000/api/recommendations"),
            axios.get("http://localhost:9000/api/skills"),
            axios.get("http://localhost:9000/api/projects"),
            axios.get("http://localhost:9000/api/blogs"),
            axios.get("http://localhost:3000/about/")
        ])
        { console.log(newAbouts) }
        this.setState({ About: newAbouts });
        console.log(newAbouts);
        const newState = {};
        if (responseRecomend.data.results.length != 0) {
            newState.recomand = responseRecomend.data.results;
        }

        if (responseSkills.data.isSuccessful && responseSkills.data.results.length != 0) {
            newState.skill = responseSkills.data.results;

        }
        if (responseProject.data.results.length != 0) {
            newState.projects = responseProject.data.results;
        }
        if (responseBlog.data.isSuccessful && responseBlog.data.results.length != 0) {
            newState.blogs = responseBlog.data.results;
        }
        // this.setState({ About: newAbouts });
        this.setState(newState);

    }//if (
    // responseProjects.data.isSuccessful &&
    // responseProjects.data.results.length !== 0
    //) {
    //newState.projects = responseProjects.data.results;
    //}


    render() {
        return (
            <context.Provider value={this.state}>
                {this.props.children}
            </context.Provider>
        )
    }
}
export const Consumer = context.Consumer;