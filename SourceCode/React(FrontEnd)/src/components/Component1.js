import { Component } from "react";

export default class Component1 extends Component {
    state = {
        selected: "",
    };
    render() {
        return (
            <div>
                <select
                    onChange={(e) => {
                        this.setState((this.selected = e.target.value));
                    }}
                >
                    <option value="Mumbai">Mumbai</option>
                    <option value="Pune">Pune</option>
                    <option value="Jaipur">Jaipur</option>
                    <option value="Karad">Karad</option>
                    <option value="Navi Mumbai">Navi Mumbai</option>
                </select>
            </div>
        );
    }
}
