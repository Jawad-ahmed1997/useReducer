'use client'
import { useReducer } from "react";
 
const initialState={
  count : 0,
  error:null
}
function  reducer(state,action){
   switch (action.type) {
    case "increment":{
      const newCount = state.count + 1
      const hasError = newCount > 5
      
      return {...state,
        count:hasError?state.count:newCount,
        error:hasError?"Maximum reached" : null        
      }
    }
    case "decrement":{
      const newCount = state.count - 1
      const hasError = newCount < 0
      
      return {...state,
        count:hasError?state.count:newCount,
        error:hasError?"minimum reached" : null        
      }
    }
    default:
      return state;
  }
}

export default function Home() {
const [state,dispatch]=useReducer(reducer,initialState)


  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="bg-gray-200 shadow-lg rounded-lg h-2/4 w-2/5 flex justify-start items-center p-5  flex-col">
        <h1 className="text-3xl">Counter app</h1>
        <h1>{state?.count}</h1>
        {state.error && <h3 className="text-red-600">{state.error}</h3>}
        <div className="flex flex-row w-full my-5 items-center justify-center ">
        <button onClick={()=>dispatch({type:"increment"})} className="bg-blue-400 rounded-lg px-5 py-2 -my-2 mx-2">Increament</button>
        <button  onClick={()=>dispatch({type:"decrement"})} className="bg-blue-400 rounded-lg px-5 py-2 -my-2">Decreament</button>
        </div>
        
      </div>
    </div>
  );
}
