/**
 * What are react hooks?
 * We cant use state and lifecycle methods in functional component. To use state in functional component we use react hooks.
 * React hooks are functions that let you use state and other React features in functional components.
 * React hooks are introduced in React 16.8.
 * React hooks are used to add state and lifecycle methods to functional components.
 * 
 * 
 * Rules for using React hooks:
 * 1. Only call hooks at the top level.
 * 2. Only call hooks from React functions.
 * 3. Don't call hooks inside loops, conditions, or nested functions.
 * 
 * How to use react hooks?
 *  We use useState() hook to add state to functional component.
 *  We use useEffect() hook to add lifecycle methods to functional component.
 *  We use useContext() hook to add context to functional component.
 *  We use useReducer() hook to add reducer to functional component.
 *  We use useRef() hook to add reference to functional component.
 *  We use useMemo() hook to add memoization to functional component.
 *  We use useCallback() hook to add callback to functional component.
 * 
 *  It allows React developers to update, handle and manipulate state inside functional components without converting into class component. 
 *          
 * 
 *  React useState() hook:
 *  React useState() hook is used to add state to functional component.
 *  useState() hook returns an array with two elements.
 *  The first element is the current state value.
 *  The second element is a function that lets you update the state.
 *  const [color, setColor] = useState("red");
 * 
 *  React useEffect() hook:
 *  React useEffect() hook is used to add lifecycle methods to functional component.
 *  useEffect() hook runs after every render of the component.
 *  useEffect is replacement for componentDidMount, componentDidUpdate and componentWillUnmount lifecycle methods.
 *  useEffect() hook takes two arguments. useEffect(<function>, <dependency>)
 *  The first argument is a function that runs after the component renders.
 *  The second argument is an array of dependencies.
 *  If we dont pass second argument, useEffect() hook runs after every render of the component.
 *  If we pass second argument as empty array, useEffect() hook runs only once after the component renders.
 *  If we pass second argument as a variable, useEffect() hook runs only when the variable changes. 
 *   
 *  useEffect use is to perform side effects in your functional components.
 *  useEffect is also used to cleanup after your component.
 *  useEffect is used when component is loaded or updated.      
 * 
 * 
 * 
 * What is ref in react?
 *  Ref is short for reference.
 * Ref is used to access the DOM element in react.
 * 
 *  
 * When to use ref in react?
 * 
 * When not to use ref in react?
 * 
 *
 * 
 * 
 * 
 * 
 * How to test hooks in react?
 */

import React, { useState } from 'react';

export default function Hooks() {
    const [color, setColor] = useState("red");
    return (
        <>
        <h1>My favorite color is {color}!</h1>
        <button
          type="button"
          onClick={() => setColor("blue")}
        >Blue</button>
        <button
          type="button"
          onClick={() => setColor("red")}
        >Red</button>
        <button
          type="button"
          onClick={() => setColor("pink")}
        >Pink</button>
        <button
          type="button"
          onClick={() => setColor("green")}
        >Green</button>

       
      </>
    );
}
