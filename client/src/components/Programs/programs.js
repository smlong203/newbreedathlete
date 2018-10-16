import React from 'react';
import './programs.css';
import { Link } from "react-router-dom";
import Program from '../Program';

// import myImage from "./logo.png"


class Programs extends React.Component {

    render() {

        return (
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
                {this.props.programs.length ? this.props.programs.map(program => (
                    <Program key={program.id} program={program} clients={this.props.clients} />

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
        )
    }
}

export default Programs;