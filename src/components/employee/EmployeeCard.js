import React, { Component } from "react"
import AnimalCard from "../animals/AnimalCard"

export default class EmployeeCard extends Component {
    render() {
        return (
            <div key={this.props.employee.id} className="card card--employee">
                        <div className="card-body">
                            <h5 className="card-title">
                                {/* <img src={person} className="icon--employee" /> */}
                                {this.props.employee.name}
                            <a href="#" 
                                onClick={() => this.props.deleteEmployee(this.props.employee.id)}
                                className="card-link">Delete</a>
                            </h5>

                            <h6 className="card-subtitle mb-2 text-muted">Caretaker For</h6>
                            <div className="animals--caretaker">
                            {
                                this.props.animals
                                    .filter(anml => anml.employeeId === this.props.employee.id)
                                    .map(anml => <AnimalCard key={anml.id} animal={anml} {...this.props} deleteAnimal={this.props.deleteAnimal}/>)
                            }
                            </div>

                        </div>
                    </div>
        )
    }
}