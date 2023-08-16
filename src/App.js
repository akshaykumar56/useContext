import './App.css';
import {createContext} from 'react';
import ComA from './1'
import ComD from './4'
const FirstName = createContext();
const LastName = createContext();
function App() {
  
  return (
    <div >
     <FirstName.Provider value={"Palsra"}>
     <LastName.Provider value={"Akshay"}>
     <ComA/>
     </LastName.Provider>
     </FirstName.Provider>
     <ComD/>
    </div>
  );
}

export default App;
export {FirstName,LastName};
