import React from "react";

function ChildComponents(props) {
  return (
    <div>
      <button onClick={() => props.greetHandler("Child")}>
        Grent Parent
      </button>
    </div>
  );
}

export default ChildComponents;
