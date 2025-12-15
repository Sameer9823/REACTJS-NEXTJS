import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-4xl text-red-500 border-2 border-blue-400">
        Learn react with sameer
      </h1>

      <div className="max-w-sm bg-white border border-gray-200 rounded-xl mt-8 shadow overflow-hidden transition-shadow ">
        <img src="https://images.pexels.com/photos/6129284/pexels-photo-6129284.jpeg" alt="img" className="w-full h-56 object-cover"/>
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800">Christmas Tree</h2>
          <p className="text-gray-600 mt-2 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam numquam voluptates suscipit recusandae quis. Dolores.</p>
          <button className="mt-4 px-4">Buy it</button>
        </div>

      </div>
    </>
  );
}

export default App;
