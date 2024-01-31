import { Component } from "react";

export default class CCList extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    btnDeletePerson = (e) => {
        let personIdToDelete = e.target.dataset.personid;
        let updatedPeople = this.props.people.filter(per => per.id !== personIdToDelete);
        this.props.sendUpdatedListToParent(updatedPeople);
    }

    render() {
        return (
            <>
                {this.props.people.map(per => (
                    <div key={per.id} data-personid={per.id} onClick={this.btnDeletePerson}>
                        Name: {per.name}, id: {per.id}
                    </div>
                ))}
            </>
        );
    }
}