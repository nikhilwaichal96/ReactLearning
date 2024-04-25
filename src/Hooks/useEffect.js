import React,{useEffect,useState} from "react";

export default function UseEffectExample() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    },[count]);

    return (
        <div>
            <h1>useEffect</h1>
            <p>This is useEffect page. Created using functional component</p>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}