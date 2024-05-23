import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {

   return this.state.isLoggedIn && <div>anil</div>

   // return this.state.isLoggedIn ? <div>Sheena</div> : <div>Raveena</div>;

    // let message
    // if (this.state.isLoggedIn) {
    //    message= <div>ANil</div>
    // }
    // else{
    //    message= <div>Ravi</div>

    // }
    // return <div>{message}</div>

    // return (
    //   <div>
    //     Welcome Anil
    //   </div>
    // )
  }
}

export default UserGreeting;
