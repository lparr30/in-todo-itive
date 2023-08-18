import { styled } from "styled-components";

const FooterContainer = styled.footer`
  // background-color: purple;
  height: 3vh;
  padding-top: 1vh;
  text-align: center;
  color: rgb(236, 132, 100);
`;

const Footer = () => {
  return <FooterContainer>&copy; Liza Parr 2023</FooterContainer>;
};

export default Footer;
