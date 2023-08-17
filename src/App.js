import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import WeekView from "./pages/WeekView/WeekView";
// import DayView from "./pages/DayView/DayView";
import ChangeView from "./components/ChangeView";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
    <div className="App">
      <Header />
      {/* <WeekView />
      <DayView /> */}
      <ChangeView />
      <Outlet />
      <Footer />
    </div>
    </>
  );
}

export default App;
