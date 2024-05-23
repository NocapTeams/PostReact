import React from "react";

const Hello =() =>{
    // return(
    //     <div>
    //         <h1>
    //             Hello Anil 
    //         </h1>
    //     </div>
    // )  

    return React.createElement(
        'div',
         {id:'User_ID', className: 'dummyClass'}, 
         React.createElement('h1' ,null,'Hello Test' ) )
}

export default Hello