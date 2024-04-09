import logo from './logo.svg';
import './App.css';
import Home from './home'
import Profile from './profile';
import State from './State';
import EventHandler from './EventHandler';
import EventHandlerFunction from './EventHandler';
let name = 'Nikhil Waichal';
function App() {
  return (
    <div className="App">
      <h5>Learn React with {name}</h5>

      <li className="React">React</li>
      <li className="JS">JS</li>
      <li className="A">app</li>
      <li className="B ">book</li>

      {/* <Home text='Nikhil Waichal' data={{ name: 'Nikhil Waichal', age: 27, Occupation: 'Job' }} />
      <Profile text='Nikhil Waichal' data={{ name: 'Nikhil Waichal', age: 27, Occupation: 'Job' }} />
      <State> </State> */}
      {/* <EventHandler></EventHandler> */}
      <EventHandlerFunction></EventHandlerFunction>
    </div>
  );
}

export default App;
