import React from "react";
/**
  What is state in React?
    What is state in React?
    State is a built-in object in React that is used to hold data.
    State is a internal object of Class component and it is private to the component. 
    It is not accessible to other components.
    It is like variables in JavaScript.
    We can use to store data that can be changed or updated and use it based on requirement.    
 
  What is use of state in React?
    State is used to store data that can be changed or updated and use it based on requirement.

   Explain setState() in React?    
     setState() is a method that is used to update the state of a component.

 */
export default class  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Nikhil Waichal',
            age: 27,
            Occupation: 'Job',
            count: 0
        }
    }
    updateState(){
        this.setState({
            name: 'Abc Waichal',
            age: 30,
            Occupation: 'Farmer',
            count: this.state.count + 1
        });
    }
    render() {
        return (
            <div>
                <h1>State</h1>
                <p>This is State page. Created using class component</p>
                <li>{this.state.name}</li>
                <li>{this.state.age}</li>
                <li>{this.state.Occupation}</li>
                <button onClick={()=>{this.updateState()}}>Update</button>
                <li>{this.state.name}</li>
                <li>{this.state.age}</li>
                <li>{this.state.Occupation}</li>
                <li>Count {this.state.count}</li>

            </div>
        );
    }
}