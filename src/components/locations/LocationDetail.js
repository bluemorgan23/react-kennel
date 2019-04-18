import React, { Component } from "react"

class LocationDetail extends Component {
    state = {
        saveDisabled: false
    }

    render() {
        return (
            <section className="locations content">
                <div className="card" key={this.props.location.id}>
                    <h4 className="card-title">{this.props.location.name}</h4>
                    <h6>{this.props.location.address}</h6>
                </div>
            </section>
        )
    }
}

export default LocationDetail