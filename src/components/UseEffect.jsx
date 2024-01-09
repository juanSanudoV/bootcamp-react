import React,{useEffect,useState} from 'react';


// Use setTimeout() to count 1 second after initial render:
// const UseEffect = () => {
//     const [count, setCount] = useState(0);

//      useEffect(()=>{
//        setTimeout(()=>{
//            setCount((count)=> count + 1);
//        },1000)
//      });
   
    
//      return <h1>I've rendered {count} times!</h1>;
// }

// only run the effect on the initial render

// const UseEffect = () => {
//     const [count, setCount] = useState(0);
// useEffect(()=>{
//         setTimeout(()=>{
//             setCount((count)=> count + 1);

//         },1000);
//     },[]); // add empty brackets here

//     return <h1> I've rendered {count} times!</h1>
// }



// const UseEffect = () => {
//     const [count, setCount] =  useState(0);
//     const [calculation, setCalculation] =  useState(0);
    
//     useEffect (()=>{
//         setCalculation(()=> count * 2);
//     },[count]) // add the count variable here
//   return (
//     <div>
//         <p>Count: {count}</p>
//         <button onClick={()=> setCount((c)=> c + 1)}>+</button>
//         <p>Calculation: {calculation}</p>
//     </div>
//   )
// }
 
 const UseEffect = () => {
     const [count, setCount] = useState(0);
      
     useEffect(()=>{
         let timer = setTimeout(()=>{
             setCount((count)=> count + 1);
         },1000);

    return () => clearTimeout(timer) 
    
    },[])
   return (
     <div>
         <h1>I've rendered {count} times!</h1>;
     </div>
   )
 }
 


export default UseEffect