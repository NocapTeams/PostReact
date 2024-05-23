import React from "react";
import Person from "./Person";


function NameList() {
 // const names = ["anil", "Sheena", "revi"];
  //const nameList = names.map((names) => <h2>{names}</h2>);

  const person = [
    {
      id: 1,
      age: 30,
      location: "Delhi",
      fullName: "Anil Kumar",
    },
    {
      id: 2, 
      age: 18,
      location: "Delhi",
      fullName: "Sheena",
    },
    {
      id: 3,
      age: 23,
      location: "Haryan",
      fullName: "Kumar",
    },
  ];

  const personList =person.map(person => <Person key={person.fullName} person={person}></Person>)

  return <div>{personList}</div>;
}

export default NameList;
