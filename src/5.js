import './App.css';
import {useContext} from 'react';
import {FirstName,LastName} from './App'
function App() {
    const fname=useContext(FirstName) ;
    const lname=useContext(LastName);
  return (
    <div>
      <h1>My Name is {fname} {lname}</h1>
    </div>
  );
}

export default App;
