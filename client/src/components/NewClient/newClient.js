import React from 'react';
import './newClient.css';
import API from '../../utils/API';

class NewClient extends React.Component {
    state = {
        firstname: "",
        lastname: "",
        email: "",
        ProgramId: 1,
    }

    handleInputChange = event => {
        let name = event.target.name;
        let value = event.target.value;

        let newState = {};
        newState[name] = value;

        this.setState({ ...newState })
    }

    handleCreateNewClient = (event) => {
        event.preventDefault();
        API.saveClient(this.state).then(newClient => {
            this.setState({
                firstname: "",
                lastname: "",
                email: "",
                ProgramId: 1
            })
            this.props.loadData();
        })

    }

    render() {
        return (
            <div>
                <h3>Add New Client</h3>
                <form>
                    <input name="firstname" value={this.state.firstname} placeholder="Client first name" onChange={this.handleInputChange} />
                    <input name="lastname" value={this.state.lastname} placeholder="Client last name" onChange={this.handleInputChange} />
                    <input name="email" value={this.state.email} placeholder="Client email" onChange={this.handleInputChange} />
                    <select name="ProgramId" value={this.state.ProgramId} onChange={this.handleInputChange}>
                        {this.props.programs.map(program => <option key={program.id} value={program.id}>{program.name}</option>)}
                    </select>
                    <button type="submit" onClick={this.handleCreateNewClient}>Submit</button>
                </form>
            </div>
        )
    }
}

export default NewClient;