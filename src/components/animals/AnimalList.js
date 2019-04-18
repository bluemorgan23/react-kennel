import React, { Component } from 'react'
import "./animal.css"
import AnimalCard from "./AnimalCard"

class AnimalList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="animalButton">
                    <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("/animals/new")}
                            }>
                        Admit Animal
                    </button>
                </div>
                <section className="content animals">
                {
                    this.props.animals.map(animal =>
                        <AnimalCard key={animal.id} animal={animal} {...this.props} />
                    )
                }
                </section>
            </React.Fragment>
            )
    }
}

export default AnimalList