import React, { Component } from "react"
import EmployeeList from "./employee/EmployeeList"
import LocationList from "./locations/LocationList";

class Kennel extends Component {

    /*
        Although you will eventually be pulling your objects
        from your json-server API, for this chapter, we're
        faking it and just creating those arrays in the component
        itself
    */
    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    // This will eventually get pulled from the API
    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]

    state = {
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI
    }
    // (setState) Way of updating the state object. Forces anything that uses that state in a component to re-render the component. Accepts an object.
    // addEmployee = () => {
    //     let newEmployee = {id: 324, name: "Bubba Sparkle"}
    //     let employeeList = this.state.employees
    //     this.setState({employees: employeeList.push(newEmployee)});
    // }

    render() {
        return (
            <React.Fragment>
                <article className="kennel">
                    <h1>Student Kennels</h1>
                    <LocationList locations={this.state.locations} />
                    <EmployeeList employees={this.state.employees} />
                    {/* <button onClick={this.addEmployee}>Add Employee</button> */}
                </article>
            </React.Fragment>
        )
    }
}

export default Kennel


