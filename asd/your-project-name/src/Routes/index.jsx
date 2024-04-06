import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../dashboard";
import style from "../dashboard.module.css";
import { Info } from "../Info";
const Routing = () => {
  return (
    <div className={style.width}>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/info" element={<Info />} />
      </Routes>
    </div>
  );
};
export default Routing;
