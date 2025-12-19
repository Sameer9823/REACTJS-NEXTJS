import React, { forwardRef, useRef } from 'react'


const CustomInput = forwardRef(({label, placeholder, className}, ref) => {
  return (
    <div className="mb-8">
      <label className="block mb-2 font-medium text-gray-700">{label}</label>
      <input
        ref={ref}
        type="text"
        placeholder={placeholder}
        className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 ${className}`}
      />
    </div>
  )
});

CustomInput.displayName = "CustomInput";

function RefProps() {

  const inputRef = useRef(null);
  const secondRef = useRef(null);

  const focusInput = () =>{
    inputRef.current?.focus();

  }
  const getInputValue = () =>{
    if(inputRef.current){
      alert(`Input Value: ${inputRef.current.value}`);
    }
  }
  const clearInput = () =>{
    if(inputRef.current || secondRef.current){
      inputRef.current.value = '';
      inputRef.current.focus();
      secondRef.current.value = '';
      secondRef.current.focus();

    }
    
  }
  const focusSecondInput = () =>{
    secondRef.current?.focus();
  }
  
  return (
    <section className='p-8 bg-white rounded-xl shadow-lg'>
      <h2 className="text-2xl font-bold mb-6">Ref Props Example</h2>
      <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur ducimus hic neque aliquid sunt? Aliquam!</p>
      <div>
        <div>
          <h3>Try it out</h3>
          <CustomInput
            ref={inputRef}
            label="Name"
            placeholder="Enter your name"
          />
          <CustomInput
            ref={secondRef}
            label="Email"
            placeholder="Enter your email"
          />
          <div className="flex gap-4">
            <button
              onClick={focusInput}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-all duration-200 ease-in-out" 
            >
              Focus Name Input
            </button>
            <button
              onClick={focusSecondInput}
              className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-500 transition-all duration-200 ease-in-out"
            >
              Focus Email Input
            </button>
            <button
              onClick={getInputValue}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500 transition-all duration-200 ease-in-out"
            >
              Get Name Input Value
            </button>
            <button
              onClick={clearInput}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-500 transition-all duration-200 ease-in-out"
            > 
              Clear Name Input
            </button>
            
          </div>
        </div>
      </div>

    </section>
  )
}

export default RefProps