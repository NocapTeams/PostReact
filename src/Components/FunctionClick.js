import React from 'react'

function FunctionClick() {

    function showMassege(){
        console.log("Btn Click Function")
    }

  return (
    <div>
        <button onClick={showMassege}> Click </button>
      
    </div>
  )
}

export default FunctionClick
