import { styled } from "styled-components";
import { useLocation } from "react-router-dom";

const HeaderContainer = styled.div`
  // background-color: red;
  height: 4vh;
  margin-bottom: 4vh;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
`;

const VerticalAlign = styled.div`
  // background-color: purple;
  display: flex;
  align-items: baseline;
  height: 6vh;
`;

const Intodoitive = styled.h1`
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
  margin-left: 8vw;
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
      <VerticalAlign>
        <Intodoitive>
          In
          <Dot>•</Dot>
          <i>todo</i>
          <Dot>•</Dot>
          itive
        </Intodoitive>
        <ViewName>{clickedView}</ViewName>
      </VerticalAlign>
    </HeaderContainer>
  );
};

export default Header;
