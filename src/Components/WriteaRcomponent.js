import axios from 'axios';
import React, { Component } from 'react';
// import { v4 as uuid } from 'uuid';
import { Consumer } from '../context';

class WriteaRcomponent extends Component {
    state = {
        name: "",
        email: "",
        company: "",
        designation: "",
        message: "",
        submitmessage: "",
        submitmessageTextColor: "",
    };
    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    onSubmit = async (handler, event) => {
        event.preventDefault();

        const newRecomandation = {
            // id: uuid(),
            name: this.state.name,
            email: this.state.email,
            company: this.state.company,
            designation: this.state.designation,
            message: this.state.message,
        };
        console.log(newRecomandation);
        const responce = await axios.post("https://portfoliomicroservers.herokuapp.com/newrecommend/rec/", newRecomandation)
        let isSuccessful;
        if (responce.data.isSuccessful)
            isSuccessful = true;
        else
            isSuccessful = false;
        const { name } = this.state;
        if (isSuccessful) {
            this.setState({
                submitmessage: `Thanks ${name} . I will contact you soon`,
                submitmessageTextColor: "text-info",
            });

        }
        else {
            this.setState({
                submitmessage: "Oops! somthing went wrong",
                submitmessageTextColor: "text-danger",
            });
        }

        handler("ADD_RECOMANDATION", newRecomandation);
    };


    render() {
        return (
            <Consumer>
                {(value) => {
                    const { submitmessageTextColor, submitmessage } = this.state;
                    const { handler } = value;
                    return (
                        <div className="container my-5 py-5">
                            <  h1 className="font-weight-light text-center py-5">
                                <span className="text-info">Thanks you!</span> showing interest
                            </h1>
                            <div className="row justify-content-center">
                                <div className="col-11 col-lg-5">
                                    <form onSubmit={this.onSubmit.bind(this, handler)}>
                                        <div className="form-group">
                                            <label htmlFor="name">Name*</label>
                                            <input type="text" name="name" className="form-control" onChange={(e) => this.setState({ name: e.target.value })} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email*</label>
                                            <input type="email" name="email" className="form-control" onChange={(e) => this.setState({ email: e.target.value })} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="company">Company/institution</label>
                                            <input type="text" name="company" className="form-control" onChange={(e) => this.setState({ company: e.target.value })} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="designation">Designation</label>
                                            <input type="text" name="designation" className="form-control" onChange={(e) => this.setState({ designation: e.target.value })} />
                                        </div>
                                        <label htmlFor="message">Recommendation</label>
                                        <input type="text" name="message" className='form-control' onChange={(e) => this.setState({ message: e.target.value })} />
                                        {/* <textarea type="text" className="form-control" row="5" name="message" onChange={(e) => this.setState({ message: e.target.value })} /> */}
                                        <button type="submit" className="btn btn-danger float-right" style={{ backgroundColor: "red" }}>
                                            Let's of Love!
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="py-5 mx-2 text-center">
                                <h5 className={submitmessageTextColor}>{submitmessage}</h5>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )


    }


}
export default WriteaRcomponent;