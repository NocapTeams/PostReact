import React from 'react'

function Person({person}) {
  return (
    <div>
      <h1>
        I am {person.fullName}, i am old in {person.age} and i am belong to {person.location}
    </h1>
    </div>
  )
}

export default Person
