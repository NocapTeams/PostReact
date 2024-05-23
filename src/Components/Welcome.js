import React from "react";

// function Welcome(){
//     return <h1> ! Hello Anil </h1>
// }
//  const Welcome = () => <h1>!12345657889 Anil </h1>

const Welcome = (props) => {
  // console.log(props);
  const { name, lastName } = props;

  return (
    <div>
      <h1>
        Hello {name}__{lastName}
      </h1>
      {/* {props.children} */}
    </div>
  );
};

export default Welcome;
