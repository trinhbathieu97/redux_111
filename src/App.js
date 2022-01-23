import React from "react"
import './App.css';
import NavBar from "./component/NavBar";
import Todolist from "./component/Todolist";
import {Provider} from "react-redux"
import store from "./component/strore/Store";

function App() {
  return (
    <Provider store={store}>
    <div className="App">  
    <NavBar />
    <Todolist />
    </div>
    </Provider>
  );
}

export default App;
