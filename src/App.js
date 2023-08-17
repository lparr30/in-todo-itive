import "./App.css";
// import { styled } from "styled-components";
import Header from "./components/Header";
import ChangeView from "./components/ChangeView";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

// const Test = styled.div`
//   width: 100vw;
//   height: 100vh;
//   background-color: red;
// `

function App() {
  return (
    <>
    <div className="App">
      <Header />
      <ChangeView />
      <Outlet />
      {/* <Test /> */}
      <Footer />
    </div>
    </>
  );
}

export default App;
