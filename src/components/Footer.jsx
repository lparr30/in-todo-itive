import { styled } from "styled-components";

const FooterContainer = styled.footer`
    height: 3vh;
    padding-top: 1vh;
    text-align: center;
    background-color: purple;
  color: rgb(236, 132, 100);
  // display: flex;
  // justify-content: center;
  // align-items: center;
`;

const Footer = () => {
  return <FooterContainer>&copy; Liza Parr 2023</FooterContainer>;
};

export default Footer;
