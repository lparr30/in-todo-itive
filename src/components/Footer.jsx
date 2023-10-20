import { styled } from "styled-components";

const FooterContainer = styled.footer`
    // background-color: purple;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    width: 100%;
    height: 20px;
    // padding-top: 8px;
    padding: 10px 0;
    text-align: center;
    color: rgb(236, 132, 100);
`;

const Footer = () => {
  return <FooterContainer>&copy; Liza Parr 2023</FooterContainer>;
};

export default Footer;
