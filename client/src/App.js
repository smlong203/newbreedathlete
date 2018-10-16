import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import API from "./utils/API";
import Dashboard from './components/Dashboard';
import Clients from './components/Clients';
import Programs from './components/Programs';
import NewClient from './components/NewClient'

class App extends React.Component {
  state = {
    programs: [],
    workouts: [],
    exercises: [],
    clients: []
  }

  loadPrograms = () => {
    return API.getPrograms()
  };

  loadWorkouts = () => {
    return API.getWorkouts()
  };

  loadExercises = () => {
    return API.getExercises()
  };

  loadClients = () => {
    return API.getClients()
  };

  loadData = () => {
    let getPrograms = this.loadPrograms();
    let getWorkouts = this.loadWorkouts();
    let getExercises = this.loadExercises();
    let getClients = this.loadClients();

    Promise.all([getPrograms, getWorkouts, getExercises, getClients])
      .then(promises => {
        this.setState({
          programs: promises[0].data,
          workouts: promises[1].data,
          exercises: promises[2].data,
          clients: promises[3].data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  componentDidMount() {
    this.loadData();
  }
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" render={(props) => <Dashboard {...props} programs={this.state.programs} clients={this.state.clients} />} />

            <Route exact path="/dashboard" render={(props) => <Dashboard {...props} programs={this.state.programs} clients={this.state.clients} />} />

            <Route exact path="/clients" render={(props) => <Clients {...props} clients={this.state.clients} />} />

            <Route exact path="/programs" render={(props) => <Programs {...props} programs={this.state.programs} clients={this.state.clients} />} />

            <Route exact path="/newClient" render={(props) => <NewClient {...props} programs={this.state.programs} loadData={this.loadData} />} />

          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
