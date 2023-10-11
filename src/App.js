import "./App.css";
import { styled } from "styled-components";
import Header from "./components/Header";
import ChangeView from "./components/ChangeView";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";



function App() {


  return (
    <>
    <div className="App">
      <Header />
      <ChangeView />
      <Outlet />
      <Footer />
    </div>
    </>
  );
}

export default App;
