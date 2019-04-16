import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/AnimalList'
import LocationList from './locations/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from "./owners/OwnerList"
import AnimalManager from "../modules/AnimalManager"
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
    
        AnimalManager.getAll()
            .then(animals => newState.animals = animals)
            .then(() => EmployeeManager.getAll())
            .then(employees => newState.employees = employees)
            .then(() => LocationManager.getAll())
            .then(locations => newState.locations = locations)
            .then(() => OwnerManager.getAll())
            .then(owners => newState.owners = owners)
            .then(() => this.setState(newState))
    }

    deleteAnimal = id => {
        return fetch(`http://localhost:5002/animals/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/animals`))
        .then(e => e.json())
        .then(animals => this.setState({
            animals: animals
        })
      )
    }

    deleteEmployee = id => {
        return fetch(`http://localhost:5002/employees/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/employees`))
        .then(e => e.json())
        .then(employees => this.setState({
            employees: employees
        })
      )
    }

    deleteOwner = id => {
        return fetch(`http://localhost:5002/ownersFromAPI/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/ownersFromAPI`))
        .then(e => e.json())
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