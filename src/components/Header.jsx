import { styled } from "styled-components";
import { useLocation } from "react-router-dom";

const HeaderContainer = styled.div`
  background-color: rgb(22, 22, 22);
  // background-color: blue;
  height: 55px;
  position: sticky;
  top: 0;
  display: flex;
  align-items: flex-end;
  z-index: 1;
  padding-bottom: 2vh;
  transform: translate(0px, -1px);
`;

const Intodoitive = styled.h1`
  margin: 0;
  color: rgb(236, 132, 100);
  // font-size: 2.1em;
  font-size: 32px;
`;

const Dot = styled.span`
  // font-size: 0.6em;
  font-size: 20px;
  // margin: 0 0.2em;
  margin: 0 3px;
`;

const ViewName = styled.h2`
  color: rgb(180, 220, 132);
  font-style: italic;
  // margin: 0 0 0 8vw;
  // margin: 0;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0;
  font-size: 1.4em;
  font-size: 22px;
`;

const Header = () => {
  let clickedView = useLocation().pathname;
  if (clickedView === "/") {
    clickedView = "Week View";
  } else if (clickedView === "/dayview") {
    clickedView = "Day View";
  } else {
    clickedView = "Notes";
  }

  return (
    <HeaderContainer>
      <Intodoitive>
        In
        <Dot>•</Dot>
        <i>todo</i>
        <Dot>•</Dot>
        itive
      </Intodoitive>
      <ViewName>{clickedView}</ViewName>
    </HeaderContainer>
  );
};

export default Header;
