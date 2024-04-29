import { useState } from 'react'
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [inputAmount, setInputAmount] = useState(0);
  const [outputAmount, setOutputAmount] = useState(0);
  
  let exchangeData = useCurrencyInfo(from);
  const options = Object.keys(exchangeData);

  console.log("app: ", inputAmount);
  console.log("input currency is ", from);

  function convertCurrency(){
    setOutputAmount(inputAmount*exchangeData[to]);
  }
  function swap(){
    const temp = from;
    setFrom(to);
    setTo(temp);
  }


  return (
    <div>
      <div className="container rounded-lg bg-gray-500 p-5 m-3">
        <InputBox
        label = "From"
        currency = {from}
        setCurrency = {setFrom}
        amount = {inputAmount}
        setAmount = {setInputAmount}
        options = {options}


         />
      </div>
      <div className="container rounded-lg bg-gray-500 p-5 m-3">
        <InputBox
        label = "To"
        currency = {to}
        setCurrency={setTo}
        amount = {outputAmount}
        setAmount={setOutputAmount}
        options = {options}
        
         />
      </div>
      <div>
      <button
      onClick={convertCurrency} 
      className="bg-blue-500 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
        Convert
      </button>
      <button
      onClick={swap} 
      className="bg-blue-500 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
        Swap
      </button>


      </div>

    </div>
  )
}

export default App
