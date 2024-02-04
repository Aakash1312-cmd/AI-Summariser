import Hero from "./components/Hero";
import Demo from "./components/Demo";

import "./App.css";

const App = () => {
  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-b from-cyan-100 to-blue-300">
      <div className="flex flex-col items-center bg-cy">
        <Hero />
        <Demo />
      </div>
    </div>
    // <main>
    //   <div className="main">
    //     <div className="gradient" />
    //   </div>

    //   <div className="app">
    //     <Hero />
    //     <Demo />
    //   </div>
    // </main>
  );
};

export default App;
