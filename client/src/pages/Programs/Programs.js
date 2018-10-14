import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
// // import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";
import "./Programs.css"

class Programs extends Component {
  state = {
    programs: [],
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadPrograms();
  }

  loadPrograms = () => {
    API.getPrograms()
      .then(res => {
        console.log(res.data);
        this.setState({ programs: res.data, title: "", author: "", synopsis: "" })
      })
      .catch(err => console.log(err));
  };

  deleteProgram = id => {
    API.deleteProgram(id)
      .then(res => this.loadPrograms())
      .catch(err => console.log(err));
  };

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
          <div className="col-md-6 sm-12">
            <div className="jumbotron">
              <h1>BREEDX Programs</h1>
            </div>
            <div className="row">
              <div className="col-sm-4"></div>
              <div className="col-sm-3">Clients Live</div>
              <div className="col-sm-2">Activity</div>
              <div className="col-sm-2"></div>
              <div className="col-sm-1"></div>
            </div>
            {this.state.programs.length ? this.state.programs.map(program => (
              <div className="row">
                <div className="col-sm-4" key={program._id}>
                  <Link to={"/programs/" + program._id}>{program.name}</Link>
                </div>
                <div className="col-sm-3">10</div>
                <div className="col-sm-2">25%</div>
                <div className="col-sm-2">
                  <Link to="/settings"> <button className="btn">Assign</button></Link>
                </div>
                <div className="col-sm-1">Set Icon</div>
              </div>
            )) : (<h3>Loading Icon...</h3>)}
            <div className="row program-action-btn">
              <div className="col-sm-6">
                <Link to="/createProgram"> <button className="btn btn-primary">Create Program</button></Link>
              </div>
              <div className="col-sm-6">
                <Link to="/createProgram"> <button className="btn btn-warning">Update Program</button></Link>
              </div>
            </div>
          </div>

          <div className="col-md-6 sm-12" >
            <div className="jumbotron" >
              <h1>Clients</h1>
            </div >
            {/* {this.state.programs.length ? (
              <List>
                {this.state.programs.map(program => (
                  <li key={program._id}>
                    <Link to={"/programs/" + program._id}>
                      <div>
                        <h3>  <strong>
                          {program.name}:
                      </strong>
                        </h3>
                        <h6>
                          {program.description}
                        </h6>
                      </div>


                    </Link>
                    <DeleteBtn onClick={() => this.deleteProgram(program._id)} />
                  </li>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )} */}
          </div>
        </div>
      </div >
    );
  }
}

export default Programs;
