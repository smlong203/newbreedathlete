import React from "react"
import "./clients.css"
import Client from "../Client"

import { Link } from "react-router-dom";

class Clients extends React.Component {
    render() {
        return (
            <div className="col-md-6 sm-12" >
                <div className="jumbotron" >
                    <h1>Clients</h1>
                </div >
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-3">Program</div>
                    <div className="col-sm-3">Signup Date</div>
                    <div className="col-sm-2"></div>
                </div>
                {this.props.clients.length ? this.props.clients.map(client => (
                    <Client key={client.id} client={client} />

                )) : (<h3>Loading Icon...</h3>)}
                <div className="row client-action-btn">
                    <div className="col-sm-12">
                        <Link to="/createClient"> <button className="btn btn-primary">Create Client</button></Link>
                    </div>
                </div>
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
        )
    }
}
export default Clients