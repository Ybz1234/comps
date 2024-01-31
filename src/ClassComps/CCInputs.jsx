import { Component } from "react";

export default class CCinputs extends Component {

    constructor(props) {
        super(props)
        this.state = { name: "", id: "" }
    }

    btnSendPerson = () => {
        let person = { name: this.state.name, id: this.state.id };
        this.props.sendPersonToParent(person);
    }

    render() {
        return (
            <>
                <span>Name:</span>
                <input type="text" placeholder="Enter your name" onChange={(e) => this.setState({ name: e.target.value })} /> <br />
                <span>Id:</span>
                <input type="text" placeholder="Enter your id" onChange={(e) => this.setState({ id: e.target.value })} /> <br />
                <button onClick={this.btnSendPerson}>Add person</button>
            </>
        );
    }
}