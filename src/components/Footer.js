import React from "react";
import styled from "styled-components";
import GithubIcon from "./Icons/GithubIcon";
import LinkedInIcon from "./Icons/LinkedInIcon";

const FooterStyled = styled.footer`
  width: 100%;
  margin-top: auto;
  padding-top: 15px;
  padding-bottom: 15px;
`;
const FooterLine = styled.hr`
  width: 100%;
  border-top: 1.5px solid rgb(142, 174, 233);
`;
const CreditsText = styled.p`
  font-size: 0.75em;
  text-align: center;
  color: #212529;
  margin-bottom: 5px;
`;
const RepoLink = styled.a`
  :link {
    color: #212529;
    background-color: transparent;
    text-decoration: none;
  }
  :visited {
    color: #212529;
    background-color: transparent;
    text-decoration: none;
  }
  :hover {
    color: rgb(142, 174, 233);
    background-color: transparent;
    text-decoration: none;
  }
  :active {
    color: rgb(142, 174, 233);
    background-color: transparent;
    text-decoration: none;
  }
`;
const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  a {
    margin: 0 10px 0 10px;
  }
`;
const Footer = () => {
  return (
    <FooterStyled>
      <FooterLine />
      <CreditsText>
        created by Emad Adel
        <br />
        it's open source,{" "}
        <RepoLink
          href="https://github.com/emadadel999/mystic-square"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b>visit the repo</b>
        </RepoLink>
      </CreditsText>
      <SocialLinks>
        <a
          href="https://github.com/emadadel999"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon
            svgWidth="30"
            svgHeight="30"
            fill="#081d45"
            fillOpacity="0.75"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/emad-adel-abusaif"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon
            svgWidth="30"
            svgHeight="30"
            fill="#081d45"
            fillOpacity="0.75"
          />
        </a>
      </SocialLinks>
    </FooterStyled>
  );
};

export default Footer;
