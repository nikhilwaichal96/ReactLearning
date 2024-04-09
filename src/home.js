import React from "react";

/*
Component is a reusable piece of code that is used to create elements.
There are two types of components in React:
1. Functional Component
2. Class Component

What is Functional (Stateless) component?
Functional component is a JavaScript function that returns React elements.
It is used to create elements.

What is Class (Staeful) component?
    Class component is a ES6 class that extends from React.Component. 
    It has a render method that returns React elements. 
    It has a constructor method that is called when an instance of the component is being created.
    It is used to initialize the component's state. 
    It has lifecycle methods that are called during the lifecycle of the component.
Note: In Class component we can use states but in functional component we can't use states directly for that we have to use hooks.


When to use them?
If you need to use states or lifecycle methods then you should use class component.

What are the advantages of class component? 
1. We can use states.
2. We can use lifecycle methods.
3. We can use props.
4. We can use refs.
5. We can use context.

What are the disadvantages of class component?
1. They are complex and hard to understand.
2. They have a lot of boilerplate code.
3. They are not easy to test.
4. They are not easy to reuse.
5. They are not easy to maintain.
6. They are not easy to read.
7. They are not easy to debug.
8. They are not easy to scale.
9. They are not easy to optimize.
10. They are not easy to refactor.
11. They are not easy to extend.
12. They are not easy to update.
13. They are not easy to share.
14. They are not easy to deploy.

What is Lifecycle of Components?
Lifecycle of Components is a series of methods that are called during the lifecycle of a component.

What are the lifecycle methods of class component?  
Mounting: These methods are called when an instance of the component is being created and inserted into the DOM.
1. constructor() : It is called when an instance of the component is being created.
2. static getDerivedStateFromProps() : It is called before every render method.
3. render() : It is called to render the component.
4. componentDidMount() : It is called after the component is mounted.
The render() method is required and will always be called, the others are optional and will be called if you define them.

Updating: These methods are called when a component is being re-rendered as a result of changes to either its props or state.
1. static getDerivedStateFromProps() : It is called before every render method.
2. shouldComponentUpdate() : It is called before the component is updated.
3. getSnapshotBeforeUpdate() : It is called before the component is updated.
4. componentDidUpdate() : It is called after the component is updated.

Unmounting: This method is called when a component is being removed from the DOM.
8. componentWillUnmount() : It is called before the component is unmounted.
9. componentDidCatch() : It is called when an error occurs during rendering.
10. static getDerivedStateFromError() : It is called when an error occurs during rendering.

Example of class componet

*/
export default class Home extends React.Component {
    constructor() {
        super();
    
    }
    
    componentDidMount() {
        console.log('componentDidMount method is called');
    
    }

    render() {
        return (
            <div>
                <h4>Home Page</h4>
                <p>This is profile page created using class component</p>
                <li>{this.props.text}</li>
                <li>{this.props.data.name}</li>
                <li>{this.props.data.age}</li>
                <li>{this.props.data.Occupation}</li>
            </div>
        );
    }
}