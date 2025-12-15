import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./component/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-4xl text-red-500 border-2 border-blue-400">
        Learn react with sameer
      </h1>
      <div className="flex gap-4">

    <Card title="Chrishmas tree" imgUrl="https://images.pexels.com/photos/6129284/pexels-photo-6129284.jpeg"/>
    <Card title="Santa" imgUrl="https://images.pexels.com/photos/35216105/pexels-photo-35216105.jpeg"/>
    <Card title="banta" imgUrl="https://images.pexels.com/photos/35216105/pexels-photo-35216105.jpeg"/>
      </div>

      
    </>
  );
}

export default App;
