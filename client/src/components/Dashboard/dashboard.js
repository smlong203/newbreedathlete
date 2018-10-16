import React from 'react';
import Programs from '../Programs';
import Client from "../Client";

const Dashboard = (props) => {
    if (props.programs.length && props.clients.length) {
        return (
            <div className="container container-fluid" >
                <div className="row">
                    <Programs programs={props.programs} clients={props.clients} />
                    <Client clients={props.clients} />
                </div>

            </div>

        )
    } else {
        return <div>Loading icon...</div>
    }
}

export default Dashboard;
