import { useCallback, useEffect, useState, useRef } from 'react'
import viteLogo from '/vite.svg'

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const passwordRef = useRef(null);

  // using useCallback hook to memoize the function
  // useCallback hook doen not run the function whenever any of its dependencies change, 
  //it only changes the function that is stored in the memory when its dependencies change.
  const generatePassword = useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+="0123456789";
    if(charAllowed) str+="!@#$%^&*()_<>?}{|:";
    for(let i=0;i<length;i++){
      let r= Math.floor(Math.random()*str.length);
      pass+=str.charAt(r);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  let copyPasswordToClipboard = () =>{
    window.navigator.clipboard.writeText(password);
    passwordRef.current.select();
  }


  useEffect(()=>{
    generatePassword();
  }, [length, numberAllowed, charAllowed]);



  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg *
    px-4 py-3 my-8 bg-gray-700 text-white'>
      <h1 className='text-3xl font-bold mb-2 text-center'>Password Generator</h1>
      <div className=' flex shadow  rounded-lg overflow-hidden mb-4'>
        <input type="text" placeholder='Password' value={password} className='outline-none w-full text-black py-1 px-3'
        ref={passwordRef}/>
        <button className="bg-blue-500 hover:bg-blue-700 active:bg-blue-900 focus:outline-none rounded transition-colors duration-300 text-white px-3" onClick={copyPasswordToClipboard}>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" min="0" max="100" value={length}
          className='cursor-pointer'
          onChange={((e)=> setLength(e.target.value))}
          
           />
           <label htmlFor="length">Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          defaultChecked={numberAllowed}
          className='cursor-pointer'
          onChange={(()=> setNumberAllowed((prev) => !prev))}
           />
           <label htmlFor="number">Number</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          defaultChecked={charAllowed}
          className='cursor-pointer'
          onChange={(()=> setCharAllowed((prev) => !prev))}
           />
           <label htmlFor="character">Character</label>
        </div>
      </div>
    </div>
  )
}

export default App
