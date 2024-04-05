import { useCallback,/*  useEffect, */ useState, useRef } from "react";
import '../styles/App.css';
function App() {
  // const [length,setLength]=useState(8);
  const [length,setLength]=useState(8);
  const [password,setPassword]=useState("");
  const [isNumber,setIsNumber]=useState(false);
  const [isCharacter,setIsCharacter]=useState(false);

  //ref hook
  const passwordRef=useRef(null);
 
  const passwordgenerator=useCallback(()=>{
          let pass="";
          let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
          let number="0123456789";
          let character="~!@#$%^_-\\&";
          if(isNumber)  str+=number;
          if(isCharacter)  str+=character;
          let char;

          for(let i=0;i<length;i++)
          {
            char=Math.floor(Math.random()*str.length+1);
            console.log(char);
            pass+=str[char];
          }
          setPassword(pass);
  },[length,isNumber,isCharacter,setPassword]);

  const copyClipboard=useCallback(()=>{
    passwordRef.current?.select();
      window.navigator.clipboard.writeText(password);
  },[password])
  
  // useEffect(()=>{passwordgenerator},[length,isNumber,isCharacter,passwordgenerator])
  return (
    <>
     <div className="main w-1/2 h-84 min-w-min min-h-min text-center text-white p-2 justify-center align-middle my-auto mx-auto  inset-x-0 fixed  flex-column gap-6 top-10 bg-black rounded-xl">
            <h1 className="text-4xl m-8 text-center">Password Generator</h1>
            <div className="passwordgenerator m-auto justify-center flex">
                <input id="password" placeholder="Password" className='h-12 text-black w-4/5 px-2 text-xl font-bold outline-none  rounded-s-md' type="text"  value={password} ref={passwordRef} readOnly/>
                <button type="button" className="w-1/6 text-2xl h-12 flex justify-center text-black align-middle text-center p-2 bg-blue-400 active:bg-blue-800 active:font-green rounded-e-md" onClick={copyClipboard}>Copy</button>
            </div>
            <div className="buttonControllers my-8 text-2xl flex-end mx-10 justify-start text-center flex  gap-8" >
               <label className="text-center flex justify-center gap-2 flex-wrap" htmlFor="length">
                <input type="range" id="length" onChange={(e)=>{
                  setLength(e.target.value);
                }} value={length} min={1} max={32} />
                Length ({length}) 
               </label>
               <label className="text-center flex justify-center gap-2 flex-wrap" htmlFor="number">
                <input id="number" className='' type="checkbox" value={isNumber} defaultChecked={isNumber} onChange={()=>{
                  setIsNumber((prevValue)=>!prevValue)
                  console.log("IsNumber :",isNumber);
                }} />
                    Number
               </label>
               <label className="text-center flex justify-center gap-2 flex-wrap" htmlFor="character">
                <input id="character" type="checkbox" value={isCharacter} defaultChecked={isCharacter} onChange={()=>{
                  setIsCharacter((prevValue)=>!prevValue)
                  console.log("IsCharacter:", isCharacter);
                }} />
                Character
               </label>
            </div>
           <div className="generateButton  my-4 p-2">
           <button type="button" className="bg-white rounded-md w-auto px-4 py-1 text-2xl  text-black border-1 p-2 border-white  active:bg-green-500 active:text-black" onClick={()=>passwordgenerator()}>Generate</button>
           </div>
     </div>
    </>
  )
}
          



export default App;