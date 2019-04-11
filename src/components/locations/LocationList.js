import React, { Component } from 'react'
import "./location.css"

export default class LocationList extends Component {
    render(){
        return (
                <div className="locationWrapper">
                <section className="locationCard">
                <h1>Location List</h1>
                        {
                            this.props.locations.map(location => 
                                <div key={location.id}>
                                    <h4>{location.name}</h4>
                                    <p>{location.address}</p>
                                </div>
                                )
                        }
                    </section>
                </div>

        );
    }
}
