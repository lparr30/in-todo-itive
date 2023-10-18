import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import dots from "../assets/dots.png";
import { useState } from "react";

const ShowMenuContainer = styled.div`
  position: fixed;
  // bottom: 12%;
  bottom: 100px;
  right: 0;
  background-color: rgba(0,0,0,0.65);
  border: 1px solid rgb(236, 132, 100);
  // font-size: 1.55em;
  font-size: 24px;
  // width: 14vw;
  width: 56px;
  // height: 14vw;
  height: 56px;
  border-radius: 7px;
  z-index: 1;
  cursor: pointer;
`;

const MenuContainer = styled.div`
  position: fixed;
  // bottom: 12%;
  bottom: 100px;
  // right: 18%;
  right: 75px;
  background-color: rgba(0,0,0,0.65);
  border: 1px solid rgb(236, 132, 100);
  // font-size: 1.4em;
  font-size: 22px;
  font-style: italic;
  // width: 28vw;
  width: 120px;
  // height: 28vw;
  height: 120px;
  border-radius: 15px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  z-index: 1;
`;

const navLinkStyle = {
    backgroundColor: "rgb(0,0,0,0)",
    color: "rgb(252, 236, 204)",
    textDecoration: "none",
  }

const ChangeView = () => {

    const [showMenu, setShowMenu] = useState(false)

    const menuVisibilty = () => {
        setShowMenu(!showMenu)
    }

  return (
    <>
      <ShowMenuContainer>
        <img
          style={{
            width: "2em",
            height: "auto",
            backgroundColor: "rgb(0,0,0,0)",
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
          src={dots}
          alt="dots menu"
          onClick={menuVisibilty}
        />
      </ShowMenuContainer>
      {showMenu &&
      <MenuContainer>
        <NavLink
          to="/dayview"
          style={navLinkStyle}
          onClick={menuVisibilty}
        >
          Day View
        </NavLink>

        <NavLink
          to="/"
          style={navLinkStyle}
          onClick={menuVisibilty}
        >
          Week View
        </NavLink>

        <NavLink
          to="/notes"
          style={navLinkStyle}
          onClick={menuVisibilty}
        >
          Notes
        </NavLink>
      </MenuContainer>
}
    </>
  );
};

export default ChangeView;
