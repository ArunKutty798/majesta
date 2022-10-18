import "./App.css";
import { Routes, Route } from "react-router-dom";
import Retail from "./pages/retail/retail";
import Online from "./pages/online/online";
import Header from "./components/header/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/retail" element={<Retail />}></Route>
        <Route path="/online" element={<Online />}></Route>
      </Routes>
    </div>
  );
}

export default App;
