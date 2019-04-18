import React, { Component } from 'react'
import "./location.css"
import { Link } from "react-router-dom"
import EmployeeCard from "../employee/EmployeeCard"

export default class LocationList extends Component {
    render(){
        return (
            <div className="content">
                <h2 className="section-header">Location List</h2>
                <div className="locationWrapper">
                <section className="locationCard">
                        {
                            this.props.locations.map(location => 
                                <div className="card"key={location.id}>
                                    <h5 className="card-title">{location.name}</h5>
                                    {
                                        this.props.employees.filter(employee => employee.locationId === location.id).map(employee => <EmployeeCard key={employee.id} employee={employee} {...this.props} />
                                        )
                                    }
                                    <Link className="nav-link" to={`/locations/${location.id}`}>Details</Link>
                                    {/* <p className="card-text">{location.address}</p> */}
                                </div>
                                )
                        }
                    </section>
                </div>
            </div>

        );
    }
}
