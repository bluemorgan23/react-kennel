import React, { Component } from 'react'
import "./location.css"

export default class LocationList extends Component {
    render(){
        return (
            <React.Fragment>
                <h1>Location List</h1>
                <div className="locationWrapper">
                    <section className="locationCard">
                        <h4>Nashville North</h4>
                        <p>1233 North Nashville Drive</p>
                        <p>Nashville, TN</p>
                    </section>
                    <section className="locationCard">
                        <h4>Nashville South</h4>
                        <p>6045 Franklin Rd</p>
                        <p>Nashville, TN</p>
                    </section>
                </div>
            </React.Fragment>
        );
    }
}
