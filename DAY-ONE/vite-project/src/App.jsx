import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./component/Card";
import Header from "./component/Header";
import Hero from "./component/Hero";
import { Button } from "./components/ui/button.tsx"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "./components/ui/navigation-menu.tsx"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
      <Hero/>
      <Header/>

      <div className="flex gap-4">

    <Card title="Chrishmas tree" imgUrl="https://images.pexels.com/photos/6129284/pexels-photo-6129284.jpeg"/>
    <Card title="Santa" imgUrl="https://images.pexels.com/photos/35216105/pexels-photo-35216105.jpeg"/>
    <Card title="banta" imgUrl="https://images.pexels.com/photos/35216105/pexels-photo-35216105.jpeg"/>
      </div>
    <div className="flex justify-center items-center">


      <Button variant={"outline"}>click me</Button>
    </div>

      
    </>
  );
}

export default App;
