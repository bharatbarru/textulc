import { useState } from "react";
import React from "react";
function Counter(){

    
       function increment(){
                  setcount(count+1);
                           }

        function reset(){
                  setcount(0);
                            }
        
        function decrement(){
                  setcount(count-1);
                             }
              


    const [count,setcount]=useState(0);

    return(<>
        <p>{count}</p>
        <button type="button" className="btn-primary-btn" onClick={increment}>INCREMENT</button>
        <button type="button" className="btn-primary-btn" onClick={reset}>RESET</button>
        <button type="button" className="btn-primary-btn" onClick={decrement}>DECREMENT</button>
        </>);
}
export default Counter