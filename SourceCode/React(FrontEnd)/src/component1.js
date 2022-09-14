import React, { Component } from "react";

class Component1 extends Component {
    constructor() {
        super();
        this.state = { data: null, flag: false }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id1) {
        fetch('https://reqres.in/api/users/' + id1)
            .then(response => response.json())
            .then((resdata) => {
                this.setState({ data: resdata, flag: true });
                console.log(this.state.data)
            });
    }
    render() {
        return (
            <div>
                <center>
                    <p>Select ID</p>
                    <select onChange={(e) => { this.handleChange(e.target.value) }}>
                        <option value="Select one">Select one-</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                    {this.state.flag && <p>{this.state.data.data.first_name} {this.state.data.data.last_name}</p>}
                </center>
            </div>

        )
    }
}

export default Component1
