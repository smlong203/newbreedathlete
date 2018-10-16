import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";


import "./Programs.css"

class Programs extends Component {
  state = {
    clientsInProgram: []
  }



  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveProgram({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadPrograms())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div className="container container-fluid" >
        <div className="row">



        </div>
      </div >
    );
  }
}

export default Programs;