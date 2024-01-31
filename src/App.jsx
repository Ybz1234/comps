import { Component } from 'react'
import './App.css'
import CCinputs from './ClassComps/CCInputs'
import CCList from './ClassComps/CCList'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      people: []
    }
  }

  getPersonFromChild = (person) => {
    let newPeople = [...this.state.people, person];
    this.setState({ people: newPeople });
  }

  getUpdatedListFromChild = (updatedPeople) => {
    this.setState({ people: updatedPeople });
  }

  render() {
    console.log(this.state.people);
    return (
      <>
        <h1>Hello everyone</h1>
        <div className="card">
          <CCinputs sendPersonToParent={this.getPersonFromChild} />
          <CCList people={this.state.people} sendUpdatedListToParent={this.getUpdatedListFromChild}/>
        </div>
      </>
    );
  }
}

export default App
