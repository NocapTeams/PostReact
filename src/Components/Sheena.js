import { Component } from "react";
import React  from "react";

class Sheena extends Component{
     render() {

       const {name, lastName} = this.props
        return (
            <h1>Welcome  {name} as {lastName}

           </h1>
        ) 
     }
}

export default Sheena