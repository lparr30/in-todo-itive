import { styled } from "styled-components";
import { useLocation } from "react-router-dom";
import { click } from "@testing-library/user-event/dist/click";

const HeaderContainer = styled.div`
    height: 5vh;
    position: sticky;
    padding-bottom: 4%;
    top: 0;
    display: flex;
    align-items: baseline;
`

const Intodoitive = styled.h1`
  color: rgb(236, 132, 100);
  margin-left: 5vw;
`;

const Dot = styled.span`
  font-size: 0.6em;
  margin: 0 0.2em;
`;

const ViewName = styled.h2`
    color: rgb(180, 220, 132);
    font-style: italic;
    margin-left: 20vw;

`

const Header = () => {
    let clickedView = useLocation().pathname;
    if (clickedView === '/') {
        clickedView = 'Week View'
    } else if (clickedView === '/dayview') {
        clickedView = 'Day View'
    } else {
        clickedView = 'Notes'
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
      <ViewName>
        {clickedView}
      </ViewName>
    </HeaderContainer>
  );
};

export default Header;
