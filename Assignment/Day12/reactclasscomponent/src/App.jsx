import { Component } from "react";
import Navbar from "./components/Navbar";
import './App.css'
import Content from "./components/Content";
import Theory from "./components/Theory";

class App extends Component{
   constructor(){
     super()
   }
   render(){
     return(
      <>
     <Navbar/>
     <Content/>
     <Theory/>
      </>
     )
   }
}

export default App