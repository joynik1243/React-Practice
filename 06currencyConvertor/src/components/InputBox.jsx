import React from 'react'

function InputBox({
    label,
    currency,
    setCurrency,
    amount=0,
    setAmount,
    options,

}) {
    // console.log(amount);
    return (
    <div className="flex justify-between w-full">

      <div className="w-1/2 mr-2">
        <label htmlFor="numericInput" className="block mb-2"> {label}</label>
    
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} id="numericInput" className="w-full border border-gray-300 rounded-md py-2 px-4" />
      </div>
      

      <div className="w-1/2 ml-2">
      <label htmlFor="options" className="block mb-2">Currency Type</label>
      <select id="options" onChange = {(e)=> setCurrency(e.target.value)} value={currency} className="w-full border border-gray-300 rounded-md py-2 px-4">
        {options.map((option, index) => (
           <option key={index} value={option}>{option}</option>
         ))}
      </select>
      </div>
    </div>
    )
}

export default InputBox
