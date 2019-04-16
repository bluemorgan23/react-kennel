import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/AnimalList'
import LocationList from './locations/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from "./owners/OwnerList"
import AnimalData from "../modules/AnimalManager"
import EmployeeManager from "../modules/EmployeeManager"
import OwnerManager from "../modules/OwnerManager"
import LocationManager from "../modules/LocationManager"

class ApplicationViews extends Component {

     /*
        Although you will eventually be pulling your objects
        from your json-server API, for this chapter, we're
        faking it and just creating those arrays in the component
        itself
    */

    state = {
        locations: [],
        animals: [],
        employees: [],
        owners: []
    }

    componentDidMount() {
        const newState = {}
    
            AnimalData.all("animals")
            .then(animals => newState.animals = animals)
            .then(() => EmployeeManager.all("employees"))
            .then(employees => newState.employees = employees)
            .then(() => LocationManager.all("locationsFromAPI"))
            .then(locations => newState.locations = locations)
            .then(() => OwnerManager.all("ownersFromAPI"))
            .then(owners => newState.owners = owners)
            .then(() => this.setState(newState))
    }

    deleteAnimal = id => {
        AnimalData.removeAndList(id)
        .then(animals => this.setState({
            animals: animals
        })
      )
    }

    deleteEmployee = id => {
        EmployeeManager.removeAndList(id)
        .then(employees => this.setState({
            employees: employees
        })
      )
    }

    deleteOwner = id => {
        OwnerManager.removeAndList(id)
        .then(owners => this.setState({
            owners: owners
        })
      )
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route path="/animals" render={(props) => {
                    return <AnimalList deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList deleteEmployee={this.deleteEmployee} employees={this.state.employees} />
                }} />
                <Route path="/owners" render={(props) => {
                    return <OwnerList deleteOwner={this.deleteOwner}owners={this.state.owners} />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews