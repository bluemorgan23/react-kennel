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
import { withRouter } from 'react-router'
import AnimalDetail from './animals/AnimalDetail'
import EmployeeDetail from "./employee/EmployeeDetail"
import LocationDetail from "./locations/LocationDetail"
import OwnersDetail from "./owners/OwnersDetail"

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
        AnimalData.removeAndList(id, "animals")
            .then(animals => {
                this.props.history.push("/animals")
                this.setState({ animals: animals })
            })
    }

    deleteEmployee = id => {
        EmployeeManager.removeAndList(id, "employees")
            .then(employees => this.setState({
                employees: employees
            })
            )
    }

    deleteOwner = id => {
        OwnerManager.removeAndList(id, "ownersFromAPI")
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
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList deleteEmployee={this.deleteEmployee} employees={this.state.employees} />
                }} />
                <Route exact path="/owners" render={(props) => {
                    return <OwnerList deleteOwner={this.deleteOwner} owners={this.state.owners} />
                }} />
                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    // Find the animal with the id of the route parameter
                    let animal = this.state.animals.find(animal =>
                        animal.id === parseInt(props.match.params.animalId)
                    )

                    // If the animal wasn't found, create a default one
                    if (!animal) {
                        animal = { id: 404, name: "404", breed: "Dog not found" }
                    }

                    return <AnimalDetail animal={animal}
                        deleteAnimal={this.deleteAnimal} />
                }} />
                <Route path="/employees/:employeeId(\d+)" render={(props) => {
                    // Find the animal with the id of the route parameter
                    let employee = this.state.employees.find(employee =>
                        employee.id === parseInt(props.match.params.employeeId)
                    )

                    // If the animal wasn't found, create a default one
                    if (!employee) {
                        employee = { id: 404, name: "404", breed: "Dog not found" }
                    }

                    return <EmployeeDetail employee={employee} deleteEmployee={this.deleteEmployee} />
                }}
                />
                <Route path="/locations/:locationId(\d+)" render={(props) => {
                    // Find the animal with the id of the route parameter
                    let location = this.state.locations.find(location=>
                        location.id === parseInt(props.match.params.locationId)
                    )

                    // If the animal wasn't found, create a default one
                    if (!location) {
                        location = { id: 404, name: "404", breed: "Dog not found" }
                    }

                    return <LocationDetail location={location} />
                }}
                />
                <Route path="/owners/:ownerId(\d+)" render={(props) => {
                    // Find the animal with the id of the route parameter
                    let owner = this.state.owners.find(owner =>
                        owner.id === parseInt(props.match.params.ownerId)
                    )

                    // If the animal wasn't found, create a default one
                    if (!owner) {
                        owner = { id: 404, name: "404", breed: "Dog not found" }
                    }

                    return <OwnersDetail owner={owner} deleteOwner={this.deleteOwner} />
                }}
                />
            </React.Fragment>
        )
    }
}

export default withRouter(ApplicationViews)