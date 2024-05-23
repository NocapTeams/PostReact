import React, { Component } from 'react'

 class ClassClick extends Component {

    clickHandle(){
        console.log('Clicked The Button')
    }

  render() {
    return (
      <div>
        <button onClick={this.clickHandle}>Click Me</button>
      </div>
    )
  }
}

export default ClassClick
