import React, { Component } from 'react'

class AnimalList extends Component {
    render() {
        return (
            <section className="content">
            <h2>Animal List</h2>
            {
                this.props.animals.map(animal => 
                    <div key={animal.id}>
                       <p>{animal.name}</p>
                    </div>
                )
            }
            </section>
        )
    }
}

export default AnimalList