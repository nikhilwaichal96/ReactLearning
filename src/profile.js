import React from "react";
/*
What is Functional (Stateless) component?
Functional component is a JavaScript function that returns React elements.
It is used to create elements.

What are useage of Functional (Stateless) component?    
1. It is used to create elements.
2. It is used to create reusable elements.      
3. It is used to create elements that don't have states.
4. It is used to create elements that don't have lifecycle methods.
5. It is used to create elements that don't have props.
6. It is used to create elements that don't have refs.

We cant use stat in functional component but we can use hooks to use states in functional component.

What are the advantages of Functional (Stateless) component?
1. They are simple and easy to understand.
2. They are easy to test.
3. No this keyword. or bind(this) required.
4. Very less code.
5. Very less boilerplate code.

What is props in React?
Props is short for properties. 
It is used to pass data from one component to another component.
It is like function arguments in JavaScript. 
It is like HTML attributes in HTML.
props cannot be changed or modified by the component that receives them.
props are immutable.

Why use props in React?
Props is used to pass data from one component to another component.


What us the advantage of props in React?
1. It makes the code reusable.
2. It makes the code modular.
3. It makes the code maintainable.
  

What is state in React?
State is a built-in object in React that is used to hold data.
State is a internal object of Class component and it is private to the component. 
It is not accessible to other components.
It is like variables in JavaScript.
We can use to store data that can be changed or updated and use it based on requirement.


*/
export default function Profile(prop) {
    const sayHello = () => {
        alert('Hello '+prop.text);
    };
    return (
        <div>
            <h1>Profile</h1>
            <button onClick={sayHello}>Say Hello {prop.text}</button>
            <p>This is Profile page. Created using functional component</p>
            <p>
                <li>{prop.data.name}</li>
                <li>{prop.data.age}</li>
                <li>{prop.data.Occupation}</li>
            </p>
        </div>
    );
}