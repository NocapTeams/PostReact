import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Welcome from "./Components/Welcome";
import Sheena from "./Components/Sheena";
import Hello from "./Components/Hello";
import Message from "./Components/Message";
import Counter from "./Components/Counter";
import FunctionClick from "./Components/FunctionClick";
import ClassClick from "./Components/ClassClick";
import EventBind from "./Components/EventBind";
import ParentComponents from "./Components/ParentComponents";
import UserGreeting from "./Components/UserGreeting";
import NameList from "./Components/NameList";

function App() {
  return (
    <div className="App">
      {/* <FunctionClick></FunctionClick>

      <ClassClick></ClassClick> */}

      {/* <EventBind></EventBind> */}
      {/* <ParentComponents></ParentComponents>
 */}
<NameList></NameList>
<UserGreeting></UserGreeting>
      {/* <Welcome name="ANil" lastName="Kumar"></Welcome>
      <Sheena name="Naveen" lastName="!"/> */}
      {/* <Welcome />
      <Sheena /> */}
      {/* <Welcome name="ANil" lastName="Kumar">
        <p> This User Create First Projest !!</p>
      </Welcome>
      <Welcome name="Rakesh" lastName="Yadav">
         <button>Action</button>
      </Welcome>
      <Welcome name="Sheena" lastName="___OOPS!"/>
      <hr></hr>

      <Sheena name="Naveen" lastName="!"/>
      <Sheena name="Sachin" lastName="!"/>
      <Sheena name="Sheena" lastName="___OOPS!"/> */}
      {/* <Message></Message> */}
    </div>
  );
}

export default App;
