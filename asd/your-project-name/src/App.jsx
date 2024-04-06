import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/layout";
import Routing from "./Routes";
import Dashboard from "./dashboard";
import { Info } from "./Info";

function App() {
  return (
    <div className="w-100 h-auto">
      <div></div>
      <div className="">
        <BrowserRouter>
          {<Layout></Layout>}
          <Routing />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
