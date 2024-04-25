import logo from './logo.svg';
import './App.css';
import Home from './home'
import Profile from './profile';
import State from './State';
import EventHandler from './EventHandler';
import EventHandlerFunction from './EventHandler';
import LifecycleMethods from './lifecycleMethods';
let name = 'Nikhil Waichal';
function App() {
  return (
    <div className="App">


      {/* <li className="React">React</li>
      <li className="JS">JS</li>
      <li className="A">app</li>
      <li className="B ">book</li> */}

      {/* <Home text='Nikhil Waichal' data={{ name: 'Nikhil Waichal', age: 27, Occupation: 'Job' }} />
      <Profile text='Nikhil Waichal' data={{ name: 'Nikhil Waichal', age: 27, Occupation: 'Job' }} />
      <State> </State> */}
      {/* <EventHandler></EventHandler> */}
      {/* <EventHandlerFunction></EventHandlerFunction> */}
      <p ><LifecycleMethods ></LifecycleMethods></p>

    </div>
  );
}

export default App;
