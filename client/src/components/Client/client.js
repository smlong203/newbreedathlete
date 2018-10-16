import React from 'react';
import './client.css';

class Client extends React.Component {
    render() {
        return (
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
        )
    }
}

export default Client;