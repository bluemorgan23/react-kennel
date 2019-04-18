import React, { Component } from 'react'
import "./location.css"
import { Link } from "react-router-dom"

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
