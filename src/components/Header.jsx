import { styled } from "styled-components";

const HeaderContainer = styled.div`
    height: 7.5vh;
    position: sticky;
    top: 0;
    display: flex;
    align-items: baseline;
    // justify-content: space-evenly;
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
        Name
      </ViewName>
    </HeaderContainer>
  );
};

export default Header;
