import "./App.css";
import { AllRoutes } from "./component/AllRoutes";
import { Navbar } from "./component/Navbar";

function App() {
  return (
    <>
      <h1 className="text-xl font-bold text-grey">
        {/* Hello Tailwind with react vite */}
        <Navbar />
        <AllRoutes />
      </h1>
    </>
  );
}

export default App;
