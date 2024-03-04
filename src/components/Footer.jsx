import React from "react";
import GithubIcon from "./Icons/GithubIcon";
import LinkedInIcon from "./Icons/LinkedInIcon";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className='footer'>
      {/* <hr className='footer-line' /> */}
      <p className='credits-text'>
        created by{" "}
        <a className='repo-link' href='https://emad-abdelmaksoud.com' target='_blank'>
          <b>Emad Abdelmaksoud</b>
        </a>
        <br />
        it's open source!{" "}
        <a className='repo-link' href='https://github.com/emadadel999/mystic-square' target='_blank' rel='noopener noreferrer'>
          <b>visit the repo</b>
        </a>
      </p>
      <div className='social-links'>
        <a href='https://github.com/emadadel999' target='_blank' rel='noopener noreferrer'>
          <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 24 24'>
            <path
              fill='white'
              fillRule='evenodd'
              d='M11.999 1C5.926 1 1 5.925 1 12c0 4.86 3.152 8.983 7.523 10.437c.55.102.75-.238.75-.53c0-.26-.009-.952-.014-1.87c-3.06.664-3.706-1.475-3.706-1.475c-.5-1.27-1.221-1.61-1.221-1.61c-.999-.681.075-.668.075-.668c1.105.078 1.685 1.134 1.685 1.134c.981 1.68 2.575 1.195 3.202.914c.1-.71.384-1.195.698-1.47c-2.442-.278-5.01-1.222-5.01-5.437c0-1.2.428-2.183 1.132-2.952c-.114-.278-.491-1.397.108-2.91c0 0 .923-.297 3.025 1.127A10.536 10.536 0 0 1 12 6.32a10.49 10.49 0 0 1 2.754.37c2.1-1.424 3.022-1.128 3.022-1.128c.6 1.514.223 2.633.11 2.911c.705.769 1.13 1.751 1.13 2.952c0 4.226-2.572 5.156-5.022 5.428c.395.34.747 1.01.747 2.037c0 1.47-.014 2.657-.014 3.017c0 .295.199.637.756.53C19.851 20.979 23 16.859 23 12c0-6.075-4.926-11-11.001-11'
            />
          </svg>
        </a>
        <a href='https://www.linkedin.com/in/emad-abdelmaksoud/' target='_blank' rel='noopener noreferrer'>
          <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 128 128'>
            <path fill='#0076b2' d='M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3' />
            <path
              fill='#fff'
              d='M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 1 1-10.5 10.49a10.5 10.5 0 0 1 10.5-10.49m20.41 29h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z'
            />
          </svg>
        </a>
        <a href='https://stackoverflow.com/users/9831547/emad-abdelmaksoud' target='_blank' rel='noopener noreferrer'>
          <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 256 304'>
            <path fill='#bcbbbb' d='M216.33 276.188v-81.211h26.953v108.165H0V194.977h26.954v81.211z' />
            <path
              fill='#f48023'
              d='m56.708 187.276l132.318 27.654l5.6-26.604L62.31 160.672zm17.502-63.009l122.517 57.058l11.202-24.503L85.412 99.414zm33.955-60.208l103.964 86.462l17.152-20.653l-103.964-86.462zM175.375 0L153.67 16.102l80.511 108.515l21.703-16.102zM53.906 248.884h135.119V221.93H53.907z'
            />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
