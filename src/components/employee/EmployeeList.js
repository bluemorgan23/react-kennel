import React, { Component } from 'react'
import "./employee.css"
// import { Link } from "react-router-dom"
// import AnimalCard from "../animals/AnimalCard"
import EmployeeCard from './EmployeeCard';

class EmployeeList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="employeeButton">
                    <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("/employees/new")}
                            }>
                        Add Employee
                    </button>
                </div>
                <section className="employees content">
                {
                this.props.employees.map(employee =>
                    <EmployeeCard key={employee.id} employee={employee} {...this.props} animals={this.props.animals}/>
                )
            }
                </section>
            </React.Fragment>
        )
    }
}

export default EmployeeList