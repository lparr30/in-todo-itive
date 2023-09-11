import { styled } from "styled-components";
import { useLocation } from "react-router-dom";

const HeaderContainer = styled.div`
  background-color: rgb(22, 22, 22);
  height: 7vh;
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
  font-size: 2.1em;
`;

const Dot = styled.span`
  font-size: 0.6em;
  margin: 0 0.2em;
`;

const ViewName = styled.h2`
  color: rgb(180, 220, 132);
  font-style: italic;
  margin: 0 0 0 8vw;
  padding: 0;
  font-size: 1.4em;
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
