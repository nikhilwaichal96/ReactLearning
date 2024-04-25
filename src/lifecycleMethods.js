/**
 * What is lifecycle methods in React?
 * Lifecycle methods are methods that get called at different stages of a component's life.
 * 
 * 1.Constructor is called
 * 2.Render is called
 * 3.ComponentDidMount is called
 * 4.ComponentDidUpdate is called
 * 5.ComponentWillUnmount is called
 * 
 * Phases of lifecycle methods in React?
 * 1.Mounting: When an instance of a component is being created and inserted into the DOM.
 * 2.Updating: When a component is being re-rendered as a result of changes to either its props or state.
 * 3.Unmounting: When a component is being removed from the DOM.
 * 
 * Examples
 * 
 * Importance of lifecycle methods in React?
 * Lifecycle methods are used to perform actions at different stages of a component's life.
 * They are used to initialize state, fetch data, update the DOM, and clean up resources.
 *  
 * 
 */

import React from "react";

export default class LifecycleMethods extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        console.log('Constructor is called');
    }
    updateState() {
        this.setState({
            count: this.state.count + 1
        });
    }

    /**
     * componentDidMount is called after the component is rendered.
     */
    componentDidMount() {
        console.log('ComponentDidMount is called');
    }
    componentDidUpdate() {
        console.log('ComponentDidUpdate is called');
    }
    componentWillUnmount() {
        console.log('ComponentWillUnmount is called');
    }
    render() {
        console.log('Render is called');
        return (
            <div>
                <h1>LifecycleMethods</h1>
                <p>This is LifecycleMethods page. Created using class component</p>
                <li>Count {this.state.count}</li>
                <button onClick={() => { this.updateState() }}>Update</button>
            </div>
        );
    }
}
