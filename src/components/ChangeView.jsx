import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import dots from "../assets/dots.png";
import { useState } from "react";

const ShowMenuContainer = styled.div`
  position: fixed;
  bottom: 12%;
  right: 0;
  background-color: rgba(32, 34, 95, 0.687);
  border: 1px solid var(--orange);
  font-size: 1.55em;
  width: 14vw;
  height: 14vw;
  border-radius: 7px;
`;

const MenuContainer = styled.div`
  position: fixed;
  bottom: 12%;
  right: 20%;
  background-color: rgba(32, 34, 95, 0.687);
  border: 1px solid var(--orange);
  font-size: 1.55em;
  font-style: italic;
  width: 28vw;
  height: 28vw;
  border-radius: 15px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
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
