import { styled } from "styled-components";
import { useLocation } from "react-router-dom";

const HeaderContainer = styled.div`
background-color: red;
    height: 4vh;
    position: sticky;
    padding-bottom: 6%;
    top: 0;
    display: flex;
    align-items: baseline;
`

const Intodoitive = styled.h1`
// position: relative;
  color: rgb(236, 132, 100);
  margin-left: 5vw;
  font-size: 2.75em;
`;

const Dot = styled.span`
  font-size: 0.6em;
  margin: 0 0.2em;
`;

const ViewName = styled.h2`
    color: rgb(180, 220, 132);
    font-style: italic;
    margin-left: 15vw;
  font-size: 2em;
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
