import React, { Component } from "react"


class OwnersDetail extends Component {
    state = {
        saveDisabled: false
    }

    render() {
        return (
            <section className="content owner">
                <div key={ this.props.owner.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">{this.props.owner.name}</h4>
                        <h6 className="card-text">
                        { this.props.owner.phoneNumber }
                        </h6>
                        <button onClick={
                            () => {
                                this.setState(
                                    {saveDisabled: true},
                                    () => this.props.deleteOwner(this.props.owner.id)
                                )
                            }
                        }
                        disabled={ this.state.saveDisabled }
                        className="card-link">Delete</button>
                    </div>
                </div>

            </section>
        )
    }
}
export default OwnersDetail