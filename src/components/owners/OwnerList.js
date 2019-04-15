import React, { Component } from 'react'
import "./owner.css"

class OwnerList extends Component {
    render(){
        return (

            <section className="owners content">
            {
                this.props.owners.map(owner =>
                    <div key={owner.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                {owner.name}
                                <p>{owner.phoneNumber}</p>
                                <button
                                    onClick={() => this.props.deleteOwner(owner.id)}
                                    className="card-link">Delete</button>
                            </h5>
                        </div>
                    </div>
                )
            }
            </section>

        )
    }
}

export default OwnerList