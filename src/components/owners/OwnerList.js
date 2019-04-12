import React, { Component } from 'react'

class OwnerList extends Component {
    render(){
        return (

            <section className="content">
            <h2>Owner's List</h2>{
                this.props.owners.map(owner => 
                    <div key={owner.id}>
                        <h4>{owner.name}</h4>
                        <p>{owner.phoneNumber}</p>
                    </div>
                    )
            }
            </section>

        )
    }
}

export default OwnerList