import React from 'react';
import './client.css';
import { Link } from "react-router-dom";
import moment from 'moment';


class Client extends React.Component {

  render() {
    return (
      <div className="row">
        <div className="col-sm-4" >
          <Link to={"/clients/" + this.props.client.id}>{`${this.props.client.firstname} ${this.props.client.lastname}`}</Link>
        </div>
        <div className="col-sm-3">{this.props.client.Program.name}</div>

        <div className="col-sm-3">{moment(this.props.client.createdAt).format("MM/DD/YYYY")}</div>
        <div className="col-sm-2">
          <Link to="/settings"> <button className="btn">Set Icon</button></Link>
        </div>
      </div>
    )
  }
}

export default Client;