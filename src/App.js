import "./App.css";
import Footer from "./components/Footer";
import DayView from "./pages/DayView/DayView";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1 style={{color: 'white'}}>welcome</h1>
      <Outlet />
      {/* <DayView /> */}
      <Footer />
    </div>
  );
}

export default App;
