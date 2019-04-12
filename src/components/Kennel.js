import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"
// import "./Kennel.css"


class Kennel extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <ApplicationViews />
            </React.Fragment>
        )
    }
}

export default Kennel


// (setState) Way of updating the state object. Forces anything that uses that state in a component to re-render the component. Accepts an object.
    // addEmployee = () => {
    //     let newEmployee = {id: 324, name: "Bubba Sparkle"}
    //     let employeeList = [...this.state.employees]
    //     employeeList.push(newEmployee)
    //     this.setState({employees: employeeList});
    // }