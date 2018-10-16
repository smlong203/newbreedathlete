import React from 'react';
import './program.css';
import API from "../../utils/API";
import { Link } from "react-router-dom";

class Program extends React.Component {
    state = {
        clientsInProgram: []
    }

    getClientsByProgram = (programId) => {
        return new Promise((resolve, reject) => {
            API.getClientsByProgramId(programId)
                .then(res => {
                    let clientsInProgram = res.data;
                    this.setState({ clientsInProgram });
                })
                .catch(err => reject(err));
        })

    };

    componentDidMount() {
        this.getClientsByProgram(this.props.program.id);
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-4" key={this.props.program.id}>
                    <Link to={"/programs/" + this.props.program.id}>{this.props.program.name}</Link>
                </div>
                <div className="col-sm-3">{`${this.state.clientsInProgram.length ? this.state.clientsInProgram.length : 'Loading clients...'}`}</div>

                <div className="col-sm-2">{`${this.state.clientsInProgram.length ? (((this.state.clientsInProgram.length / this.props.clients.length) * 100) + '%') : 'Loading %...'}`}</div>
                <div className="col-sm-2">
                    <Link to="/settings"> <button className="btn">Assign</button></Link>
                </div>
                <div className="col-sm-1">Set Icon</div>
            </div>
        )
    }
}

export default Program;